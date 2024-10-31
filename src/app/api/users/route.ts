import prisma from '@/lib/prisma'

export async function GET(request: Request) {
  try {
    const users = await prisma.user.findMany()
    return new Response(JSON.stringify(users), { status: 200 })
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Terjadi kesalahan saat mengambil data' }),
      {
        status: 500,
      }
    )
  }
}
