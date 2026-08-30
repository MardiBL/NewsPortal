import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'

export async function POST(request) {
  try {
    const body = await request.json()

    const { name, email, password } = body

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Name, email, dan password wajib diisi',
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

    const normalizedEmail = email.toLowerCase().trim()

    const existingUser = await prisma.user.findUnique({
      where: {
        email: normalizedEmail,
      },
    })

    if (existingUser) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email sudah terdaftar',
        },
        { status: 400 },
      )
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
      data: {
        name: name.trim(),
        email: normalizedEmail,
        password: hashedPassword,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Register berhasil',
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          createdAt: user.createdAt,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('REGISTER ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Terjadi kesalahan server',
      },
      { status: 500 },
    )
  }
}
