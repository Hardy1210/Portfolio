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
  let isProcessing = false
  if (isProcessing) {
    return res.status(400).json({
      error: 'Ya se está procesando una solicitud.',
    })
  }
  if (!slug || typeof slug !== 'string') {
    return res.status(400).json({
      error: 'El parámetro "slug" es obligatorio y debe ser un string.',
    })
  }

  try {
    if (req.method === 'GET') {
      // Obtener el total de likes
      const count = await prisma.like.aggregate({
        _sum: { count: true },
        where: { slug },
      })

      // Verificar si el usuario ya dio like
      const hasLiked = visitorId
        ? !!(await prisma.like.findUnique({
            where: { slug_visitorId: { slug, visitorId: visitorId as string } },
          }))
        : false

      return res.status(200).json({
        count: count._sum.count || 0,
        hasLiked, // Indica si el usuario ya dio like
      })
    }

    if (!visitorId || typeof visitorId !== 'string') {
      return res.status(400).json({
        error: 'El parámetro "visitorId" es obligatorio y debe ser un string.',
      })
    }

    // Manejo de POST y DELETE sigue igual
    if (req.method === 'POST') {
      const existingLike = await prisma.like.findUnique({
        where: { slug_visitorId: { slug, visitorId } },
      })

      if (existingLike) {
        return res
          .status(400)
          .json({ error: 'Ya diste like a este contenido.' })
      }

      await prisma.like.create({
        data: { slug, visitorId, count: 1 },
      })

      const count = await prisma.like.aggregate({
        _sum: { count: true },
        where: { slug },
      })

      return res.status(200).json({ count: count._sum.count || 0 })
    } else if (req.method === 'DELETE') {
      const existingLike = await prisma.like.findUnique({
        where: { slug_visitorId: { slug, visitorId } },
      })

      if (!existingLike) {
        return res.status(400).json({ error: 'No has dado like aún.' })
      }

      await prisma.like.delete({
        where: { slug_visitorId: { slug, visitorId } },
      })

      const count = await prisma.like.aggregate({
        _sum: { count: true },
        where: { slug },
      })

      return res.status(200).json({ count: count._sum.count || 0 })
    } else {
      return res.status(405).json({ error: 'Método no permitido.' })
    }
  } catch (error) {
    console.error('Error en la API de likes:', error)
    return res.status(500).json({ error: 'Error interno del servidor.' })
  } finally {
    isProcessing = false
  }
}
