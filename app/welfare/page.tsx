"use client"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, Utensils, Droplets, Building, HandHeart, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function WelfarePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/30 via-transparent to-cyan-200/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/20 via-transparent to-teal-100/30"></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-green-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Welfare & Community Programs</h1>
            <p className="text-xl mb-8 text-emerald-100">
              Comprehensive welfare services and community development programs designed to uplift and empower
              vulnerable families and communities through Islamic values and compassionate service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
                <Link href="#programs">
                  <Heart className="mr-2 h-5 w-5" />
                  View Programs
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-emerald-700 bg-transparent"
              >
                <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer">
                  <HandHeart className="mr-2 h-5 w-5" />
                  Volunteer With Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16" id="programs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Welfare Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Community-focused initiatives rooted in Islamic principles of charity, compassion, and social responsibility
            </p>
          </div>
          <Tabs defaultValue="iftar" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="iftar">Iftar Program</TabsTrigger>
              <TabsTrigger value="mosque">Mosque Construction</TabsTrigger>
              <TabsTrigger value="water">Water Projects</TabsTrigger>
            </TabsList>
            {/* ...existing TabsContent code for iftar, mosque, water... */}
            <TabsContent value="iftar" className="mt-8">
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Image
                    src="/Welfare 39.jpeg"
                    alt="Iftar Program"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 mx-auto"
                  />
                  <CardTitle className="text-orange-700 flex items-center justify-center">
                    <Utensils className="mr-2 h-5 w-5" />
                    Iftar Program
                  </CardTitle>
                  <CardDescription>
                    Providing hot meals to fasting individuals and families during Ramadan, fostering community spirit and compassion.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 mb-4 text-center">
                    <li>• Daily Iftar distribution at mosques and community centers</li>
                    <li>• Special outreach to orphans, widows, and the most vulnerable</li>
                    <li>• Community gatherings for spiritual upliftment and unity</li>
                    <li>• Volunteer opportunities for meal preparation and service</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="mosque" className="mt-8">
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Image
                    src="/Welfare 2.jpeg"
                    alt="Mosque Construction"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 mx-auto"
                  />
                  <CardTitle className="text-green-700 flex items-center justify-center">
                    <Building className="mr-2 h-5 w-5" />
                    Mosque Construction
                  </CardTitle>
                  <CardDescription>
                    Building and renovating mosques to serve as centers of worship, education, and community development for underserved populations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 mb-4 text-center">
                    <li>• Construction of new mosques in both rural and urban areas</li>
                    <li>• Renovation and expansion of existing mosque facilities</li>
                    <li>• Community fundraising, engagement, and ownership</li>
                    <li>• Volunteer opportunities for skilled and general labor</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="water" className="mt-8">
              <Card>
                <CardHeader className="flex flex-col items-center text-center">
                  <Image
                    src="/Welfare 37.jpeg"
                    alt="Water Projects"
                    width={400}
                    height={200}
                    className="rounded-lg mb-4 mx-auto"
                  />
                  <CardTitle className="text-blue-700 flex items-center justify-center">
                    <Droplets className="mr-2 h-5 w-5" />
                    Water Projects
                  </CardTitle>
                  <CardDescription>
                    Delivering clean, safe, and sustainable water solutions to communities facing water scarcity and health challenges.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600 mb-4 text-center">
                    <li>• Borehole drilling and well construction in remote and arid regions</li>
                    <li>• Installation of water storage, filtration, and distribution systems</li>
                    <li>• Hygiene, sanitation, and health education initiatives</li>
                    <li>• Training for sustainable water management and community ownership</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Volunteer Opportunities */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Volunteer Opportunities</h2>
            <p className="text-lg text-gray-600">Make a difference in your community through service</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                  <Utensils className="h-8 w-8 text-orange-600" />
                </div>
                <CardTitle className="text-orange-700">Iftar Volunteers</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Help prepare and serve Iftar meals during Ramadan. Join our kitchen and service teams.
                </p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer">
                    Apply
                  </a>
                </Button>
              </CardContent>
            </Card>



            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Building className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-green-700">Construction Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join our mosque and community building construction projects. Skills training provided.
                </p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer">
                    Apply
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Droplets className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-700">Water Project Team</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Support borehole and well construction projects. Help bring clean water to communities.
                </p>
                <Button variant="outline" className="w-full bg-transparent" asChild>
                  <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer">
                    Apply
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Videos and Photos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Videos & Photos</h2>
            <p className="text-lg text-gray-600">See our welfare programs in action through videos and photos</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-10 w-10 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-red-700 mb-2">Videos</CardTitle>
                <CardDescription className="text-base">
                  Watch our welfare programs and community impact stories
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-600">Iftar program highlights</span>
                  </div>

                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-600">Water project construction</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-600">Community testimonials</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full bg-red-50 border-red-200 text-red-700 hover:bg-red-100">
                  <Link href="/videos">
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    View Videos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <CardTitle className="text-2xl text-green-700 mb-2">Photos</CardTitle>
                <CardDescription className="text-base">
                  Browse through our photo gallery of welfare activities
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-600">Community events and gatherings</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-600">Infrastructure projects</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-600">Volunteer activities</span>
                  </div>
                  <div className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    <span className="text-sm text-gray-600">Before and after transformations</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full bg-green-50 border-green-200 text-green-700 hover:bg-green-100">
                  <Link href="/photos">
                    <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    View Photos
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission of Service</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Your support enables us to expand our welfare programs and reach more families in need. Together, we can
            make a lasting impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
              <Link href="/donate">
                <Heart className="mr-2 h-5 w-5" />
                Donate to Welfare Programs
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-emerald-700 bg-transparent"
            >
              <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer">
                <HandHeart className="mr-2 h-5 w-5" />
                Volunteer Today
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
