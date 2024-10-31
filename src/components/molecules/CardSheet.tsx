'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { useEffect, useRef, useState } from 'react'

export const CardSheet = ({ title, description, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isContentOverflowing, setIsContentOverflowing] = useState(false)
  const contentRef = useRef(null)

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  useEffect(() => {
    if (contentRef.current) {
      const { scrollHeight, clientHeight } = contentRef.current
      // Cek apakah scrollHeight lebih besar dari max-h-60 (60px)
      setIsContentOverflowing(scrollHeight > 240) // Menggunakan 240px untuk max-h-60
    }
  }, [children, isOpen])

  return (
    <Card className="w-full overflow-hidden h-fit transition-all duration-300 relative">
      <CardHeader
        className="py-4 bg-gradient-to-tr from-orange-950 to-orange-600 -space-y-1 cursor-pointer"
        onClick={toggleOpen}
      >
        <CardTitle className="font-bold tracking-tighter text-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <div
        ref={contentRef}
        className={`transition-all duration-1000 ease-in-out ${
          isOpen ? 'max-h-[120rem]' : 'max-h-56'
        } overflow-hidden`}
      >
        <CardContent>{children}</CardContent>
      </div>
      {/* Tampilkan tombol hanya jika konten melampaui batas */}
      {isContentOverflowing && (
        <div className="m-auto w-fit cursor-pointer mb-6 " onClick={toggleOpen}>
          <p className="text-sm text-muted-foreground">
            {isOpen ? 'Hide' : 'Show More'}
          </p>
        </div>
      )}
    </Card>
  )
}
