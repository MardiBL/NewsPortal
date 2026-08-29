import { NextResponse } from 'next/server'
import {
  getUserById,
  updateUser,
  deleteUser,
} from '@/controllers/userController'

export async function GET(request, { params }) {
  try {
    const { id } = await params

    const user = await getUserById(id)

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
    const body = await request.json()

    const user = await updateUser(id, body)

    return NextResponse.json({
      success: true,
      message: 'User berhasil diupdate',
      data: user,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengupdate user',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params

    await deleteUser(id)

    return NextResponse.json({
      success: true,
      message: 'User berhasil dihapus',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus user',
      },
      { status: 500 },
    )
  }
}
