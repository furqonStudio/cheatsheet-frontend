import { CardAccordion } from '@/components/molecules/CardAccordion'
import { CardSheet } from '@/components/molecules/CardSheet'
import { Input } from '@/components/ui/input'
import { accordionData } from '@/data'

const CheatSheetPage = () => {
  return (
    <div className="px-12 py-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter text-center">
          HTML Cheatsheet
        </h1>
        <Input
          type="text"
          placeholder="Cari catatan"
          className="max-w-lg m-auto"
        />
      </div>

      {/* Menggunakan column layout untuk Masonry */}
      <div className="mt-8 columns-3 space-y-4">
        {accordionData.map((sheet, index) => (
          <div key={index} className="break-inside-avoid mb-4">
            <CardSheet title={sheet.title} description={'Membuat form'}>
              {sheet.accordions.map((accordion, i) => (
                <CardAccordion
                  key={i}
                  title={accordion.title}
                  description={accordion.description}
                />
              ))}
            </CardSheet>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CheatSheetPage
