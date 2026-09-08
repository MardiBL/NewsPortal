import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const featured = await prisma.featuredNews.findMany({
      where: {
        isActive: true,
        news: {
          status: 'PUBLISHED',
        },
      },
      orderBy: {
        position: 'asc',
      },
      include: {
        news: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
              },
            },
            category: {
              select: {
                id: true,
                name: true,
                slug: true,
              },
            },
          },
        },
      },
    })

    return NextResponse.json({
      success: true,
      data: featured,
    })
  } catch (error) {
    console.error('GET FEATURED ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil berita utama',
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const newsId = Number(body.newsId)
    const position = Number(body.position) || 1
    const isActive = typeof body.isActive === 'boolean' ? body.isActive : true

    if (!Number.isInteger(newsId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'newsId tidak valid',
        },
        { status: 400 },
      )
    }

    const news = await prisma.news.findUnique({
      where: {
        id: newsId,
      },
    })

    if (!news) {
      return NextResponse.json(
        {
          success: false,
          message: 'Berita tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const existing = await prisma.featuredNews.findUnique({
      where: {
        newsId,
      },
    })

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Berita sudah ada di featured',
        },
        { status: 409 },
      )
    }

    const featured = await prisma.featuredNews.create({
      data: {
        newsId,
        position,
        isActive,
      },
      include: {
        news: true,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Featured news berhasil dibuat',
        data: featured,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('CREATE FEATURED ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal membuat featured news',
      },
      { status: 500 },
    )
  }
}
