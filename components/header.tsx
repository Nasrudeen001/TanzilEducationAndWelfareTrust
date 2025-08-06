"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Heart, BookOpen, Users, Newspaper, Phone, HandHeart, Landmark } from "lucide-react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Home", href: "/", icon: null },
    { name: "Education", href: "/education", icon: BookOpen },
    { name: "Welfare", href: "/welfare", icon: Users },
    { name: "Da'wa", href: "/dawa", icon: Landmark },
    { name: "News", href: "/news", icon: Newspaper },
    { name: "Board", href: "/board", icon: Users },
    { name: "Contact", href: "/contact", icon: Phone },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex items-center space-x-3">
              <Image
                src="/TEWET.png"
                alt="Tanzil Education and Welfare Trust Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900">Tanzil Education and Welfare Trust</span>
                <span className="text-xs text-teal-600 font-medium">Educating, Transforming and Serving</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:text-teal-600 transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button asChild className="hidden sm:inline-flex bg-teal-600 hover:bg-teal-700">
              <Link href="/donate">
                <Heart className="mr-2 h-4 w-4" />
                Donate
              </Link>
            </Button>
            <Button asChild variant="outline" className="hidden sm:inline-flex bg-transparent">
              <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer">
                <HandHeart className="mr-2 h-4 w-4" />
                Volunteer
              </a>
            </Button>

            {/* Mobile Navigation */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 text-gray-600 hover:text-teal-600 transition-colors font-medium py-2"
                    >
                      {item.icon && <item.icon className="h-5 w-5" />}
                      <span>{item.name}</span>
                    </Link>
                  ))}
                  <div className="pt-4 space-y-2">
                    <Button asChild className="w-full bg-teal-600 hover:bg-teal-700">
                      <Link href="/donate" onClick={() => setIsOpen(false)}>
                        <Heart className="mr-2 h-4 w-4" />
                        Donate Now
                      </Link>
                    </Button>
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                        <HandHeart className="mr-2 h-4 w-4" />
                        Volunteer
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
