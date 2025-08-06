import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Heart, BookOpen, Users, Award, ArrowRight, Phone, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { AnimatedHeroImage } from "@/components/AnimatedHeroImage"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/30 via-transparent to-cyan-200/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/20 via-transparent to-teal-100/30"></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-white/20 text-white border-white/30">Empowering Communities Since 2006</Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6">Tanzil Education & Welfare Trust</h1>
              <p className="text-xl mb-8 text-teal-100">
                Transforming lives through quality education, community welfare programs, and sustainable development
                initiatives across underserved communities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-teal-50">
                  <Link href="/donate">
                    <Heart className="mr-2 h-5 w-5" />
                    Donate Now
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-teal-700 bg-transparent"
                >
                  <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer">
                    <Users className="mr-2 h-5 w-5" />
                    Volunteer With Us
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <AnimatedHeroImage />
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Foundation</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built on strong principles that guide our every action and decision
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-8 w-8 text-teal-600" />
                </div>
                <CardTitle className="text-teal-700">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  To provide quality education and comprehensive welfare services to underserved communities, fostering
                  sustainable development and empowering individuals to reach their full potential.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-cyan-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-cyan-600" />
                </div>
                <CardTitle className="text-cyan-700">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  A world where every individual has access to quality education and essential welfare services,
                  creating thriving communities built on knowledge, compassion, and opportunity.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-blue-700">Our Values</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-gray-600 space-y-2">
                  <li>• Integrity & Transparency</li>
                  <li>• Educational Excellence</li>
                  <li>• Community Empowerment</li>
                  <li>• Sustainable Impact</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive initiatives designed to create lasting positive change
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Image
                  src="/Integrated 2.jpeg"
                  alt="Education programs"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle className="text-teal-700">Education Programs</CardTitle>
                <CardDescription>Quality education from primary to higher secondary levels</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Comprehensive educational services including schools, vocational training, and scholarship programs.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/education">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Image
                  src="/Welfare 18.jpeg"
                  alt="Welfare programs"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle className="text-cyan-700">Welfare Programs</CardTitle>
                <CardDescription>Essential services for community wellbeing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Food assistance, medical camps, emergency relief, and support for vulnerable families.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/welfare">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <Image
                  src="/Da'wa.jpeg"
                  alt="Da'wa program"
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
                <CardTitle className="text-orange-700">Da'wa Program</CardTitle>
                <CardDescription>Spreading the message of Islam and nurturing faith</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Da'wa programs, spiritual events, and educational gatherings to inspire and strengthen the community.
                </p>
                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/dawa">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Together, we can create lasting change in communities. Your support makes a real difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-teal-50">
              <Link href="/donate">
                <Heart className="mr-2 h-5 w-5" />
                Make a Donation
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-teal-700 bg-transparent"
            >
              <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-5 w-5" />
                Become a Volunteer
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-teal-700 bg-transparent"
            >
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
