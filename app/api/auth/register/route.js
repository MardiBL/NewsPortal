import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

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

    if (password.length < 6) {
      return NextResponse.json(
        {
          success: false,
          message: 'Password minimal 6 karakter',
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
          message: 'Email sudah terdaftar',
        },
        { status: 409 },
      )
    }

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
        message: 'Registrasi berhasil',
        data: user,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('REGISTER ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Terjadi kesalahan saat registrasi',
      },
      { status: 500 },
    )
  }
}
