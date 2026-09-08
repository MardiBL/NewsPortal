import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request, { params }) {
  try {
    const { id } = await params
    const agendaId = Number(id)

    if (!Number.isInteger(agendaId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID agenda tidak valid',
        },
        { status: 400 },
      )
    }

    const agenda = await prisma.agenda.findUnique({
      where: {
        id: agendaId,
      },
    })

    if (!agenda) {
      return NextResponse.json(
        {
          success: false,
          message: 'Agenda tidak ditemukan',
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: agenda,
    })
  } catch (error) {
    console.error('GET AGENDA DETAIL ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil agenda',
      },
      { status: 500 },
    )
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const agendaId = Number(id)

    if (!Number.isInteger(agendaId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID agenda tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.agenda.findUnique({
      where: {
        id: agendaId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Agenda tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const body = await request.json()

    const title = body.title?.trim()
    const slug = body.slug?.trim().toLowerCase()

    const eventDate = body.eventDate ? new Date(body.eventDate) : undefined

    if (eventDate && Number.isNaN(eventDate.getTime())) {
      return NextResponse.json(
        {
          success: false,
          message: 'eventDate tidak valid',
        },
        { status: 400 },
      )
    }

    if (slug && slug !== existing.slug) {
      const duplicate = await prisma.agenda.findUnique({
        where: {
          slug,
        },
      })

      if (duplicate) {
        return NextResponse.json(
          {
            success: false,
            message: 'Slug agenda sudah digunakan',
          },
          { status: 409 },
        )
      }
    }

    const status = body.status?.trim().toUpperCase()

    if (
      status &&
      !['UPCOMING', 'ONGOING', 'COMPLETED', 'CANCELLED'].includes(status)
    ) {
      return NextResponse.json(
        {
          success: false,
          message: 'Status agenda tidak valid',
        },
        { status: 400 },
      )
    }

    const updated = await prisma.agenda.update({
      where: {
        id: agendaId,
      },
      data: {
        ...(title ? { title } : {}),
        ...(slug ? { slug } : {}),
        ...(body.description !== undefined
          ? { description: body.description }
          : {}),
        ...(body.image !== undefined ? { image: body.image } : {}),
        ...(body.location !== undefined ? { location: body.location } : {}),
        ...(body.link !== undefined ? { link: body.link } : {}),
        ...(status ? { status } : {}),
        ...(eventDate ? { eventDate } : {}),
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Agenda berhasil diperbarui',
      data: updated,
    })
  } catch (error) {
    console.error('UPDATE AGENDA ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal memperbarui agenda',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params
    const agendaId = Number(id)

    if (!Number.isInteger(agendaId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID agenda tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.agenda.findUnique({
      where: {
        id: agendaId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'Agenda tidak ditemukan',
        },
        { status: 404 },
      )
    }

    await prisma.agenda.delete({
      where: {
        id: agendaId,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'Agenda berhasil dihapus',
    })
  } catch (error) {
    console.error('DELETE AGENDA ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus agenda',
      },
      { status: 500 },
    )
  }
}
