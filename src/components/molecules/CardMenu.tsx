import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'

export const CardMenu = ({ thumbnailUrl, title, description }) => {
  return (
    <Card className="w-[calc(25%-1rem)] relative aspect-square overflow-hidden group hover:scale-95 delay-100 duration-500 ease-in-out cursor-pointer">
      <Link href={'/cheatsheet'}>
        <Image
          alt="image"
          src={thumbnailUrl}
          layout="fill"
          className="absolute inset-0 z-0"
        />
        {/* Layer gradien dengan opacity yang bisa dianimasikan */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-black/90 to-transparent z-10 opacity-40 
        transition-opacity duration-200 ease-in-out group-hover:opacity-100"
        ></div>

        {/* Konten yang ada di atas gradien */}
        <div className="relative flex flex-col justify-end h-full z-20">
          <CardHeader className="py-2">
            <CardTitle className="tracking-tighter font-black">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm">{description}</p>
          </CardContent>
        </div>
      </Link>
    </Card>
  )
}
