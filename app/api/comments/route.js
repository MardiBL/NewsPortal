import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)

    const newsId = Number(searchParams.get('newsId'))

    if (!Number.isInteger(newsId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'newsId wajib diisi',
        },
        { status: 400 },
      )
    }

    const comments = await prisma.comment.findMany({
      where: {
        newsId,
        status: 'APPROVED',
      },
      orderBy: {
        createdAt: 'desc',
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    return NextResponse.json({
      success: true,
      data: comments,
    })
  } catch (error) {
    console.error('GET COMMENTS ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil komentar',
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const content = body.content?.trim()
    const newsId = Number(body.newsId)
    const userId = Number(body.userId)

    if (!content || !Number.isInteger(newsId) || !Number.isInteger(userId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Content, newsId, dan userId wajib diisi',
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

    const comment = await prisma.comment.create({
      data: {
        content,
        newsId,
        userId,
        status: 'PENDING',
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Komentar berhasil dikirim dan menunggu persetujuan',
        data: comment,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('CREATE COMMENT ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal membuat komentar',
      },
      { status: 500 },
    )
  }
}
