import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen } from "lucide-react";
import Image from "next/image";

export default function LibraryPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-300 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-amber-700 mb-4 flex items-center justify-center">
            <BookOpen className="mr-2 h-8 w-8" />
            Islamic Books & Literature
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential Islamic reading materials and scholarly texts to enhance your knowledge.
          </p>
        </div>
        <Card className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl text-amber-700 mb-2">Library Collection</CardTitle>
            <CardDescription className="text-base">
              Explore our curated selection of Islamic books and literature.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Image src="/Muslims Mini Library Books.jpeg" alt="Muslims Mini Library Books" width={200} height={250} className="rounded shadow-md object-cover w-full h-40" />
                <span className="mt-2 text-sm text-gray-700 text-center">Muslims Mini Library Books: Actual books available for reading, covering a range of Islamic topics and studies.</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/Muslim Mini Library Holder.jpeg" alt="Muslim Mini Library Holder" width={200} height={250} className="rounded shadow-md object-cover w-full h-40" />
                <span className="mt-2 text-sm text-gray-700 text-center">Muslim Mini Library Holder: The shelf arrangement for easy access and organization of the library's books.</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/Awnul Ma'buud Book.jpeg" alt="Awnul Ma'buud Book" width={200} height={250} className="rounded shadow-md object-cover w-full h-40" />
                <span className="mt-2 text-sm text-gray-700 text-center">Awnul Ma'buud Book: The actual book, a renowned commentary on Sunan Abu Dawood, available for in-depth study.</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/Awnul Ma'buud Volumes.jpeg" alt="Awnul Ma'buud Volumes" width={200} height={250} className="rounded shadow-md object-cover w-full h-40" />
                <span className="mt-2 text-sm text-gray-700 text-center">Awnul Ma'buud Volumes: Shelf arrangement showing the complete set of volumes for this classical work.</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/Kunuuz Riyadh Swalihiin Book.jpeg" alt="Kunuuz Riyadh Swalihiin Book" width={200} height={250} className="rounded shadow-md object-cover w-full h-40" />
                <span className="mt-2 text-sm text-gray-700 text-center">Kunuuz Riyadh Swalihiin Book: The actual book, a collection of hadith and Islamic teachings for personal and group study.</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/Kunuuz Riyadh Swalihiin Volumes.jpeg" alt="Kunuuz Riyadh Swalihiin Volumes" width={200} height={250} className="rounded shadow-md object-cover w-full h-40" />
                <span className="mt-2 text-sm text-gray-700 text-center">Kunuuz Riyadh Swalihiin Volumes: The organized volumes as arranged on the library shelf for easy reference.</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/Assunanul Kubrah Book.jpeg" alt="Assunanul Kubrah Book" width={200} height={250} className="rounded shadow-md object-cover w-full h-40" />
                <span className="mt-2 text-sm text-gray-700 text-center">Assunanul Kubrah Book: The actual book, a major hadith collection, available for research and study.</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/Adhwaaul Bayaan.jpeg" alt="Adhwaaul Bayaan" width={200} height={250} className="rounded shadow-md object-cover w-full h-40" />
                <span className="mt-2 text-sm text-gray-700 text-center">Adhwaaul Bayaan: The actual book, a well-known tafsir (Quranic commentary) for deeper understanding of the Quran.</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/Library Shelf.jpeg" alt="Library Shelf" width={200} height={250} className="rounded shadow-md object-cover w-full h-40" />
                <span className="mt-2 text-sm text-gray-700 text-center">Library Shelf: General view of the library shelf showing the arrangement and accessibility of all volumes and books.</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/Majmu'u Al-Fatawa Ibn Uthaymeen Volumes.jpeg" alt="Majmu'u Al-Fatawa Ibn Uthaymeen Volumes" width={200} height={250} className="rounded shadow-md object-cover w-full h-40" />
                <span className="mt-2 text-sm text-gray-700 text-center">Majmu'u Al-Fatawa Ibn Uthaymeen Volumes: The full set of volumes as arranged on the shelf, representing the comprehensive fatwa collection.</span>
              </div>
              <div className="flex flex-col items-center">
                <Image src="/Majmu'u Al-Fatawa Ibn Uthaymeen Book.jpeg" alt="Majmu'u Al-Fatawa Ibn Uthaymeen Book" width={200} height={250} className="rounded shadow-md object-cover w-full h-40" />
                <span className="mt-2 text-sm text-gray-700 text-center">Majmu'u Al-Fatawa Ibn Uthaymeen Book: The actual book, a key reference for Islamic rulings and fatwas by Sheikh Ibn Uthaymeen.</span>
              </div>
            </div>
            <div className="flex flex-col items-center mt-6">
              <span className="text-base text-gray-800 mb-2">For further reference and study:</span>
              <div className="flex gap-4">
                <a href="https://sunnah.com/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">Hadith Reference (sunnah.com)</a>
                <a href="https://quran.com/" target="_blank" rel="noopener noreferrer" className="text-amber-700 underline hover:text-amber-900">Quran Reference (quran.com)</a>
              </div>
            </div>
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
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
