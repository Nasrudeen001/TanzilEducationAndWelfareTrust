import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Calendar, FileText, Download, Star, Book, GraduationCap, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function EducationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/30 via-transparent to-cyan-200/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/20 via-transparent to-teal-100/30"></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Education Programs</h1>
            <p className="text-xl mb-8 text-blue-100">
              Providing comprehensive Islamic and secular education that nurtures both spiritual growth and academic
              excellence, preparing students for success in this world and the hereafter.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-700 bg-transparent"
              >
                <Link href="#programs">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Programs
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Educational Programs</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive Islamic and secular education programs designed to develop well-rounded individuals with
              strong faith and academic excellence
            </p>
          </div>

          <Tabs defaultValue="tahfidh" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="tahfidh">Tahfidh</TabsTrigger>
              <TabsTrigger value="talim">Talim</TabsTrigger>
              <TabsTrigger value="integrated">Integrated</TabsTrigger>
              <TabsTrigger value="tahfidh-cbe">Tahfidh + CBE</TabsTrigger>
              <TabsTrigger value="technical">Technical</TabsTrigger>
            </TabsList>

            <TabsContent value="tahfidh" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Image
                      src="/Tahfidh Program.jpeg"
                      alt="Tahfidh Program"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-emerald-700 flex items-center">
                      <Star className="mr-2 h-5 w-5" />
                      Tahfidh Program
                    </CardTitle>
                    <CardDescription>Complete Quran Memorization with Tajweed</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Complete memorization of the Holy Quran</li>
                      <li>• Proper Tajweed rules and pronunciation</li>
                      <li>• Individual and group recitation sessions</li>
                      <li>• Regular revision and retention programs</li>
                      <li>• Qualified Huffaz as instructors</li>
                      <li>• Spiritual development and character building</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">3-4 Years</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Image
                      src="/Advanced Qira'at Studies.jpeg"
                      alt="Advanced Qira'at Studies"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-green-700">Advanced Qira'at Studies</CardTitle>
                    <CardDescription>Specialized recitation methods and styles</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Seven different Qira'at methods</li>
                      <li>• Advanced Tajweed techniques</li>
                      <li>• Quranic recitation competitions</li>
                      <li>• Voice training and modulation</li>
                      <li>• Ijazah certification pathway</li>
                      <li>• Leadership in prayer and community</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Advanced Level</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="talim" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Image
                      src="/Rawdhwa Classes.jpeg"
                      alt="Rawdhwa Classes"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-purple-700 flex items-center">
                      <Book className="mr-2 h-5 w-5" />
                      Rawdhwa Classes
                    </CardTitle>
                    <CardDescription>Foundational Islamic education program</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Basic Quranic reading and recitation</li>
                      <li>• Introduction to Islamic teachings</li>
                      <li>• Basic Arabic language skills</li>
                      <li>• Islamic etiquette and manners</li>
                      <li>• Stories of Prophets and companions</li>
                      <li>• Foundation for advanced Islamic studies</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Entry Level</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Image
                      src="/Thanawi Classes.jpeg"
                      alt="Thanawi Classes"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-orange-700">Thanawi Classes</CardTitle>
                    <CardDescription>Advanced Islamic scholarship and studies</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Advanced Quranic studies and Tafseer</li>
                      <li>• Hadith studies and Islamic jurisprudence</li>
                      <li>• Arabic grammar and literature</li>
                      <li>• Islamic history and civilization</li>
                      <li>• Comparative religion and theology</li>
                      <li>• Preparation for Islamic scholarship</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Advanced Level</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="integrated" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Image
                      src="/Integrated Program.jpeg"
                      alt="Integrated Program"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-blue-700 flex items-center">
                      <GraduationCap className="mr-2 h-5 w-5" />
                      Integrated Program
                    </CardTitle>
                    <CardDescription>Islamic studies combined with secular education</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Core Islamic studies curriculum</li>
                      <li>• Mathematics, Science, and English</li>
                      <li>• Swahili language and literature</li>
                      <li>• Social studies and geography</li>
                      <li>• Computer literacy and technology</li>
                      <li>• Balanced spiritual and academic growth</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Pre-Primary to Junior Secondary</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Image
                      src="/STEM with Islamic Values.jpeg"
                      alt="STEM with Islamic Values"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-indigo-700">STEM with Islamic Values</CardTitle>
                    <CardDescription>Science, Technology, Engineering & Math</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Physics, Chemistry, and Biology</li>
                      <li>• Mathematics and Statistics</li>
                      <li>• Computer programming and IT</li>
                      <li>• Engineering fundamentals</li>
                      <li>• Islamic perspective on science</li>
                      <li>• University preparation programs</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">Forms 3-6</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="tahfidh-cbe" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <Image
                      src="/Tahfidh + CBE Basics.jpeg"
                      alt="Tahfidh + CBE Basics"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-teal-700 flex items-center">
                      <Star className="mr-2 h-5 w-5" />
                      Tahfidh + CBE Basics
                    </CardTitle>
                    <CardDescription>Quran memorization with foundational secular education</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Complete Quran memorization program</li>
                      <li>• Basic literacy and numeracy (CBE)</li>
                      <li>• Essential English and Swahili</li>
                      <li>• Fundamental mathematics skills</li>
                      <li>• Life skills and practical knowledge</li>
                      <li>• Preparation for further education</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">3-4 Years</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Image
                      src="/Skills Program.jpg"
                      alt="Skills Program"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-cyan-700">Foundation Skills Program</CardTitle>
                    <CardDescription>Essential skills for daily life and further learning</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Reading and writing proficiency</li>
                      <li>• Basic arithmetic and problem solving</li>
                      <li>• Communication skills development</li>
                      <li>• Digital literacy basics</li>
                      <li>• Health and hygiene education</li>
                      <li>• Community engagement skills</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">All Ages</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="technical" className="mt-8">
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                <Card>
                  <CardHeader>
                    <Image
                      src="/Fashion Design & Dress Making.jpeg"
                      alt="Fashion Design & Dress Making"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-pink-700 flex items-center">
                      <Wrench className="mr-2 h-5 w-5" />
                      Fashion Design & Dress Making
                    </CardTitle>
                    <CardDescription>Complete fashion design and tailoring program</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Pattern making and design principles</li>
                      <li>• Garment construction techniques</li>
                      <li>• Islamic clothing design and modesty</li>
                      <li>• Modern fashion trends and styles</li>
                      <li>• Business skills for fashion entrepreneurs</li>
                      <li>• Hands-on practical training</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">6 months</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <Image
                      src="/Computer Skills.jpeg"
                      alt="Computer Skills"
                      width={400}
                      height={200}
                      className="rounded-lg mb-4"
                    />
                    <CardTitle className="text-blue-700 flex items-center">
                      <Wrench className="mr-2 h-5 w-5" />
                      Computer Skills
                    </CardTitle>
                    <CardDescription>Essential computer and digital literacy program</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-gray-600 mb-4">
                      <li>• Basic computer operations and Windows</li>
                      <li>• Microsoft Office applications (Word, Excel, PowerPoint)</li>
                      <li>• Internet browsing and email communication</li>
                      <li>• Digital literacy and online safety</li>
                      <li>• Basic graphic design and typing skills</li>
                      <li>• Job-ready computer competencies</li>
                    </ul>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary">3 months</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Admission & More Info Link */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Admissions & More Information</h2>
            <p className="text-lg text-gray-600 mb-6">
              For admission and detailed information about our education programs, please visit the Tanzil Education Centre website or contact us directly.
            </p>
            <a
              href="https://tanzileducationcenter.com" // Replace with actual URL if different
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >
              Visit Tanzil Education Centre
            </a>
            <div className="mt-6">
              <Link href="/contact">
                <Button variant="outline" className="text-blue-700 border-blue-600 hover:bg-blue-50">
                  Contact Us for More Info
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
