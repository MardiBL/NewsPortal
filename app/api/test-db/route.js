import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const users = await prisma.user.findMany()

    return Response.json({
      success: true,
      message: 'Berhasil terhubung ke TiDB',
      data: users,
    })
  } catch (error) {
    console.error('DATABASE ERROR:', error)

    return Response.json(
      {
        success: false,
        message: 'Gagal terhubung ke database',
      },
      { status: 500 },
    )
  }
}
