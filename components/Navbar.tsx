'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full bg-primary/95 backdrop-blur z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-bold text-accent">
            AI Project
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-accent transition">Home</Link>
            <Link href="/about" className="hover:text-accent transition">About</Link>
            <Link href="/contact" className="hover:text-accent transition">Contact</Link>
          </div>
          
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-accent"
          >
            ☰
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/" className="block hover:text-accent transition">Home</Link>
            <Link href="/about" className="block hover:text-accent transition">About</Link>
            <Link href="/contact" className="block hover:text-accent transition">Contact</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
