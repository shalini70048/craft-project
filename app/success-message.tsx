"use client"

import { useSearchParams } from "next/navigation"
import { CheckCircle, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export function SuccessMessage() {
  const searchParams = useSearchParams()
  const success = searchParams.get("success")

  if (!success) return null

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="max-w-md w-full bg-white shadow-2xl">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-serif text-rose-800 mb-4">Message Sent Successfully! 🎉</h3>
          <p className="text-gray-600 mb-6">
            Thank you for reaching out! I've received your message and will get back to you within 24 hours. In the
            meantime, feel free to check out my latest work on Instagram.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={() => (window.location.href = "/")}
              className="bg-rose-500 hover:bg-rose-600 text-white flex-1"
            >
              Continue Browsing
            </Button>
            <Button variant="outline" className="border-rose-400 text-rose-600 hover:bg-rose-50 flex-1" asChild>
              <Link href="https://www.instagram.com/crafting_by_shalini/" target="_blank">
                <Instagram className="w-4 h-4 mr-2" />
                Visit Instagram
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
