import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Play, Heart, Users } from "lucide-react"
import Link from "next/link"

export default function VideosPage() {
  const welfareVideos = [
    {
      id: 1,
      title: "Tanzil Education Centre - Grand Project",
      description: "Comprehensive overview of our flagship education center project and its impact on community development",
      videoSrc: "/Welfare 1 .mp4",
      thumbnail: "/Welfare 1.jpeg",
      duration: "5:30",
      category: "Education Centre"
    },
    {
      id: 2,
      title: "Water Projects - Community Wells",
      description: "Bringing clean water to remote communities through borehole construction and water infrastructure",
      videoSrc: "/Welfare 2.mp4",
      thumbnail: "/Welfare 2.jpeg",
      duration: "4:15",
      category: "Water Projects"
    },
    {
      id: 3,
      title: "Orphanage Visit & Support",
      description: "Heartwarming visit to orphanages providing care, education, and support to vulnerable children",
      videoSrc: "/Welfare 3.mp4",
      thumbnail: "/Welfare 3.jpeg",
      duration: "6:45",
      category: "Orphanage Support"
    },
    {
      id: 4,
      title: "Food Distribution & Iftar Program",
      description: "Daily food distribution and Iftar meals during Ramadan serving communities in need",
      videoSrc: "/Welfare 4.mp4",
      thumbnail: "/Welfare 4.jpeg",
      duration: "8:20",
      category: "Food & Iftar"
    },
    {
      id: 5,
      title: "Community Iftar & Food Security",
      description: "Large-scale Iftar programs and food security initiatives for vulnerable families",
      videoSrc: "/Welfare 5.mp4",
      thumbnail: "/Welfare 5.jpeg",
      duration: "7:10",
      category: "Food & Iftar"
    },
    {
      id: 6,
      title: "Mosque Construction Projects",
      description: "Building and renovating mosques to serve the spiritual needs of communities",
      videoSrc: "/Welfare 6.mp4",
      thumbnail: "/Welfare 6.jpeg",
      duration: "5:55",
      category: "Mosque Projects"
    },
    {
      id: 7,
      title: "Mosque Development & Renovation",
      description: "Ongoing mosque construction and renovation projects across communities",
      videoSrc: "/Welfare 7.mp4",
      thumbnail: "/Welfare 7.jpeg",
      duration: "4:40",
      category: "Mosque Projects"
    },
    {
      id: 8,
      title: "Water Infrastructure Development",
      description: "Advanced water projects including pipeline systems and community water access",
      videoSrc: "/Welfare 8.mp4",
      thumbnail: "/Welfare 8.jpeg",
      duration: "6:30",
      category: "Water Projects"
    },
    {
      id: 9,
      title: "Clean Water Access Programs",
      description: "Comprehensive water access initiatives providing clean drinking water to communities",
      videoSrc: "/Welfare 9.mp4",
      thumbnail: "/Welfare 9.jpeg",
      duration: "5:20",
      category: "Water Projects"
    },
    {
      id: 10,
      title: "Emergency Food Relief & Iftar",
      description: "Emergency food distribution and Iftar programs for families in crisis",
      videoSrc: "/Welfare 10.mp4",
      thumbnail: "/Welfare 10.jpeg",
      duration: "4:50",
      category: "Food & Iftar"
    },
    {
      id: 11,
      title: "Community Iftar & Food Support",
      description: "Community-wide Iftar programs and ongoing food support initiatives",
      videoSrc: "/Welfare 11.mp4",
      thumbnail: "/Welfare 11.jpeg",
      duration: "6:15",
      category: "Food & Iftar"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/30 via-transparent to-cyan-200/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/20 via-transparent to-teal-100/30"></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <Button asChild variant="ghost" className="text-white hover:bg-white/20 mr-4">
                <Link href="/welfare">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Welfare
                </Link>
              </Button>
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Welfare Program Videos</h1>
            <p className="text-xl mb-8 text-teal-100">
              Watch our welfare programs in action and see the real impact we're making in communities
              through comprehensive social services and development initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-teal-50">
                <Link href="#videos">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Videos
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-teal-700 bg-transparent"
              >
                <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer">
                  <Heart className="mr-2 h-5 w-5" />
                  Support Our Work
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Videos Grid */}
      <section className="py-16" id="videos">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Welfare Programs in Action</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our comprehensive welfare initiatives through these videos showcasing our community impact,
              volunteer activities, and transformation stories.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {welfareVideos.map((video) => (
              <Card key={video.id} className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="p-0">
                  <div className="relative">
                    <video
                      className="w-full h-48 object-cover rounded-t-lg"
                      controls
                      preload="metadata"
                    >
                      <source src={video.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-black/70 text-white">
                        {video.duration}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-4">
                    <CardTitle className="text-lg text-gray-900 mb-2">{video.title}</CardTitle>
                    <CardDescription className="text-sm text-gray-600 mb-3">
                      {video.description}
                    </CardDescription>
                    <Badge variant="outline" className="text-xs">
                      {video.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 px-4 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <Users className="mr-1 h-4 w-4" />
                      Community Impact
                    </div>
                    <Button variant="outline" size="sm" className="text-teal-600 border-teal-200 hover:bg-teal-50">
                      Watch Full Video
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured: Tanzil Education Centre</h2>
            <p className="text-lg text-gray-600">
              Watch our flagship education center project and its comprehensive impact on community development
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900 mb-2">Tanzil Education Centre - Grand Project</CardTitle>
                <CardDescription className="text-lg">
                  A comprehensive overview of our flagship education center project and its impact on community development
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <div className="relative">
                  <video
                    className="w-full h-96 object-cover"
                    controls
                    preload="metadata"
                  >
                    <source src="/Welfare 1 .mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    This featured video showcases our grand education center project, highlighting the comprehensive 
                    approach to community development through education, infrastructure, and sustainable development 
                    initiatives that transform lives and empower communities.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary">Education Centre</Badge>
                    <Badge variant="secondary">Community Development</Badge>
                    <Badge variant="secondary">Infrastructure</Badge>
                    <Badge variant="secondary">Sustainable Growth</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Support Our Welfare Programs</h2>
          <p className="text-xl mb-8 text-teal-100 max-w-2xl mx-auto">
            Your donations and support enable us to continue these vital community programs and expand our reach 
            to help more families in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </section>
      </div>
    </div>
  )
} 