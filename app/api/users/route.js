import { NextResponse } from 'next/server'
import { getUsers, createUser } from '@/controllers/userController'

export async function GET() {
  try {
    const users = await getUsers()

    return NextResponse.json({
      success: true,
      data: users,
    })
  } catch (error) {
    console.error(error)

    return NextResponse.json(
      {
        success: false,
        message: 'Gagal mengambil users',
      },
      { status: 500 },
    )
  }
}

export async function POST(request) {
  try {
    const body = await request.json()

    const user = await createUser(body)

    return NextResponse.json(
      {
        success: true,
        message: 'User berhasil dibuat',
        data: user,
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
