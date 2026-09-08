import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const featuredId = Number(id)

    if (!Number.isInteger(featuredId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID featured tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.featuredNews.findUnique({
      where: {
        id: featuredId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Featured news tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const body = await request.json()

    const position =
      typeof body.position !== 'undefined' ? Number(body.position) : undefined

    const isActive =
      typeof body.isActive === 'boolean' ? body.isActive : undefined

    if (typeof position !== 'undefined' && !Number.isInteger(position)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Position tidak valid',
        },
        { status: 400 },
      )
    }

    const featured = await prisma.featuredNews.update({
      where: {
        id: featuredId,
      },
      data: {
        ...(position !== undefined ? { position } : {}),
        ...(isActive !== undefined ? { isActive } : {}),
      },
      include: {
        news: true,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Featured news berhasil diperbarui',
      data: featured,
    })
  } catch (error) {
    console.error('UPDATE FEATURED ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal memperbarui featured news',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params
    const featuredId = Number(id)

    if (!Number.isInteger(featuredId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID featured tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.featuredNews.findUnique({
      where: {
        id: featuredId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Featured news tidak ditemukan',
        },
        { status: 404 },
      )
    }

    await prisma.featuredNews.delete({
      where: {
        id: featuredId,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Featured news berhasil dihapus',
    })
  } catch (error) {
    console.error('DELETE FEATURED ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus featured news',
      },
      { status: 500 },
    )
  }
}
