'use client'
import { CircleX } from 'lucide-react'
import { useState } from 'react'

export default function TopBanner() {
  const [isVisible, setIsVisible] = useState(true)
  if (!isVisible) return null

  return (
    <div className="w-full bg-yellow-300 text-black px-4 py-2 flex justify-between items-center text-sm md:text-base transition-opacity duration-500 absolute z-50">
      <p className="">Site de Kale Virtual Studio en construction</p>
      <button onClick={() => setIsVisible(false)} aria-label="Fermer">
        <CircleX />
      </button>
    </div>
  )
}
