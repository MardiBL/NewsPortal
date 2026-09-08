import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const now = new Date()

    const agenda = await prisma.agenda.findMany({
      where: {
        status: 'UPCOMING',
        eventDate: {
          gte: now,
        },
      },
      orderBy: {
        eventDate: 'asc',
      },
    })

    return NextResponse.json({
      success: true,
      data: agenda,
    })
  } catch (error) {
    console.error('GET AGENDA ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil agenda',
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
    const description = body.description?.trim() || null
    const image = body.image?.trim() || null
    const location = body.location?.trim() || null
    const link = body.link?.trim() || null
    const status = body.status?.trim().toUpperCase() || 'UPCOMING'
    const eventDate = body.eventDate ? new Date(body.eventDate) : null

    if (!title || !slug || !eventDate) {
      return NextResponse.json(
        {
          success: false,
          message: 'Title, slug, dan eventDate wajib diisi',
        },
        { status: 400 },
      )
    }

    if (Number.isNaN(eventDate.getTime())) {
      return NextResponse.json(
        {
          success: false,
          message: 'eventDate tidak valid',
        },
        { status: 400 },
      )
    }

    const validStatuses = ['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED']

    if (!validStatuses.includes(status)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Status agenda tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.agenda.findUnique({
      where: {
        slug,
      },
    })

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Slug agenda sudah digunakan',
        },
        { status: 409 },
      )
    }

    const agenda = await prisma.agenda.create({
      data: {
        title,
        slug,
        description,
        image,
        location,
        link,
        status,
        eventDate,
      },
    })

    return NextResponse.json(
      {
        success: true,
        message: 'Agenda berhasil dibuat',
        data: agenda,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error('CREATE AGENDA ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal membuat agenda',
      },
      { status: 500 },
    )
  }
}
