import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Heart, Mail, Phone, MapPin, Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/TEWET.png"
                alt="Tanzil Education and Welfare Trust Logo"
                width={40}
                height={40}
                className="w-10 h-10 object-contain"
              />
              <div>
                <h2 className="font-bold text-xl text-white">Tanzil Education and Welfare Trust</h2>
                <p className="text-sm text-teal-400">Educating, Transforming and Serving</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering communities through quality education, comprehensive welfare programs, and sustainable development initiatives across underserved communities in Kenya.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white border-b border-gray-700 pb-2">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="h-4 w-4 text-white" />
                </div>
                <div className="text-gray-300 text-sm">
                  <div className="font-medium text-white mb-1">Call Us</div>
                  <div>+254 726 376 569</div>
                  <div>+254 769 199 301</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="h-4 w-4 text-white" />
                </div>
                <div className="text-gray-300 text-sm">
                  <div className="font-medium text-white mb-1">Email Us</div>
                  <div>markaztanzil@gmail.com</div>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="h-4 w-4 text-white" />
                </div>
                <div className="text-gray-300 text-sm">
                  <div className="font-medium text-white mb-1">Visit Us</div>
                  <div>Jomvu-Jitoni,</div>
                  <div>Mombasa, Kenya</div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white border-b border-gray-700 pb-2">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/education" className="text-gray-300 hover:text-teal-400 transition-colors text-sm flex items-center">
                  <span className="w-1 h-1 bg-teal-400 rounded-full mr-3"></span>
                  Education Programs
                </Link>
              </li>
              <li>
                <Link href="/welfare" className="text-gray-300 hover:text-teal-400 transition-colors text-sm flex items-center">
                  <span className="w-1 h-1 bg-teal-400 rounded-full mr-3"></span>
                  Welfare Services
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-teal-400 transition-colors text-sm flex items-center">
                  <span className="w-1 h-1 bg-teal-400 rounded-full mr-3"></span>
                  News & Updates
                </Link>
              </li>
              <li>
                <Link href="/board" className="text-gray-300 hover:text-teal-400 transition-colors text-sm flex items-center">
                  <span className="w-1 h-1 bg-teal-400 rounded-full mr-3"></span>
                  Board of Trustees
                </Link>
              </li>
              <li>
                <Link href="/dawa" className="text-gray-300 hover:text-teal-400 transition-colors text-sm flex items-center">
                  <span className="w-1 h-1 bg-teal-400 rounded-full mr-3"></span>
                  Da'wa Programs
                </Link>
              </li>
              <li>
                <a href="https://wa.me/254726376569" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-teal-400 transition-colors text-sm flex items-center">
                  <span className="w-1 h-1 bg-teal-400 rounded-full mr-3"></span>
                  Volunteer Opportunities
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-6 text-white border-b border-gray-700 pb-2">Follow Us on Social Media</h3>
            <p className="text-gray-300 text-sm mb-6">
              Stay connected with us for the latest updates, news, and impact stories from our community programs.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 text-gray-300 hover:text-white transition-all duration-300 rounded-full">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 text-gray-300 hover:text-white transition-all duration-300 rounded-full">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 text-gray-300 hover:text-white transition-all duration-300 rounded-full">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 text-gray-300 hover:text-white transition-all duration-300 rounded-full">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="w-10 h-10 bg-gray-800 hover:bg-teal-600 text-gray-300 hover:text-white transition-all duration-300 rounded-full">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                </svg>
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © 2024 Tanzil Education and Welfare Trust. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-teal-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
