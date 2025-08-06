import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, Users, Landmark, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function DawaPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/30 via-transparent to-cyan-200/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/20 via-transparent to-teal-100/30"></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Da'wa Programs</h1>
            <p className="text-xl mb-8 text-amber-100">
              Spreading the message of Islam through educational programs, community gatherings, and spiritual events
              that nurture faith and foster brotherhood and sisterhood in our community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-amber-50">
                <Link href="#programs">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Programs
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-amber-700 bg-transparent"
              >
                <Link href="/contact">
                  <Calendar className="mr-2 h-5 w-5" />
                  Join Our Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16" id="programs">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Da'wa Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Community-focused Islamic programs designed to educate, inspire, and strengthen faith through various
              activities and events
            </p>
          </div>

          <Tabs defaultValue="eid" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="eid">Swalatul Eid</TabsTrigger>
              <TabsTrigger value="duruus">Duruus (Classes)</TabsTrigger>
              <TabsTrigger value="udhiya">Ud-hiya Program</TabsTrigger>
              <TabsTrigger value="convention">Students Convention</TabsTrigger>
            </TabsList>

            <TabsContent value="eid" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Image
                      src="/Eid Prayer Gatherings.jpeg"
                      alt="Eid prayer gathering"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-amber-700 flex items-center">
                      <Landmark className="mr-2 h-5 w-5" />
                      Eid Prayer Gatherings
                    </CardTitle>
                    <CardDescription>Community-wide celebration of Eid al-Fitr and Eid al-Adha</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Organized Eid prayers in open grounds</li>
                      <li>• Facilitation of takbir and prayer proceedings</li>
                      <li>• Special Eid sermons by qualified scholars</li>
                      <li>• Dedicated prayer areas for men and women</li>
                      <li>• Special arrangements for elderly and disabled</li>
                      <li>• Post-prayer community celebrations</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Twice Yearly</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Image
                      src="/Eid Celebrations.jpeg"
                      alt="Eid celebration with children"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-orange-700">Eid Celebrations</CardTitle>
                    <CardDescription>Festive activities and community bonding</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Distribution of Eid gifts to children</li>
                      <li>• Community feasts and shared meals</li>
                      <li>• Special programs for orphans and needy</li>
                      <li>• Encourage family-friendly activities and games</li>
                      <li>• Strengthening community brotherhood/sisterhood</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">1000+ Attendees</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="duruus" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Image
                      src="/Weekly Islamic Classes.jpeg"
                      alt="Islamic classes for adults"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-green-700 flex items-center">
                      <BookOpen className="mr-2 h-5 w-5" />
                      Weekly Islamic Classes
                    </CardTitle>
                    <CardDescription>Regular knowledge sessions for adults and youth</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Tafsir (Quranic interpretation) classes</li>
                      <li>• Hadith studies and explanations</li>
                      <li>• Fiqh (Islamic jurisprudence) lessons</li>
                      <li>• Seerah (Prophetic biography) sessions</li>
                      <li>• Contemporary Islamic issues discussions</li>
                      <li>• Question and answer sessions</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Weekly Sessions</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Image
                      src="/Special Programs.jpeg"
                      alt="Ramadan lectures and programs"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-blue-700">Special Programs</CardTitle>
                    <CardDescription>Seasonal and special occasion Islamic lectures</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Ramadan nightly lectures</li>
                      <li>• Pre-Hajj training and guidance</li>
                      <li>• Islamic holidays special programs</li>
                      <li>• Guest scholars and speakers</li>
                      <li>• Women-specific educational programs</li>
                      <li>• Youth-focused Islamic discussions</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Seasonal Events</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="udhiya" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Image
                      src="/Ud-hiya Collection Program.jpeg"
                      alt="Ud-hiya (Qurbani) program"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-red-700 flex items-center">
                      <Calendar className="mr-2 h-5 w-5" />
                      Ud-hiya Collection Program
                    </CardTitle>
                    <CardDescription>Facilitating Qurbani (sacrifice) during Eid al-Adha</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Collection of Ud-hiya contributions</li>
                      <li>• Procurement of healthy livestock</li>
                      <li>• Proper Islamic slaughtering procedures</li>
                      <li>• Supervision by qualified scholars</li>
                      <li>• Documentation and verification process</li>
                      <li>• Transparent reporting to contributors</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Annual Program</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Image
                      src="/Meat Distribution.jpeg"
                      alt="Meat distribution to needy families"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-purple-700">Meat Distribution</CardTitle>
                    <CardDescription>Sharing the blessings with those in need</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Fair distribution to needy families</li>
                      <li>• Priority to orphans and widows</li>
                      <li>• Reaching remote communities</li>
                      <li>• Hygienic packaging and handling</li>
                      <li>• Volunteer opportunities for community</li>
                      <li>• Spreading the spirit of sacrifice and sharing</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">500+ Families Served</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="convention" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Image
                      src="/Annual Students Convention.jpeg"
                      alt="Students Islamic convention"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-indigo-700 flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Annual Students Convention
                    </CardTitle>
                    <CardDescription>Gathering of Islamic students for learning and inspiration</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Keynote speeches by prominent scholars</li>
                      <li>• Workshops on various Islamic topics</li>
                      <li>• Quran recitation competitions</li>
                      <li>• Islamic knowledge contests</li>
                      <li>• Networking opportunities for students</li>
                      <li>• Recognition of academic achievements</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Annual Event</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Image
                      src="/Youth Development Programs.jpeg"
                      alt="Youth activities and workshops"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-cyan-700">Youth Development Programs</CardTitle>
                    <CardDescription>Nurturing the next generation of Muslim leaders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Leadership training workshops</li>
                      <li>• Public speaking and da'wah skills</li>
                      <li>• Character development sessions</li>
                      <li>• Community service projects</li>
                      <li>• Mentorship programs with scholars</li>
                      <li>• Career guidance with Islamic perspective</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Year-round Programs</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>



      {/* Resources */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Islamic Resources</h2>
            <p className="text-lg text-gray-600">Educational materials to enhance your Islamic knowledge</p>
          </div>
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mb-4">
                  <BookOpen className="h-10 w-10 text-amber-600" />
                </div>
                <CardTitle className="text-2xl text-amber-700 mb-2">Books & Literature</CardTitle>
                <CardDescription className="text-base">
                  Essential Islamic reading materials and scholarly texts
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                {/* Book Images Grid moved to /dawa/library page */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Primary Sources</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                        Quran translations and tafsir
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                        Hadith collections
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                        Islamic history books
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3 text-sm uppercase tracking-wide">Scholarly Works</h4>
                    <ul className="space-y-2 text-sm text-gray-600">
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                        Fiqh and jurisprudence texts
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                        Character development literature
                      </li>
                      <li className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full mr-2"></span>
                        Contemporary Islamic studies
                      </li>
                    </ul>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100">
                  <Link href="/dawa/library">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Browse Library
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
              </Card>
            </div>




          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-amber-600 to-orange-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Da'wa Programs</h2>
          <p className="text-xl mb-8 text-amber-100 max-w-2xl mx-auto">
            Enhance your Islamic knowledge, connect with the community, and strengthen your faith through our various
            Da'wa programs and events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-amber-700 hover:bg-amber-50">
              <Link href="/contact">
                <Users className="mr-2 h-5 w-5" />
                Register for Programs
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-amber-700 bg-transparent"
            >
              <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer">
                <Calendar className="mr-2 h-5 w-5" />
                Volunteer as Teacher
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
