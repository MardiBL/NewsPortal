import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const media = await prisma.media.findMany({
      orderBy: {
        createdAt: 'desc',
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
      data: media,
    })
  } catch (error) {
    console.error('GET MEDIA ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil media',
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const fileName = body.fileName?.trim()
    const fileUrl = body.fileUrl?.trim()
    const mimeType = body.mimeType?.trim() || null
    const fileSize =
      typeof body.fileSize !== 'undefined' ? Number(body.fileSize) : null
    const alt = body.alt?.trim() || null
    const caption = body.caption?.trim() || null
    const type = body.type?.trim().toUpperCase() || 'IMAGE'
    const uploadedById = Number(body.uploadedById)

    if (!fileName || !fileUrl || !Number.isInteger(uploadedById)) {
      return NextResponse.json(
        {
          success: false,
          message: 'fileName, fileUrl, dan uploadedById wajib diisi',
        },
        { status: 400 },
      )
    }

    if (fileSize !== null && !Number.isInteger(fileSize)) {
      return NextResponse.json(
        {
          success: false,
          message: 'fileSize tidak valid',
        },
        { status: 400 },
      )
    }

    const user = await prisma.user.findUnique({
      where: {
        id: uploadedById,
      },
    })

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'User uploader tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const media = await prisma.media.create({
      data: {
        fileName,
        fileUrl,
        mimeType,
        fileSize,
        alt,
        caption,
        type,
        uploadedById,
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

    return NextResponse.json(
      {
        success: true,
        message: 'Media berhasil ditambahkan',
        data: media,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('CREATE MEDIA ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal membuat media',
      },
      { status: 500 },
    )
  }
}
