import { prisma } from '@/lib/prisma'
import bcrypt from 'bcryptjs'

export async function getUsers() {
  return await prisma.user.findMany({
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
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
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  })
}

export async function createUser(data) {
  const { name, email, password } = data

  if (!name || !email || !password) {
    throw new Error('Name, email, dan password wajib diisi')
  }

  if (password.length < 6) {
    throw new Error('Password minimal 6 karakter')
  }

  const existingUser = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (existingUser) {
    throw new Error('Email sudah terdaftar')
  }

  const hashedPassword = await bcrypt.hash(password, 10)

  return await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role: 'USER',
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    },
  })
}

export async function updateUser(id, data) {
  const updateData = {
    name: data.name,
    email: data.email,
  }

  if (data.password) {
    updateData.password = await bcrypt.hash(data.password, 10)
  }

  return await prisma.user.update({
    where: {
      id: Number(id),
    },
    data: updateData,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
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
