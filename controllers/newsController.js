import { prisma } from '@/lib/prisma'

export async function getNews() {
  return await prisma.news.findMany({
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      category: true,
    },
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export async function getNewsBySlug(slug) {
  return await prisma.news.findUnique({
    where: {
      slug,
    },
    include: {
      author: {
        select: {
          id: true,
          name: true,
          email: true,
        },
      },
      category: true,
    },
  })
}

export async function createNews(data) {
  const {
    title,
    slug,
    description,
    content,
    image,
    views,
    authorId,
    categoryId,
  } = data

  if (!title || !slug || !content || !authorId || !categoryId) {
    throw new Error(
      'title, slug, content, authorId, dan categoryId wajib diisi',
    )
  }

  return await prisma.news.create({
    data: {
      title,
      slug,
      description,
      content,
      image,
      views: Number(views) || 0,
      authorId: Number(authorId),
      categoryId: Number(categoryId),
    },
    include: {
      author: true,
      category: true,
    },
  })
}

export async function updateNews(slug, data) {
  return await prisma.news.update({
    where: {
      slug,
    },
    data: {
      title: data.title,
      slug: data.newSlug || slug,
      description: data.description,
      content: data.content,
      image: data.image,
      views: data.views !== undefined ? Number(data.views) : undefined,
      categoryId:
        data.categoryId !== undefined ? Number(data.categoryId) : undefined,
    },
    include: {
      author: true,
      category: true,
    },
  })
}

export async function deleteNews(slug) {
  return await prisma.news.delete({
    where: {
      slug,
    },
  })
}
