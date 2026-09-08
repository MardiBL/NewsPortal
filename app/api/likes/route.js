import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)

    const newsId = Number(searchParams.get('newsId'))
    const userIdParam = searchParams.get('userId')

    if (!Number.isInteger(newsId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'newsId tidak valid',
        },
        { status: 400 },
      )
    }

    const totalLikes = await prisma.newsLike.count({
      where: {
        newsId,
      },
    })

    let liked = false

    if (userIdParam) {
      const userId = Number(userIdParam)

      if (Number.isInteger(userId)) {
        const existingLike = await prisma.newsLike.findUnique({
          where: {
            newsId_userId: {
              newsId,
              userId,
            },
          },
        })

        liked = Boolean(existingLike)
      }
    }

    return NextResponse.json({
      success: true,
      data: {
        newsId,
        totalLikes,
        liked,
      },
    })
  } catch (error) {
    console.error('GET LIKES ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil data like',
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const newsId = Number(body.newsId)
    const userId = Number(body.userId)

    if (!Number.isInteger(newsId) || !Number.isInteger(userId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'newsId dan userId wajib valid',
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

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'User tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const existingLike = await prisma.newsLike.findUnique({
      where: {
        newsId_userId: {
          newsId,
          userId,
        },
      },
    })

    if (existingLike) {
      await prisma.newsLike.delete({
        where: {
          id: existingLike.id,
        },
      })

      const totalLikes = await prisma.newsLike.count({
        where: {
          newsId,
        },
      })

      return NextResponse.json({
        success: true,
        message: 'Like dibatalkan',
        data: {
          liked: false,
          totalLikes,
        },
      })
    }

    await prisma.newsLike.create({
      data: {
        newsId,
        userId,
      },
    })

    const totalLikes = await prisma.newsLike.count({
      where: {
        newsId,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Berita berhasil disukai',
        data: {
          liked: true,
          totalLikes,
        },
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('LIKE ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal memproses like',
      },
      { status: 500 },
    )
  }
}
