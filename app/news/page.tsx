import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, User, ArrowRight, Newspaper, Clock } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function NewsPage() {
  // This would typically come from a database or API
  // For now, we'll simulate no recent news
  const hasRecentNews = false; // Set to false to show the "no news" message
  const newsItems = hasRecentNews ? [
    // News items would go here when available
  ] : [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/30 via-transparent to-cyan-200/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/20 via-transparent to-teal-100/30"></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">News & Updates</h1>
            <p className="text-xl mb-8 text-indigo-100">
              Stay informed about our latest activities, achievements, and community impact stories. Follow our journey
              of transforming lives through education and welfare programs.
            </p>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Join us in our upcoming community activities and programs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 justify-center">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-green-100 text-green-800">Education</Badge>
                  <Badge variant="secondary">Upcoming</Badge>
                </div>
                <CardTitle className="text-xl">Graduation Ceremony for Tanzil Education Centre</CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Date: To be announced
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Tanzil Education Centre
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Celebrate the achievements of our students at the upcoming graduation ceremony. Details will be shared soon.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge className="bg-yellow-100 text-yellow-800">Quran</Badge>
                  <Badge variant="secondary">Upcoming</Badge>
                </div>
                <CardTitle className="text-xl">Hafla for Hufadh of Tanzil Education Centre</CardTitle>
                <CardDescription className="flex items-center gap-4 text-sm">
                  <span className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    Date: To be scheduled
                  </span>
                  <span className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    Tanzil Education Centre
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Join us for a special Hafla honoring the Hufadh of Tanzil Education Centre. The date will be announced soon.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest News</h2>
            <p className="text-lg text-gray-600">Recent updates from our programs and activities</p>
          </div>
          
          {hasRecentNews ? (
          <div className="grid lg:grid-cols-3 gap-8">
              {/* News content would be rendered here when available */}
            </div>
          ) : (
            <div className="max-w-2xl mx-auto text-center">
              <div className="bg-white rounded-lg shadow-lg p-12">
                <div className="flex justify-center mb-6">
                  <div className="bg-gray-100 rounded-full p-4">
                    <Newspaper className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">No Recent News Available</h3>
                <p className="text-gray-600 mb-6">
                  We currently don't have any recent news to share. Our admin team is working hard to bring you the latest updates about our community programs and activities.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-6">
                  <Clock className="h-4 w-4" />
                  <span>Check back soon for updates</span>
            </div>
                <div className="space-y-3">
                  <p className="text-sm text-gray-500">
                    In the meantime, you can:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button variant="outline" asChild>
                      <Link href="/contact">Contact Us</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/donate">Support Our Work</Link>
                  </Button>
                    <Button variant="outline" asChild>
                      <Link href="/education">Learn About Our Programs</Link>
                  </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Recent Articles - Only show if there are news items */}
      {hasRecentNews && (
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Articles</h2>
            <p className="text-lg text-gray-600">More stories from our community impact work</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Recent articles would be rendered here when available */}
            </div>
        </div>
      </section>
      )}


      </div>
    </div>
  )
}
