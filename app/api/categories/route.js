import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      where: {
        isActive: true,
      },
      orderBy: {
        name: 'asc',
      },
      include: {
        _count: {
          select: {
            news: true,
          },
        },
      },
    })

    return NextResponse.json({
      success: true,
      data: categories,
    })
  } catch (error) {
    console.error('GET CATEGORIES ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil kategori',
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const name = body.name?.trim()
    const slug = body.slug?.trim().toLowerCase()

    if (!name || !slug) {
      return NextResponse.json(
        {
          success: false,
          message: 'Nama dan slug kategori wajib diisi',
        },
        { status: 400 },
      )
    }

    const existingCategory = await prisma.category.findFirst({
      where: {
        OR: [
          {
            name,
          },
          {
            slug,
          },
        ],
      },
    })

    if (existingCategory) {
      return NextResponse.json(
        {
          success: false,
          message: 'Nama atau slug kategori sudah digunakan',
        },
        { status: 409 },
      )
    }

    const category = await prisma.category.create({
      data: {
        name,
        slug,
        isActive: true,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Kategori berhasil dibuat',
        data: category,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('CREATE CATEGORY ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal membuat kategori',
      },
      { status: 500 },
    )
  }
}
