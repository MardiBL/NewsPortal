import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request, { params }) {
  try {
    const { key } = await params

    if (!key) {
      return NextResponse.json(
        {
          success: false,
          message: 'Key wajib diisi',
        },
        { status: 400 },
      )
    }

    const setting = await prisma.setting.findUnique({
      where: {
        key,
      },
    })

    if (!setting) {
      return NextResponse.json(
        {
          success: false,
          message: 'Setting tidak ditemukan',
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: setting,
    })
  } catch (error) {
    console.error('GET SETTING ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil setting',
      },
      { status: 500 },
    )
  }
}

export async function PUT(request, { params }) {
  try {
    const { key } = await params

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

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Setting tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const body = await request.json()

    const value = typeof body.value === 'string' ? body.value : null

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
  } catch (error) {
    console.error('UPDATE SETTING ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal memperbarui setting',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { key } = await params

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

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Setting tidak ditemukan',
        },
        { status: 404 },
      )
    }

    await prisma.setting.delete({
      where: {
        key,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Setting berhasil dihapus',
    })
  } catch (error) {
    console.error('DELETE SETTING ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus setting',
      },
      { status: 500 },
    )
  }
}
