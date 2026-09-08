import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const settings = await prisma.setting.findMany({
      orderBy: {
        key: 'asc',
      },
    })

    return NextResponse.json({
      success: true,
      data: settings,
    })
  } catch (error) {
    console.error('GET SETTINGS ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil settings',
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const key = body.key?.trim()
    const value = typeof body.value === 'string' ? body.value : null

    if (!key) {
      return NextResponse.json(
        {
          success: false,
          message: 'Key wajib diisi',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.setting.findUnique({
      where: {
        key,
      },
    })

    if (existing) {
      const setting = await prisma.setting.update({
        where: {
          key,
        },
        data: {
          value,
        },
      })

      return NextResponse.json({
        success: true,
        message: 'Setting berhasil diperbarui',
        data: setting,
      })
    }

    const setting = await prisma.setting.create({
      data: {
        key,
        value,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Setting berhasil dibuat',
        data: setting,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('CREATE SETTING ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menyimpan setting',
      },
      { status: 500 },
    )
  }
}
