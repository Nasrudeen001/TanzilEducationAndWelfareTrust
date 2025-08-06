"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Search, 
  Grid3X3, 
  Image as ImageIcon, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Download,
  Share2,
  Heart
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function PhotosPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Generate array of welfare images
  const welfareImages = Array.from({ length: 43 }, (_, i) => ({
    id: i + 1,
    src: `/Welfare ${i + 1}.jpeg`,
    alt: `Welfare Program ${i + 1}`,
    title: `Welfare Activity ${i + 1}`,
    category: getCategory(i + 1)
  }))

  function getCategory(imageNumber: number): string {
    if (imageNumber >= 1 && imageNumber <= 11) return "Mosque Project"
    if (imageNumber === 12 || imageNumber === 13 || imageNumber === 37) return "Water Project"
    if (imageNumber === 35 || imageNumber === 36) return "Iftar Program"
    return "Food Distribution & Community Events"
  }

  const categories = ["All", "Mosque Project", "Water Project", "Iftar Program", "Food Distribution & Community Events"]
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredImages = welfareImages.filter(image => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || image.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const openLightbox = (imageSrc: string, index: number) => {
    setSelectedImage(imageSrc)
    setCurrentImageIndex(index)
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredImages.length
    setCurrentImageIndex(nextIndex)
    setSelectedImage(filteredImages[nextIndex].src)
  }

  const prevImage = () => {
    const prevIndex = currentImageIndex === 0 ? filteredImages.length - 1 : currentImageIndex - 1
    setCurrentImageIndex(prevIndex)
    setSelectedImage(filteredImages[prevIndex].src)
  }

  const downloadImage = (imageSrc: string, title: string) => {
    const link = document.createElement('a')
    link.href = imageSrc
    link.download = `${title}.jpeg`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/30 via-transparent to-cyan-200/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/20 via-transparent to-teal-100/30"></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-green-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <ImageIcon className="h-8 w-8" />
              <h1 className="text-4xl lg:text-6xl font-bold">Welfare Photos</h1>
            </div>
            <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
              Explore our welfare programs through a collection of photos showcasing our community impact and humanitarian work.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                <Link href="/welfare">
                  <Grid3X3 className="mr-2 h-5 w-5" />
                  Back to Welfare
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-700 bg-transparent"
              >
                <Link href="/videos">
                  <ImageIcon className="mr-2 h-5 w-5" />
                  View Videos
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                type="text"
                placeholder="Search photos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-emerald-100"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Photos Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {selectedCategory === "All" ? "All Photos" : `${selectedCategory} Photos`}
            </h2>
            <p className="text-lg text-gray-600">
              {filteredImages.length} photos found
            </p>
          </div>

          {filteredImages.length === 0 ? (
            <div className="text-center py-16">
              <ImageIcon className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No photos found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <Card
                  key={image.id}
                  className="group cursor-pointer hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur-sm"
                  onClick={() => openLightbox(image.src, index)}
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Button size="sm" variant="secondary" className="bg-white/90 text-gray-900">
                            <ImageIcon className="h-4 w-4 mr-2" />
                            View
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">{image.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {image.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            {/* Close Button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white"
              onClick={closeLightbox}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>

            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Image */}
            <div className="relative">
              <Image
                src={selectedImage}
                alt={`Welfare Program ${currentImageIndex + 1}`}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/50 text-white p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{filteredImages[currentImageIndex]?.title}</h3>
                    <p className="text-sm opacity-90">
                      {currentImageIndex + 1} of {filteredImages.length} • {filteredImages[currentImageIndex]?.category}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="secondary"
                      onClick={() => downloadImage(selectedImage, filteredImages[currentImageIndex]?.title || 'welfare')}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button size="sm" variant="secondary">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Welfare Programs</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Help us continue making a difference in communities through our welfare initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
              <Link href="/donate">
                <Heart className="mr-2 h-5 w-5" />
                Donate Now
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-emerald-700 bg-transparent"
            >
              <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer">
                <ImageIcon className="mr-2 h-5 w-5" />
                Volunteer With Us
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
} 