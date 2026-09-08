import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request, { params }) {
  try {
    const { slug } = await params

    if (!slug) {
      return NextResponse.json(
        {
          success: false,
          message: 'Slug berita wajib diisi',
        },
        { status: 400 },
      )
    }

    const news = await prisma.news.findUnique({
      where: {
        slug,
      },
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
        _count: {
          select: {
            likes: true,
            comments: true,
          },
        },
      },
    })

    if (!news || news.status !== 'PUBLISHED') {
      return NextResponse.json(
        {
          success: false,
          message: 'Berita tidak ditemukan',
        },
        { status: 404 },
      )
    }

    await prisma.news.update({
      where: {
        id: news.id,
      },
      data: {
        views: {
          increment: 1,
        },
      },
    })

    return NextResponse.json({
      success: true,
      data: {
        ...news,
        views: news.views + 1,
      },
    })
  } catch (error) {
    console.error('GET NEWS DETAIL ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil detail berita',
      },
      { status: 500 },
    )
  }
}

export async function PUT(request, { params }) {
  try {
    const { slug } = await params

    const existingNews = await prisma.news.findUnique({
      where: {
        slug,
      },
    })

    if (!existingNews) {
      return NextResponse.json(
        {
          success: false,
          message: 'Berita tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const body = await request.json()

    const title = body.title?.trim()
    const newSlug = body.slug?.trim().toLowerCase()
    const excerpt =
      typeof body.excerpt === 'string' ? body.excerpt.trim() : undefined
    const content =
      typeof body.content === 'string' ? body.content.trim() : undefined
    const image = typeof body.image === 'string' ? body.image.trim() : undefined
    const status =
      typeof body.status === 'string'
        ? body.status.trim().toUpperCase()
        : undefined
    const categoryId =
      typeof body.categoryId !== 'undefined'
        ? Number(body.categoryId)
        : undefined

    if (status && !['DRAFT', 'PUBLISHED'].includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Status berita tidak valid',
        },
        { status: 400 },
      )
    }

    if (newSlug && newSlug !== existingNews.slug) {
      const duplicateSlug = await prisma.news.findUnique({
        where: {
          slug: newSlug,
        },
      })

      if (duplicateSlug) {
        return NextResponse.json(
          {
            success: false,
            message: 'Slug berita sudah digunakan',
          },
          { status: 409 },
        )
      }
    }

    if (categoryId !== undefined) {
      if (!Number.isInteger(categoryId)) {
        return NextResponse.json(
          {
            success: false,
            message: 'categoryId tidak valid',
          },
          { status: 400 },
        )
      }

      const category = await prisma.category.findUnique({
        where: {
          id: categoryId,
        },
      })

      if (!category) {
        return NextResponse.json(
          {
            success: false,
            message: 'Kategori tidak ditemukan',
          },
          { status: 404 },
        )
      }
    }

    const updatedNews = await prisma.news.update({
      where: {
        id: existingNews.id,
      },
      data: {
        ...(title ? { title } : {}),
        ...(newSlug ? { slug: newSlug } : {}),
        ...(excerpt !== undefined ? { excerpt } : {}),
        ...(content !== undefined ? { content } : {}),
        ...(image !== undefined ? { image } : {}),
        ...(status ? { status } : {}),
        ...(categoryId !== undefined ? { categoryId } : {}),
        ...(status === 'PUBLISHED' && !existingNews.publishedAt
          ? { publishedAt: new Date() }
          : {}),
      },
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
    })

    return NextResponse.json({
      success: true,
      message: 'Berita berhasil diperbarui',
      data: updatedNews,
    })
  } catch (error) {
    console.error('UPDATE NEWS ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal memperbarui berita',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { slug } = await params

    const news = await prisma.news.findUnique({
      where: {
        slug,
      },
      include: {
        _count: {
          select: {
            likes: true,
            comments: true,
          },
        },
        featuredNews: true,
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

    if (
      news._count.likes > 0 ||
      news._count.comments > 0 ||
      news.featuredNews
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Berita memiliki relasi likes, komentar, atau featured. Hapus relasi tersebut terlebih dahulu.',
        },
        { status: 409 },
      )
    }

    await prisma.news.delete({
      where: {
        id: news.id,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Berita berhasil dihapus',
    })
  } catch (error) {
    console.error('DELETE NEWS ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus berita',
      },
      { status: 500 },
    )
  }
}
