import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(request, { params }) {
  try {
    const { id } = await params
    const userId = Number(id)

    if (!Number.isInteger(userId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID user tidak valid',
        },
        { status: 400 },
      )
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
        _count: {
          select: {
            news: true,
            likes: true,
            comments: true,
          },
        },
      },
    })

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'User tidak ditemukan',
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: user,
    })
  } catch (error) {
    console.error('GET USER ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil user',
      },
      { status: 500 },
    )
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const userId = Number(id)

    if (!Number.isInteger(userId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID user tidak valid',
        },
        { status: 400 },
      )
    }

    const existing = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    })

    if (!existing) {
      return NextResponse.json(
        {
          success: false,
          message: 'User tidak ditemukan',
        },
        { status: 404 },
      )
    }

    const body = await request.json()

    const name = typeof body.name === 'string' ? body.name.trim() : undefined

    const email =
      typeof body.email === 'string'
        ? body.email.trim().toLowerCase()
        : undefined

    const role =
      typeof body.role === 'string' ? body.role.trim().toUpperCase() : undefined

    const isActive =
      typeof body.isActive === 'boolean' ? body.isActive : undefined

    if (role && !['USER', 'ADMIN'].includes(role)) {
      return NextResponse.json(
        {
          success: false,
          message: 'Role tidak valid',
        },
        { status: 400 },
      )
    }

    if (email && email !== existing.email) {
      const duplicate = await prisma.user.findUnique({
        where: {
          email,
        },
      })

      if (duplicate) {
        return NextResponse.json(
          {
            success: false,
            message: 'Email sudah digunakan',
          },
          { status: 409 },
        )
      }
    }

    const updated = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        ...(name ? { name } : {}),
        ...(email ? { email } : {}),
        ...(role ? { role } : {}),
        ...(isActive !== undefined ? { isActive } : {}),
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
        isActive: true,
        createdAt: true,
        updatedAt: true,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'User berhasil diperbarui',
      data: updated,
    })
  } catch (error) {
    console.error('UPDATE USER ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal memperbarui user',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params
    const userId = Number(id)

    if (!Number.isInteger(userId)) {
      return NextResponse.json(
        {
          success: false,
          message: 'ID user tidak valid',
        },
        { status: 400 },
      )
    }

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
      include: {
        _count: {
          select: {
            news: true,
            likes: true,
            comments: true,
            media: true,
          },
        },
      },
    })

    if (!user) {
      return NextResponse.json(
        {
          success: false,
          message: 'User tidak ditemukan',
        },
        { status: 404 },
      )
    }

    if (
      user._count.news > 0 ||
      user._count.likes > 0 ||
      user._count.comments > 0 ||
      user._count.media > 0
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            'User masih memiliki data terkait. Nonaktifkan user daripada menghapusnya.',
        },
        { status: 409 },
      )
    }

    await prisma.user.delete({
      where: {
        id: userId,
      },
    })

    return NextResponse.json({
      success: true,
      message: 'User berhasil dihapus',
    })
  } catch (error) {
    console.error('DELETE USER ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus user',
      },
      { status: 500 },
    )
  }
}
