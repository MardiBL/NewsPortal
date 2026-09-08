import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const now = new Date()

    const breakingNews = await prisma.breakingNews.findMany({
      where: {
        status: 'ACTIVE',
        startedAt: {
          lte: now,
        },
        OR: [
          {
            endedAt: null,
          },
          {
            endedAt: {
              gte: now,
            },
          },
        ],
      },
      orderBy: {
        startedAt: 'desc',
      },
    })

    return NextResponse.json({
      success: true,
      data: breakingNews,
    })
  } catch (error) {
    console.error('GET BREAKING NEWS ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil breaking news',
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const title = body.title?.trim()
    const slug = body.slug?.trim().toLowerCase() || null
    const status = body.status?.trim().toUpperCase() || 'ACTIVE'
    const startedAt = body.startedAt ? new Date(body.startedAt) : new Date()
    const endedAt = body.endedAt ? new Date(body.endedAt) : null

    if (!title) {
      return NextResponse.json(
        {
          success: false,
          message: 'Title wajib diisi',
        },
        { status: 400 },
      )
    }

    if (!['ACTIVE', 'INACTIVE'].includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Status tidak valid',
        },
        { status: 400 },
      )
    }

    if (Number.isNaN(startedAt.getTime())) {
      return NextResponse.json(
        {
          success: false,
          message: 'startedAt tidak valid',
        },
        { status: 400 },
      )
    }

    if (endedAt && Number.isNaN(endedAt.getTime())) {
      return NextResponse.json(
        {
          success: false,
          message: 'endedAt tidak valid',
        },
        { status: 400 },
      )
    }

    if (slug) {
      const existing = await prisma.breakingNews.findUnique({
        where: {
          slug,
        },
      })

      if (existing) {
        return NextResponse.json(
          {
            success: false,
            message: 'Slug sudah digunakan',
          },
          { status: 409 },
        )
      }
    }

    const breakingNews = await prisma.breakingNews.create({
      data: {
        title,
        slug,
        status,
        startedAt,
        endedAt,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Breaking news berhasil dibuat',
        data: breakingNews,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('CREATE BREAKING NEWS ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal membuat breaking news',
      },
      { status: 500 },
    )
  }
}
