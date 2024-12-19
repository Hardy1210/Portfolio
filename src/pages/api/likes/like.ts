//api fait pour les appel apis avec prisma pour  l'estocage de likes
//tu peut reinitianilez le competuer dant ta base de donnees ou dans prisma studio via
// la comande npx prisma studio
import { PrismaClient } from '@prisma/client'
import { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const slug =
    req.method === 'POST' ? (req.body as { slug: string }).slug : req.query.slug

  console.log("Slug reçu dans l'API:", slug) // Debugging le slug

  //if (!slug) {
  //return res.status(400).json({ error: 'slug is required' })
  //}

  if (req.method === 'POST') {
    try {
      const like = await prisma.like.upsert({
        where: { slug: slug as string },
        update: { count: { increment: 1 } },
        create: { slug: slug as string, count: 1 },
      })
      res.status(200).json({ likes: like.count })
    } catch (error) {
      console.error('Erreur Prisma lors du POST:', error) // Affichage de l'erreur pour débogage
      res.status(500).json({ error: 'Erreur lors de l’ajout du like' })
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
      console.error('Erreur Prisma lors du GET:', error) // Affichage de l'erreur pour débogage
      res
        .status(500)
        .json({ error: 'Erreur lors de la récupération des likes' })
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' })
  }
}
