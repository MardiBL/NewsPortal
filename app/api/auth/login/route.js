import { NextResponse } from 'next/server'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { prisma } from '@/lib/prisma'

export async function POST(request) {
  try {
    const body = await request.json()

    const email = body.email?.trim().toLowerCase()
    const password = body.password

    if (!email || !password) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email dan password wajib diisi',
        },
        { status: 400 },
      )
    }

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email atau password salah',
        },
        { status: 401 },
      )
    }

    if (!user.isActive) {
      return NextResponse.json(
        {
          success: false,
          message: 'Akun Anda tidak aktif',
        },
        { status: 403 },
      )
    }

    const passwordValid = await bcrypt.compare(password, user.password)

    if (!passwordValid) {
      return NextResponse.json(
        {
          success: false,
          message: 'Email atau password salah',
        },
        { status: 401 },
      )
    }

    const jwtSecret = process.env.JWT_SECRET

    if (!jwtSecret) {
      console.error('JWT_SECRET belum diset')

      return NextResponse.json(
        {
          success: false,
          message: 'Konfigurasi server belum lengkap',
        },
        { status: 500 },
      )
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      jwtSecret,
      {
        expiresIn: '7d',
      },
    )

    const response = NextResponse.json(
      {
        success: true,
        message: 'Login berhasil',
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role,
          isActive: user.isActive,
        },
      },
      { status: 200 },
    )

    response.cookies.set({
      name: 'token',
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
    })

    return response
  } catch (error) {
    console.error('LOGIN ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Terjadi kesalahan saat login',
      },
      { status: 500 },
    )
  }
}
