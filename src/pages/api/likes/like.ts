//api fait pour les appel apis avec prisma pour  l'estocage de likes
//tu peut reinitianilez le competuer dant ta base de donnees ou dans prisma studio via
// la comande npx prisma studio
// API para manejar likes con Prisma y almacenar en la base de datos
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const slug =
    req.method === 'POST' ? (req.body as { slug: string }).slug : req.query.slug

  if (!slug || typeof slug !== 'string') {
    console.error('Error: El slug es inválido o no está definido:', slug)
    return res
      .status(400)
      .json({ error: 'El slug es obligatorio y debe ser un string.' })
  }

  console.log("Slug reçu dans l'API:", slug)
  if (req.method === 'POST') {
    try {
      // Verificar si el registro ya existe
      const existingLike = await prisma.like.findUnique({
        where: { slug: slug as string },
      })

      let updatedLike
      if (existingLike) {
        // Si existe, incrementa el contador
        updatedLike = await prisma.like.update({
          where: { slug: slug as string },
          data: { count: { increment: 1 } },
        })
      } else {
        // Si no existe, crea el registro
        updatedLike = await prisma.like.create({
          data: { slug: slug as string, count: 1 },
        })
      }

      res.status(200).json({ likes: updatedLike.count })
    } catch (error) {
      console.error('Erreur Prisma lors du POST:', error) // Log del error
      res
        .status(500)
        .json({ error: 'Erreur lors de l’ajout du like', details: error })
    }
  } else if (req.method === 'GET') {
    try {
      const like = await prisma.like.findUnique({
        where: { slug: slug as string },
      })

      if (like) {
        res.status(200).json({ likes: like.count })
      } else {
        res.status(404).json({ error: 'Like non trouvé pour ce slug' })
      }
    } catch (error) {
      console.error('Erreur Prisma lors du GET:', error) // Log del error
      res.status(500).json({
        error: 'Erreur lors de la récupération des likes',
        details: error,
      })
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' })
  }
}
