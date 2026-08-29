import { prisma } from '@/lib/prisma'

export async function getUsers() {
  return await prisma.user.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  })
}

export async function getUserById(id) {
  return await prisma.user.findUnique({
    where: {
      id: Number(id),
    },
  })
}

export async function createUser(data) {
  const { name, email, password } = data

  if (!name || !email || !password) {
    throw new Error('Name, email, dan password wajib diisi')
  }

  return await prisma.user.create({
    data: {
      name,
      email,
      password,
    },
  })
}

export async function updateUser(id, data) {
  return await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: {
      name: data.name,
      email: data.email,
      password: data.password,
    },
  })
}

export async function deleteUser(id) {
  return await prisma.user.delete({
    where: {
      id: Number(id),
    },
  })
}
