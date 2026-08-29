import { prisma } from '@/lib/prisma'

export async function getCategories() {
  return await prisma.category.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export async function getCategoryById(id) {
  return await prisma.category.findUnique({
    where: {
      id: Number(id),
    },
  })
}

export async function createCategory(data) {
  const { name, slug } = data

  if (!name || !slug) {
    throw new Error('Name dan slug wajib diisi')
  }

  return await prisma.category.create({
    data: {
      name,
      slug,
    },
  })
}

export async function updateCategory(id, data) {
  return await prisma.category.update({
    where: {
      id: Number(id),
    },
    data: {
      name: data.name,
      slug: data.slug,
    },
  })
}

export async function deleteCategory(id) {
  return await prisma.category.delete({
    where: {
      id: Number(id),
    },
  })
}
