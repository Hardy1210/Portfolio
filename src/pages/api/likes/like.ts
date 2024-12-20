//api fait pour les appel apis avec prisma pour  l'estocage de likes
//tu peut reinitianilez le competuer dant ta base de donnees ou dans prisma studio via
// la comande npx prisma studio
// API para manejar likes con Prisma y almacenar en la base de datos
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

// Aumentar tiempo máximo de ejecución de las consultas Prisma
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'], // Para ayudar con la depuración
})

// Extender el tiempo de espera en Vercel para Prisma (solo para la instancia actual)
export const config = {
  api: {
    bodyParser: true,
    externalResolver: true, // Permite resolver solicitudes externas más lentas
  },
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const slug =
    req.method === 'POST' ? (req.body as { slug: string }).slug : req.query.slug

  console.log("Slug reçu dans l'API:", slug) // Log para depuración

  if (!slug) {
    return res.status(400).json({ error: 'Slug is required' })
  }

  if (req.method === 'POST') {
    try {
      console.time('Prisma POST Operation') // Medir tiempo de la operación

      const like = await prisma.like.upsert({
        where: { slug: slug as string },
        update: { count: { increment: 1 } },
        create: { slug: slug as string, count: 1 },
      })

      console.timeEnd('Prisma POST Operation') // Log del tiempo tomado
      return res.status(200).json({ likes: like.count })
    } catch (error) {
      console.error('Erreur Prisma lors du POST:', error)
      return res
        .status(500)
        .json({ error: 'Erreur lors de l’ajout du like', details: error })
    }
  } else if (req.method === 'GET') {
    try {
      console.time('Prisma GET Operation') // Medir tiempo de la operación

      const like = await prisma.like.findUnique({
        where: { slug: slug as string },
      })

      console.timeEnd('Prisma GET Operation') // Log del tiempo tomado

      if (like) {
        return res.status(200).json({ likes: like.count })
      } else {
        return res.status(404).json({ error: 'Like non trouvé pour ce slug' })
      }
    } catch (error) {
      console.error('Erreur Prisma lors du GET:', error)
      return res
        .status(500)
        .json({
          error: 'Erreur lors de la récupération des likes',
          details: error,
        })
    }
  } else {
    return res.status(405).json({ message: 'Méthode non autorisée' })
  }
}
