import { NextResponse } from 'next/server'
import { getCategories, createCategory } from '@/controllers/categoryController'

export async function GET() {
  try {
    const categories = await getCategories()

    return NextResponse.json({
      success: true,
      data: categories,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil categories',
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const category = await createCategory(body)

    return NextResponse.json(
      {
        success: true,
        message: 'Category berhasil dibuat',
        data: category,
      },
      { status: 201 },
    )
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 },
    )
  }
}
