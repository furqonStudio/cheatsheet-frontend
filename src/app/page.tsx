import { CardMenu } from '@/components/molecules/CardMenu'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="px-12 py-12">
      <div className="space-y-4">
        {/* <ToggleTheme /> */}
        <h1 className="text-4xl font-bold tracking-tighter text-center">
          Welcome to Cheatsheet
        </h1>
        <Input
          type="text"
          placeholder="Cari catatan"
          className="max-w-lg m-auto"
        />
      </div>
      <div className="flex gap-4 flex-wrap mt-8">
        <CardMenu
          description={'Hyper Text Markup Language'}
          title={'HTML'}
          thumbnailUrl={'/assets/thumbnails/html.png'}
        />
        <CardMenu
          description={'Cascading Style Sheet'}
          title={'CSS'}
          thumbnailUrl={'/assets/thumbnails/css.png'}
        />
        <CardMenu
          description={'CSS Framework'}
          title={'Tailwind CSS'}
          thumbnailUrl={'/assets/thumbnails/tailwind.png'}
        />
        <CardMenu
          description={'Programming Language'}
          title={'Javascript'}
          thumbnailUrl={'/assets/thumbnails/javascript.png'}
        />
        <CardMenu
          description={'Version Control System'}
          title={'Git'}
          thumbnailUrl={'/assets/thumbnails/git.png'}
        />
      </div>
    </div>
  )
}
