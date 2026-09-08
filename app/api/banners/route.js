import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)

    const position = searchParams.get('position')?.trim().toUpperCase()

    const now = new Date()

    const banners = await prisma.banner.findMany({
      where: {
        status: 'ACTIVE',
        ...(position ? { position } : {}),
        AND: [
          {
            OR: [
              {
                startAt: null,
              },
              {
                startAt: {
                  lte: now,
                },
              },
            ],
          },
          {
            OR: [
              {
                endAt: null,
              },
              {
                endAt: {
                  gte: now,
                },
              },
            ],
          },
        ],
      },
      orderBy: {
        sortOrder: 'asc',
      },
    })

    return NextResponse.json({
      success: true,
      data: banners,
    })
  } catch (error) {
    console.error('GET BANNERS ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil banner',
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const title = body.title?.trim() || null
    const image = body.image?.trim()
    const link = body.link?.trim() || null
    const position = body.position?.trim().toUpperCase() || 'HOME'
    const status = body.status?.trim().toUpperCase() || 'ACTIVE'
    const sortOrder = Number(body.sortOrder) || 1

    const startAt = body.startAt ? new Date(body.startAt) : null

    const endAt = body.endAt ? new Date(body.endAt) : null

    if (!image) {
      return NextResponse.json(
        {
          success: false,
          message: 'Image banner wajib diisi',
        },
        { status: 400 },
      )
    }

    if (startAt && Number.isNaN(startAt.getTime())) {
      return NextResponse.json(
        {
          success: false,
          message: 'startAt tidak valid',
        },
        { status: 400 },
      )
    }

    if (endAt && Number.isNaN(endAt.getTime())) {
      return NextResponse.json(
        {
          success: false,
          message: 'endAt tidak valid',
        },
        { status: 400 },
      )
    }

    if (!['ACTIVE', 'INACTIVE'].includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Status banner tidak valid',
        },
        { status: 400 },
      )
    }

    const banner = await prisma.banner.create({
      data: {
        title,
        image,
        link,
        position,
        status,
        startAt,
        endAt,
        sortOrder,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Banner berhasil dibuat',
        data: banner,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('CREATE BANNER ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal membuat banner',
      },
      { status: 500 },
    )
  }
}
