import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request, { params }) {
  try {
    const { id } = await params
    const mediaId = Number(id)

    if (!Number.isInteger(mediaId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID media tidak valid',
        },
        { status: 400 },
      )
    }

    const media = await prisma.media.findUnique({
      where: {
        id: mediaId,
      },
      include: {
        uploadedBy: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    if (!media) {
      return NextResponse.json(
        {
          success: false,
          message: 'Media tidak ditemukan',
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: media,
    })
  } catch (error) {
    console.error('GET MEDIA DETAIL ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil media',
      },
      { status: 500 },
    )
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const mediaId = Number(id)

    if (!Number.isInteger(mediaId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID media tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.media.findUnique({
      where: {
        id: mediaId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Media tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const body = await request.json()

    const updated = await prisma.media.update({
      where: {
        id: mediaId,
      },
      data: {
        ...(body.fileName !== undefined
          ? { fileName: body.fileName.trim() }
          : {}),
        ...(body.fileUrl !== undefined ? { fileUrl: body.fileUrl.trim() } : {}),
        ...(body.mimeType !== undefined ? { mimeType: body.mimeType } : {}),
        ...(body.fileSize !== undefined
          ? { fileSize: Number(body.fileSize) }
          : {}),
        ...(body.alt !== undefined ? { alt: body.alt } : {}),
        ...(body.caption !== undefined ? { caption: body.caption } : {}),
        ...(body.type !== undefined
          ? { type: body.type.trim().toUpperCase() }
          : {}),
      },
      include: {
        uploadedBy: {
          select: {
            id: true,
            name: true,
          },
        },
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Media berhasil diperbarui',
      data: updated,
    })
  } catch (error) {
    console.error('UPDATE MEDIA ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal memperbarui media',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params
    const mediaId = Number(id)

    if (!Number.isInteger(mediaId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID media tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.media.findUnique({
      where: {
        id: mediaId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Media tidak ditemukan',
        },
        { status: 404 },
      )
    }

    await prisma.media.delete({
      where: {
        id: mediaId,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Media berhasil dihapus',
    })
  } catch (error) {
    console.error('DELETE MEDIA ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus media',
      },
      { status: 500 },
    )
  }
}
