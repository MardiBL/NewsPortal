import { NextResponse } from 'next/server'
import {
  getNewsBySlug,
  updateNews,
  deleteNews,
} from '@/controllers/newsController'

export async function GET(request, { params }) {
  try {
    const { slug } = await params

    const news = await getNewsBySlug(slug)

    if (!news) {
      return NextResponse.json(
        {
          success: false,
          message: 'Berita tidak ditemukan',
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      success: true,
      data: news,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil berita',
      },
      { status: 500 },
    )
  }
}

export async function PUT(request, { params }) {
  try {
    const { slug } = await params
    const body = await request.json()

    const news = await updateNews(slug, body)

    return NextResponse.json({
      success: true,
      message: 'Berita berhasil diupdate',
      data: news,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengupdate berita',
      },
      { status: 500 },
    )
  }
}

export async function DELETE(request, { params }) {
  try {
    const { slug } = await params

    await deleteNews(slug)

    return NextResponse.json({
      success: true,
      message: 'Berita berhasil dihapus',
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal menghapus berita',
      },
      { status: 500 },
    )
  }
}
