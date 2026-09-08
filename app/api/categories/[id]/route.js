import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request, { params }) {
  try {
    const { id } = await params
    const categoryId = Number(id)

    if (!Number.isInteger(categoryId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID kategori tidak valid',
        },
        { status: 400 },
      )
    }

    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
      include: {
        _count: {
          select: {
            news: true,
          },
        },
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

    return NextResponse.json({
      success: true,
      data: category,
    })
  } catch (error) {
    console.error('GET CATEGORY ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil kategori',
      },
      { status: 500 },
    )
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const categoryId = Number(id)

    if (!Number.isInteger(categoryId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID kategori tidak valid',
        },
        { status: 400 },
      )
    }

    const body = await request.json()

    const name = body.name?.trim()
    const slug = body.slug?.trim().toLowerCase()
    const isActive =
      typeof body.isActive === 'boolean' ? body.isActive : undefined

    const existingCategory = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
    })

    if (!existingCategory) {
      return NextResponse.json(
        {
          success: false,
          message: 'Kategori tidak ditemukan',
        },
        { status: 404 },
      )
    }

    if (!name && !slug && typeof isActive === 'undefined') {
      return NextResponse.json(
        {
          success: false,
          message: 'Tidak ada data yang diperbarui',
        },
        { status: 400 },
      )
    }

    if (name || slug) {
      const duplicate = await prisma.category.findFirst({
        where: {
          id: {
            not: categoryId,
          },
          OR: [...(name ? [{ name }] : []), ...(slug ? [{ slug }] : [])],
        },
      })

      if (duplicate) {
        return NextResponse.json(
          {
            success: false,
            message: 'Nama atau slug kategori sudah digunakan',
          },
          { status: 409 },
        )
      }
    }

    const category = await prisma.category.update({
      where: {
        id: categoryId,
      },
      data: {
        ...(name ? { name } : {}),
        ...(slug ? { slug } : {}),
        ...(typeof isActive !== 'undefined' ? { isActive } : {}),
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Kategori berhasil diperbarui',
      data: category,
    })
  } catch (error) {
    console.error('UPDATE CATEGORY ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal memperbarui kategori',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params
    const categoryId = Number(id)

    if (!Number.isInteger(categoryId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID kategori tidak valid',
        },
        { status: 400 },
      )
    }

    const category = await prisma.category.findUnique({
      where: {
        id: categoryId,
      },
      include: {
        _count: {
          select: {
            news: true,
          },
        },
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

    if (category._count.news > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Kategori tidak dapat dihapus karena masih memiliki berita',
        },
        { status: 409 },
      )
    }

    await prisma.category.delete({
      where: {
        id: categoryId,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Kategori berhasil dihapus',
    })
  } catch (error) {
    console.error('DELETE CATEGORY ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus kategori',
      },
      { status: 500 },
    )
  }
}
