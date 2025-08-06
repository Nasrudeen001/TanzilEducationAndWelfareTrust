import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Mail, Quote } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function BoardPage() {
  const boardMembers = [
    {
      name: "Ahmad Muhammad",
      position: "Director",
      image: "/Ahmad_Muhammad.png",
      phone: "+254 726 376 569",
      email: "director@tanziltrust.org",
    },
    {
      name: "Ali Baghoth",
      position: "Trustee",
      image: "/Ali_Baghoth.png",
      phone: "+254 733 708 307",
      email: "ali.baghoth@tanziltrust.org",
    },
    {
      name: "Muhammad Abdallah",
      position: "Trustee",
      image: "/Muhammad_Abdallah.png",
      phone: "+254 722 836 435",
      email: "muhammad.abdallah@tanziltrust.org",
    },
    {
      name: "Muhammad Abeid",
      position: "Trustee",
      image: "/Muhammad_Abeid.png",
      phone: "+254 722 424 696",
      email: "muhammad.abeid@tanziltrust.org",
    },
    {
      name: "Mbarak Bameda",
      position: "Trustee",
      image: "/Mbarak_Bameda.png",
      phone: "+254 751 330 488",
      email: "mbarak.bameda@tanziltrust.org",
    },
    {
      name: "Alawi Ali Njama",
      position: "Trustee",
      image: "/Alawi_Ali_Njama.png",
      phone: "+254 713 225 051",
      email: "alawi.njama@tanziltrust.org",
    },
    {
      name: "Faiz Abeid",
      position: "Trustee",
      image: "/Faiz_Abeid.png",
      phone: "+254 727 724 717",
      email: "faiz.abeid@tanziltrust.org",
    },
  ]

  const chairman = boardMembers[0]
  const trustees = boardMembers.slice(1)

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/30 via-transparent to-cyan-200/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/20 via-transparent to-teal-100/30"></div>
      <div className="relative z-10">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 to-cyan-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Board of Trustees</h1>
            <p className="text-xl mb-8 text-teal-100">
              Meet the dedicated leaders who guide our mission of transforming lives through education, welfare, and
              community development programs across Kenya.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-teal-700 hover:bg-teal-50">
                <Link href="#board-members">
                  <Users className="mr-2 h-5 w-5" />
                  Meet Our Board
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-teal-700 bg-transparent"
              >
                <Link href="#history">
                  <Award className="mr-2 h-5 w-5" />
                  Our History
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16" id="history">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">History of Tanzil Trust</h2>
              <p className="text-lg text-gray-600">A journey of faith, dedication, and community transformation</p>
            </div>

            <div className="flex justify-center mb-8">
              <Image
                src="/TEWET.png"
                alt="TEWET Logo"
                width={220}
                height={220}
                className="rounded-lg shadow-lg"
              />
            </div>
            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">A Professional Journey</h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-4">
                    <li>
                      <span className="font-semibold">2006 – Establishment & Dawa Programs:</span> Tanzil Education and Welfare Trust (TEWET) was established, laying strong roots in Dawa programs and community outreach. The Trust began its mission to promote Islamic values and education through dedicated Dawa initiatives.
                    </li>
                    <li>
                      <span className="font-semibold">2008 – Student Convention & Welfare Expansion:</span> TEWET launched its first student convention, bringing together youth for learning and leadership. This year also saw the introduction of food distribution programs and other welfare activities, broadening the Trust’s impact in the community.
                    </li>
                    <li>
                      <span className="font-semibold">2017 – Planning & Construction of Tanzil Education Centre:</span> The Trust began planning and construction of the Tanzil Education Centre, marking a significant step towards providing comprehensive educational facilities and expanding its reach.
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>

      {/* Chairman Section */}
      <section className="py-16" id="chairman">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Director</h2>
              <p className="text-lg text-gray-600">Leading with vision, wisdom, and dedication</p>
            </div>

            <Card className="bg-white/80 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center">
                    <Image
                      src={chairman?.image || "/placeholder.svg"}
                      alt={chairman?.name || "Director"}
                      width={300}
                      height={300}
                      className="rounded-full mx-auto mb-6 object-cover object-top"
                    />
                    <Badge className="mb-4 bg-teal-100 text-teal-800">{chairman?.position || "Director"}</Badge>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{chairman?.name || "Director"}</h3>
                    <div className="space-y-2 mb-6">
                      <div className="flex items-center justify-center">
                        <svg className="h-4 w-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        <span className="text-sm text-gray-600">{chairman?.phone || "+254 726 376 569"}</span>
                      </div>
                      <div className="flex items-center justify-center">
                        <Mail className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-600">{chairman?.email || "director@tanziltrust.org"}</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">About Our Director</h4>
                    <p className="text-gray-600 mb-6">
                      Ahmad Muhammad serves as the Director of Tanzil Education and Welfare Trust, providing strategic leadership and vision for our comprehensive education and welfare programs. His dedication to community development and Islamic values has been instrumental in expanding our reach across Kenya.
                    </p>
                    <div className="bg-teal-50 p-6 rounded-lg">
                      <h5 className="font-semibold text-teal-800 mb-3">Leadership Philosophy</h5>
                      <p className="text-teal-700 text-sm">
                        "True leadership in Islamic education means creating an environment where students not only
                        excel academically but also develop strong moral character rooted in Islamic values. Our
                        responsibility extends beyond the classroom to nurturing future leaders who will serve their
                        communities with integrity and compassion."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Board Members Section */}
      <section className="py-16" id="board-members">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Board of Trustees</h2>
            <p className="text-lg text-gray-600">Experienced professionals dedicated to our mission</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trustees && trustees.length > 0 ? trustees.map((member, index) => (
              <Card key={index} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 object-cover object-top w-32 h-32"
                  />
                  <Badge className="mb-2 bg-cyan-100 text-cyan-800">{member.position}</Badge>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center">
                      <svg className="h-4 w-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span className="text-sm text-gray-600">{member.phone}</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Mail className="h-4 w-4 mr-2 text-gray-500" />
                      <span className="text-sm text-gray-600">{member.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )) : (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-500">No trustees information available</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-700 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Message from the Director</h2>
              <p className="text-xl text-teal-100">A word from our leadership</p>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <Quote className="h-12 w-12 text-teal-200 flex-shrink-0 mt-2" />
                  <div>
                    <blockquote className="text-lg leading-relaxed mb-6">
                      <p className="mb-4">
                        "Assalamu Alaikum wa Rahmatullahi wa Barakatuh. As Director of Tanzil Education and Welfare Trust, I am honored to lead an organization dedicated to empowering our community through education, faith, and service. Since our establishment, TEWET has remained steadfast in its commitment to nurturing future leaders, promoting Islamic values, and supporting those in need.
                      </p>
                      <p className="mb-4">
                        Our journey has been marked by significant milestones—from our strong foundation in Dawa programs, to the launch of student conventions and welfare initiatives, and the ongoing development of the Tanzil Education Centre. Each step reflects our unwavering dedication to excellence and community transformation.
                      </p>
                      <p className="mb-4">
                        I am deeply grateful to our board members, staff, volunteers, and supporters whose tireless efforts and generosity have made our achievements possible. Together, we continue to build a legacy of hope, knowledge, and compassion for generations to come.
                      </p>
                      <p>
                        May Allah (SWT) guide us in our mission and bless our endeavors with success, unity, and lasting impact."
                      </p>
                    </blockquote>
                    <div className="border-t border-white/20 pt-6">
                      <div className="flex items-center space-x-4">
                        <Image
                          src={chairman?.image || "/placeholder.svg"}
                          alt={chairman?.name || "Director"}
                          width={60}
                          height={60}
                          className="rounded-full object-cover object-top w-15 h-15"
                        />
                        <div>
                          <div className="font-semibold text-lg">{chairman?.name || "Director"}</div>
                          <div className="text-teal-200">{chairman?.position || "Director"}</div>
                          <div className="text-teal-200 text-sm">Tanzil Education and Welfare Trust</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Work with our dedicated board to create lasting positive change in communities across Kenya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
              <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer">
                <Users className="mr-2 h-5 w-5" />
                Volunteer With Us
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <Link href="/donate">
                <Award className="mr-2 h-5 w-5" />
                Support Our Work
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <Link href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                Contact Board
              </Link>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
