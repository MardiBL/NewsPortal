import { NextResponse } from 'next/server'
import { getNews, createNews } from '@/controllers/newsController'

export async function GET() {
  try {
    const news = await getNews()

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

export async function POST(request) {
  try {
    const body = await request.json()

    const news = await createNews(body)

    return NextResponse.json(
      {
        success: true,
        message: 'Berita berhasil dibuat',
        data: news,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      { status: 400 },
    )
  }
}
