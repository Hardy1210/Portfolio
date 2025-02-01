//api fait pour les appel apis avec prisma pour  l'estocage de likes
//tu peut reinitianilez le competuer dant ta base de donnees ou dans prisma studio via
// la comande npx prisma studio
// API para manejar likes con Prisma y almacenar en la base de datos
import { prisma } from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { slug, visitorId } = req.method === 'GET' ? req.query : req.body

  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({
      error: 'El parámetro "slug" es obligatorio y debe ser un string.',
    })
  }

  try {
    res.setHeader('Cache-Control', 'no-store, max-age=0')

    if (req.method === 'GET') {
      // Contar los likes para el slug
      const count = await prisma.like.count({ where: { slug } })
      return res.status(200).json({ count })
    } else if (req.method === 'POST') {
      if (!visitorId || typeof visitorId !== 'string') {
        return res.status(400).json({
          error:
            'El parámetro "visitorId" es obligatorio y debe ser un string.',
        })
      }
      // Añadir un like
      await prisma.like.upsert({
        where: { slug_visitorId: { slug, visitorId } },
        update: {},
        create: { slug, visitorId },
      })
      const count = await prisma.like.count({ where: { slug } })
      return res.status(200).json({ count })
    } else if (req.method === 'DELETE') {
      if (!visitorId || typeof visitorId !== 'string') {
        return res.status(400).json({
          error:
            'El parámetro "visitorId" es obligatorio y debe ser un string.',
        })
      }
      // Quitar un like
      await prisma.like.delete({
        where: { slug_visitorId: { slug, visitorId } },
      })
      const count = await prisma.like.count({ where: { slug } })
      return res.status(200).json({ count })
    } else {
      return res.status(405).json({ error: 'Método no permitido.' })
    }
  } catch (error: unknown) {
    console.error('Error en la API de likes:', error)
    if (error instanceof Error) {
      return res
        .status(500)
        .json({ error: 'Error interno del servidor.', details: error.message })
    }
    return res.status(500).json({ error: 'Error interno del servidor.' })
  }
}
