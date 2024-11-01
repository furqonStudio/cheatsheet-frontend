'use client'
import { CardMenu } from '@/components/molecules/CardMenu'
import { Input } from '@/components/ui/input'
import { useQuery } from '@tanstack/react-query'

function MaterialsList() {
  const token = process.env.NEXT_PUBLIC_STRAPI_TOKEN

  const { data, isLoading, error } = useQuery({
    queryKey: ['materials'],
    queryFn: async () => {
      const res = await fetch(
        'https://api-cheatsheet.up.railway.app/api/materials',
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      )

      if (!res.ok) {
        throw new Error('Gagal mengambil data pengguna')
      }

      const json = await res.json()
      return json.data
    },
  })

  console.log('🚀 ~ MaterialsList ~ data:', data)

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className="flex gap-4 flex-wrap mt-8">
      {data.map((material) => (
        <CardMenu
          key={material.id}
          description={material.description}
          title={material.title}
          thumbnailUrl={'/assets/thumbnails/default.png'}
        />
      ))}
    </div>
  )
}

export default function Home() {
  return (
    <div className="px-12 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter text-center">
          Welcome to Cheatsheet
        </h1>
        <Input
          type="text"
          placeholder="Cari catatan"
          className="max-w-lg m-auto"
        />
      </div>
      <MaterialsList />
    </div>
  )
}
