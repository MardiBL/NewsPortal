import { NextResponse } from 'next/server'

export async function POST() {
  try {
    const response = NextResponse.json({
      success: true,
      message: 'Logout berhasil',
    })

    response.cookies.set({
      name: 'token',
      value: '',
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/',
    })

    return response
  } catch (error) {
    console.error('LOGOUT ERROR:', error)

    return NextResponse.json(
      {
        success: false,
        message: 'Terjadi kesalahan saat logout',
      },
      { status: 500 },
    )
  }
}
