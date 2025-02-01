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
  res.setHeader(
    'Cache-Control',
    'no-store, no-cache, must-revalidate, proxy-revalidate',
  )
  res.setHeader('Pragma', 'no-cache')
  res.setHeader('Expires', '0')

  const { slug, visitorId } =
    req.method === 'POST' || req.method === 'DELETE' ? req.body : req.query

  if (
    !slug ||
    typeof slug !== 'string' ||
    !visitorId ||
    typeof visitorId !== 'string'
  ) {
    return res
      .status(400)
      .json({
        error:
          'El slug y el visitorId son obligatorios y deben ser cadenas válidas.',
      })
  }

  if (req.method === 'POST') {
    try {
      // Verificar si el registro ya existe
      const existingLike = await prisma.like.findUnique({
        where: {
          slug_visitorId: { slug, visitorId },
        },
      })

      if (existingLike) {
        return res
          .status(400)
          .json({ error: 'Ya has dado like a este contenido.' })
      }

      // Crear un nuevo like
      await prisma.like.create({
        data: { slug, visitorId },
      })

      // Contar el total de likes
      const count = await prisma.like.count({ where: { slug } })
      return res.status(200).json({ count })
    } catch (error) {
      console.error('Error al añadir el like:', error)
      return res
        .status(500)
        .json({ error: 'Error al añadir el like', details: error })
    }
  } else if (req.method === 'DELETE') {
    try {
      // Verificar si el like existe
      const existingLike = await prisma.like.findUnique({
        where: {
          slug_visitorId: { slug, visitorId },
        },
      })

      if (!existingLike) {
        return res
          .status(404)
          .json({ error: 'No existe un like para este visitante y contenido.' })
      }

      // Eliminar el like
      await prisma.like.delete({
        where: {
          slug_visitorId: { slug, visitorId },
        },
      })

      // Contar el total de likes
      const count = await prisma.like.count({ where: { slug } })
      return res.status(200).json({ count })
    } catch (error) {
      console.error('Error al eliminar el like:', error)
      return res
        .status(500)
        .json({ error: 'Error al eliminar el like', details: error })
    }
  } else if (req.method === 'GET') {
    try {
      // Contar el total de likes
      const count = await prisma.like.count({ where: { slug } })
      return res.status(200).json({ count })
    } catch (error) {
      console.error('Error al obtener los likes:', error)
      return res
        .status(500)
        .json({ error: 'Error al obtener los likes', details: error })
    }
  } else {
    return res.status(405).json({ error: 'Método no permitido' })
  }
}
