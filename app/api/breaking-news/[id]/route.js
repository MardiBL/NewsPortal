import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request, { params }) {
  try {
    const { id } = await params
    const breakingNewsId = Number(id)

    if (!Number.isInteger(breakingNewsId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID tidak valid',
        },
        { status: 400 },
      )
    }

    const breakingNews = await prisma.breakingNews.findUnique({
      where: {
        id: breakingNewsId,
      },
    })

    if (!breakingNews) {
      return NextResponse.json(
        {
          success: false,
          message: 'Breaking news tidak ditemukan',
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: breakingNews,
    })
  } catch (error) {
    console.error('GET BREAKING NEWS DETAIL ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil breaking news',
      },
      { status: 500 },
    )
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const breakingNewsId = Number(id)

    if (!Number.isInteger(breakingNewsId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.breakingNews.findUnique({
      where: {
        id: breakingNewsId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Breaking news tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const body = await request.json()

    const title = body.title?.trim()
    const slug = body.slug?.trim().toLowerCase()
    const status = body.status?.trim().toUpperCase()

    let startedAt

    if (body.startedAt) {
      startedAt = new Date(body.startedAt)

      if (Number.isNaN(startedAt.getTime())) {
        return NextResponse.json(
          {
            success: false,
            message: 'startedAt tidak valid',
          },
          { status: 400 },
        )
      }
    }

    let endedAt

    if (body.endedAt) {
      endedAt = new Date(body.endedAt)

      if (Number.isNaN(endedAt.getTime())) {
        return NextResponse.json(
          {
            success: false,
            message: 'endedAt tidak valid',
          },
          { status: 400 },
        )
      }
    }

    if (status && !['ACTIVE', 'INACTIVE'].includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Status tidak valid',
        },
        { status: 400 },
      )
    }

    if (slug && slug !== existing.slug) {
      const duplicate = await prisma.breakingNews.findUnique({
        where: {
          slug,
        },
      })

      if (duplicate) {
        return NextResponse.json(
          {
            success: false,
            message: 'Slug sudah digunakan',
          },
          { status: 409 },
        )
      }
    }

    const updated = await prisma.breakingNews.update({
      where: {
        id: breakingNewsId,
      },
      data: {
        ...(title ? { title } : {}),
        ...(slug ? { slug } : {}),
        ...(status ? { status } : {}),
        ...(startedAt ? { startedAt } : {}),
        ...(body.endedAt === null ? { endedAt: null } : {}),
        ...(endedAt ? { endedAt } : {}),
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Breaking news berhasil diperbarui',
      data: updated,
    })
  } catch (error) {
    console.error('UPDATE BREAKING NEWS ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal memperbarui breaking news',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params
    const breakingNewsId = Number(id)

    if (!Number.isInteger(breakingNewsId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.breakingNews.findUnique({
      where: {
        id: breakingNewsId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Breaking news tidak ditemukan',
        },
        { status: 404 },
      )
    }

    await prisma.breakingNews.delete({
      where: {
        id: breakingNewsId,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Breaking news berhasil dihapus',
    })
  } catch (error) {
    console.error('DELETE BREAKING NEWS ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus breaking news',
      },
      { status: 500 },
    )
  }
}
