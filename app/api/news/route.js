import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url)

    const search = searchParams.get('search')?.trim() || ''
    const category = searchParams.get('category')?.trim().toLowerCase() || ''
    const page = Math.max(Number(searchParams.get('page')) || 1, 1)
    const limit = Math.min(
      Math.max(Number(searchParams.get('limit')) || 10, 1),
      100,
    )

    const skip = (page - 1) * limit

    const where = {
      status: 'PUBLISHED',
      ...(search
        ? {
            OR: [
              {
                title: {
                  contains: search,
                },
              },
              {
                excerpt: {
                  contains: search,
                },
              },
              {
                content: {
                  contains: search,
                },
              },
            ],
          }
        : {}),
      ...(category
        ? {
            category: {
              slug: category,
              isActive: true,
            },
          }
        : {}),
    }

    const [news, total] = await Promise.all([
      prisma.news.findMany({
        where,
        skip,
        take: limit,
        orderBy: [
          {
            publishedAt: 'desc',
          },
          {
            createdAt: 'desc',
          },
        ],
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
      }),
      prisma.news.count({
        where,
      }),
    ])

    return NextResponse.json({
      success: true,
      data: news,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('GET NEWS ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil berita',
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const title = body.title?.trim()
    const slug = body.slug?.trim().toLowerCase()
    const excerpt = body.excerpt?.trim() || null
    const content = body.content?.trim()
    const image = body.image?.trim() || null
    const status = body.status?.trim().toUpperCase() || 'DRAFT'
    const authorId = Number(body.authorId)
    const categoryId = Number(body.categoryId)

    if (!title || !slug || !content) {
      return NextResponse.json(
        {
          success: false,
          message: 'Title, slug, dan content wajib diisi',
        },
        { status: 400 },
      )
    }

    if (!Number.isInteger(authorId) || !Number.isInteger(categoryId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'authorId dan categoryId harus valid',
        },
        { status: 400 },
      )
    }

    const validStatuses = ['DRAFT', 'PUBLISHED']

    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Status berita tidak valid',
        },
        { status: 400 },
      )
    }

    const existingNews = await prisma.news.findUnique({
      where: {
        slug,
      },
    })

    if (existingNews) {
      return NextResponse.json(
        {
          success: false,
          message: 'Slug berita sudah digunakan',
        },
        { status: 409 },
      )
    }

    const [author, category] = await Promise.all([
      prisma.user.findUnique({
        where: {
          id: authorId,
        },
      }),
      prisma.category.findUnique({
        where: {
          id: categoryId,
        },
      }),
    ])

    if (!author) {
      return NextResponse.json(
        {
          success: false,
          message: 'Author tidak ditemukan',
        },
        { status: 404 },
      )
    }

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: 'Kategori tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const news = await prisma.news.create({
      data: {
        title,
        slug,
        excerpt,
        content,
        image,
        status,
        authorId,
        categoryId,
        publishedAt: status === 'PUBLISHED' ? new Date() : null,
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

    return NextResponse.json(
      {
        success: true,
        message: 'Berita berhasil dibuat',
        data: news,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('CREATE NEWS ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal membuat berita',
      },
      { status: 500 },
    )
  }
}
