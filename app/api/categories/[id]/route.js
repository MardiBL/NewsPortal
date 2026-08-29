import { NextResponse } from 'next/server'
import {
  getCategoryById,
  updateCategory,
  deleteCategory,
} from '@/controllers/categoryController'

export async function GET(request, { params }) {
  try {
    const { id } = await params

    const category = await getCategoryById(id)

    if (!category) {
      return NextResponse.json(
        {
          success: false,
          message: 'Category tidak ditemukan',
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: category,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil category',
      },
      { status: 500 },
    )
  }
}

export async function PUT(request, { params }) {
  try {
    const { id } = await params
    const body = await request.json()

    const category = await updateCategory(id, body)

    return NextResponse.json({
      success: true,
      message: 'Category berhasil diupdate',
      data: category,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengupdate category',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = await params

    await deleteCategory(id)

    return NextResponse.json({
      success: true,
      message: 'Category berhasil dihapus',
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus category',
      },
      { status: 500 },
    )
  }
}
