"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CreditCard, Copy, Phone, CheckCircle } from "lucide-react"
import Image from "next/image"

export default function DonatePage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-100 via-teal-200 to-cyan-300 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-teal-50/30 via-transparent to-cyan-200/40"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-blue-100/20 via-transparent to-teal-100/30"></div>
      <div className="relative z-10">
      {/* Hero Section removed as requested */}

      {/* Donation Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Donate</h2>
              <p className="text-lg text-gray-600">Choose your preferred donation method below</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Bank Transfer */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CreditCard className="mr-2 h-5 w-5 text-blue-600" />
                    Bank Transfer – Gulf African Bank
                  </CardTitle>
                  <CardDescription>Transfer directly to our Gulf African Bank account</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-blue-50 p-6 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-gray-700">Bank Name:</div>
                        <div className="text-lg">Gulf African Bank</div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard("Gulf African Bank")}> 
                        <Copy className="h-4 w-4 cursor-pointer" aria-label="Copy Bank Name" />
                      </Button>
                    </div>

                  {/* Account Name section removed as requested */}

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-gray-700">Account Number:</div>
                        <div className="text-lg font-mono">08 000 166 03</div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard("08 000 166 03")}> 
                        <Copy className="h-4 w-4 cursor-pointer" aria-label="Copy Account Number" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-gray-700">Swift Code:</div>
                        <div className="text-lg font-mono">GAFRKENA</div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard("GAFRKENA")}> 
                        <Copy className="h-4 w-4 cursor-pointer" aria-label="Copy Swift Code" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-yellow-800">Important Instructions:</h4>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Please use your full name as the reference</li>
                      <li>• Send us a copy of the transfer receipt via WhatsApp</li>
                      <li>• Include your phone number for confirmation</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* M-Pesa */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5 text-green-600" />
                    M-Pesa - Lipa na M-Pesa
                  </CardTitle>
                  <CardDescription>Send money directly via M-Pesa</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-green-50 p-6 rounded-lg space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-gray-700">Business Number:</div>
                        <div className="text-2xl font-mono text-green-700">985050</div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard("985050")}> 
                        <Copy className="h-4 w-4 cursor-pointer" aria-label="Copy Business Number" />
                      </Button>
                    </div>

                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold text-gray-700">Account Number:</div>
                        <div className="text-xl font-mono text-green-700">08 000 166 03</div>
                      </div>
                      <Button variant="ghost" size="sm" onClick={() => copyToClipboard("08 000 166 03")}> 
                        <Copy className="h-4 w-4 cursor-pointer" aria-label="Copy Mpesa Account Number" />
                      </Button>
                    </div>
                  </div>

                  <div className="bg-green-100 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3 text-green-800">How to Send via M-Pesa:</h4>
                    <ol className="text-sm text-green-700 space-y-2">
                      <li>1. Go to M-Pesa menu on your phone</li>
                      <li>2. Select "Lipa na M-Pesa"</li>
                      <li>3. Select "Pay Bill"</li>
                      <li>
                        4. Enter Business Number: <strong>98 50 50</strong>
                      </li>
                      <li>
                        5. Enter Account Number: <strong>08 000 166 03</strong>
                      </li>
                      <li>6. Enter the amount you wish to donate</li>
                      <li>7. Enter your M-Pesa PIN</li>
                      <li>8. Confirm the transaction</li>
                    </ol>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-blue-800">After Payment:</h4>
                    <p className="text-sm text-blue-700">
                      Please send us the M-Pesa confirmation message via WhatsApp to
                      <strong> +254 726 376 569</strong> so we can acknowledge your donation and send you a receipt.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="mt-12">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Need Help with Your Donation?</CardTitle>
                  <CardDescription className="text-center">
                    Our team is here to assist you with any questions about donating
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    <div>
                      <Phone className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                      <div className="font-semibold">Call Us</div>
                      <div className="text-gray-600">+254 726 376 569</div>
                    </div>
                    <div>
                      <div className="w-8 h-8 bg-green-600 rounded mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">WA</span>
                      </div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-gray-600">+254 769 199 301</div>
                    </div>
                    <div>
                      <div className="w-8 h-8 bg-blue-600 rounded mx-auto mb-2 flex items-center justify-center">
                        <span className="text-white text-xs font-bold">@</span>
                      </div>
                      <div className="font-semibold">Email</div>
                      <div className="text-gray-600">markaztanzil@gmail.com</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Impact of Donations section removed as requested */}

      {/* Other Ways to Give section removed as requested */}

      {/* Thank You Message */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Thank You for Your Generosity</h2>
          <p className="text-xl mb-8 text-emerald-100 max-w-2xl mx-auto">
            Every donation, no matter the size, helps us continue our mission of transforming lives through education
            and welfare programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-emerald-700 hover:bg-emerald-50">
              <a href="https://wa.me/254769199301" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us on WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-emerald-700 bg-transparent"
            >
              <a href="tel:+254726376569">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: +254 726 376 569
              </a>
            </Button>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}
