import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            news: true,
            likes: true,
            comments: true,
          },
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    })

    return NextResponse.json({
      success: true,
      data: users,
    })
  } catch (error) {
    console.error('GET USERS ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil user',
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const name = body.name?.trim()
    const email = body.email?.trim().toLowerCase()
    const password = body.password

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Nama, email, dan password wajib diisi',
        },
        { status: 400 },
      )
    }

    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email sudah digunakan',
        },
        { status: 409 },
      )
    }

    const bcrypt = await import('bcryptjs')

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role: 'USER',
        isActive: true,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'User berhasil dibuat',
        data: user,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('CREATE USER ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal membuat user',
      },
      { status: 500 },
    )
  }
}
