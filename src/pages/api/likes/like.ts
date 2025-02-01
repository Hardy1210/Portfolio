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
  const { slug, visitorId } = req.body || req.query

  if (!slug || typeof slug !== 'string') {
    return res
      .status(400)
      .json({ error: 'El slug es obligatorio y debe ser una cadena.' })
  }

  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate',
  )
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')

  try {
    if (req.method === 'GET') {
      // Obtener el número total de likes para el slug
      const totalLikes = await prisma.like.aggregate({
        _count: true,
        where: { slug },
      })
      return res.status(200).json({ likes: totalLikes._count })
    }

    if (req.method === 'POST') {
      // Añadir un like si no existe ya
      await prisma.like.upsert({
        where: { slug_visitorId: { slug, visitorId } },
        create: { slug, visitorId, count: 1 },
        update: {}, // Si ya existe, no hace nada
      })

      const totalLikes = await prisma.like.aggregate({
        _count: true,
        where: { slug },
      })
      return res.status(200).json({ likes: totalLikes._count })
    }

    if (req.method === 'DELETE') {
      // Quitar el like del visitante actual
      await prisma.like.delete({
        where: { slug_visitorId: { slug, visitorId } },
      })

      const totalLikes = await prisma.like.aggregate({
        _count: true,
        where: { slug },
      })
      return res.status(200).json({ likes: totalLikes._count })
    }

    return res.status(405).json({ error: 'Método no permitido.' })
  } catch (error) {
    console.error('Error en la API de likes:', error)
    return res.status(500).json({ error: 'Error interno del servidor.' })
  }
}
