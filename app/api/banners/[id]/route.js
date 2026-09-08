import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request, { params }) {
  try {
    const { id } = await params
    const bannerId = Number(id)

    if (!Number.isInteger(bannerId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID banner tidak valid',
        },
        { status: 400 },
      )
    }

    const banner = await prisma.banner.findUnique({
      where: {
        id: bannerId,
      },
    })

    if (!banner) {
      return NextResponse.json(
        {
          success: false,
          message: 'Banner tidak ditemukan',
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: banner,
    })
  } catch (error) {
    console.error('GET BANNER ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil banner',
      },
      { status: 500 },
    )
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const bannerId = Number(id)

    if (!Number.isInteger(bannerId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID banner tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.banner.findUnique({
      where: {
        id: bannerId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Banner tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const body = await request.json()

    let startAt

    if (body.startAt) {
      startAt = new Date(body.startAt)

      if (Number.isNaN(startAt.getTime())) {
        return NextResponse.json(
          {
            success: false,
            message: 'startAt tidak valid',
          },
          { status: 400 },
        )
      }
    }

    let endAt

    if (body.endAt) {
      endAt = new Date(body.endAt)

      if (Number.isNaN(endAt.getTime())) {
        return NextResponse.json(
          {
            success: false,
            message: 'endAt tidak valid',
          },
          { status: 400 },
        )
      }
    }

    const status = body.status?.trim().toUpperCase()

    if (status && !['ACTIVE', 'INACTIVE'].includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Status banner tidak valid',
        },
        { status: 400 },
      )
    }

    const updated = await prisma.banner.update({
      where: {
        id: bannerId,
      },
      data: {
        ...(body.title !== undefined ? { title: body.title } : {}),
        ...(body.image !== undefined ? { image: body.image.trim() } : {}),
        ...(body.link !== undefined ? { link: body.link } : {}),
        ...(body.position !== undefined
          ? { position: body.position.trim().toUpperCase() }
          : {}),
        ...(status ? { status } : {}),
        ...(startAt ? { startAt } : {}),
        ...(body.startAt === null ? { startAt: null } : {}),
        ...(endAt ? { endAt } : {}),
        ...(body.endAt === null ? { endAt: null } : {}),
        ...(body.sortOrder !== undefined
          ? { sortOrder: Number(body.sortOrder) }
          : {}),
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Banner berhasil diperbarui',
      data: updated,
    })
  } catch (error) {
    console.error('UPDATE BANNER ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal memperbarui banner',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params
    const bannerId = Number(id)

    if (!Number.isInteger(bannerId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID banner tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.banner.findUnique({
      where: {
        id: bannerId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Banner tidak ditemukan',
        },
        { status: 404 },
      )
    }

    await prisma.banner.delete({
      where: {
        id: bannerId,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Banner berhasil dihapus',
    })
  } catch (error) {
    console.error('DELETE BANNER ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus banner',
      },
      { status: 500 },
    )
  }
}
