import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const commentId = Number(id)

    if (!Number.isInteger(commentId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID komentar tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Komentar tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const body = await request.json()

    const content =
      typeof body.content === 'string' ? body.content.trim() : undefined

    const status =
      typeof body.status === 'string'
        ? body.status.trim().toUpperCase()
        : undefined

    if (content !== undefined && !content) {
      return NextResponse.json(
        {
          success: false,
          message: 'Content komentar tidak boleh kosong',
        },
        { status: 400 },
      )
    }

    if (status && !['PENDING', 'APPROVED', 'REJECTED'].includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Status komentar tidak valid',
        },
        { status: 400 },
      )
    }

    const updated = await prisma.comment.update({
      where: {
        id: commentId,
      },
      data: {
        ...(content !== undefined ? { content } : {}),
        ...(status ? { status } : {}),
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
        news: {
          select: {
            id: true,
            title: true,
            slug: true,
          },
        },
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Komentar berhasil diperbarui',
      data: updated,
    })
  } catch (error) {
    console.error('UPDATE COMMENT ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal memperbarui komentar',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params
    const commentId = Number(id)

    if (!Number.isInteger(commentId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID komentar tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.comment.findUnique({
      where: {
        id: commentId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Komentar tidak ditemukan',
        },
        { status: 404 },
      )
    }

    await prisma.comment.delete({
      where: {
        id: commentId,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Komentar berhasil dihapus',
    })
  } catch (error) {
    console.error('DELETE COMMENT ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus komentar',
      },
      { status: 500 },
    )
  }
}
