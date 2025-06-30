"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { submitContactForm } from "@/app/actions"
import { CheckCircle, AlertCircle, Loader2, Instagram } from "lucide-react"
import Link from "next/link"

interface ContactFormProps {
  formTitle: string
  note: string
  giftTypes: Array<{ value: string; label: string }>
}

export function ContactForm({ formTitle, note, giftTypes }: ContactFormProps) {
  const [isPending, startTransition] = useTransition()
  const [result, setResult] = useState<{ success: boolean; message?: string; error?: string } | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    giftType: "",
    message: "",
  })

  const handleSubmit = async (formData: FormData) => {
    startTransition(async () => {
      const result = await submitContactForm(formData)
      setResult(result)

      if (result.success) {
        // Reset form
        setFormData({
          name: "",
          email: "",
          giftType: "",
          message: "",
        })

        // Auto-hide success message after 8 seconds
        setTimeout(() => {
          setResult(null)
        }, 8000)
      }
    })
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear any existing error when user starts typing
    if (result && !result.success) {
      setResult(null)
    }
  }

  return (
    <Card className="bg-white/95 backdrop-blur-sm border-0 shadow-2xl">
      <CardContent className="p-4 sm:p-6 lg:p-8">
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-serif text-rose-800 mb-6 sm:mb-8 text-center">
          {formTitle}
        </h3>

        {result && (
          <div
            className={`mb-6 p-4 sm:p-5 rounded-xl flex items-start gap-3 sm:gap-4 ${
              result.success
                ? "bg-green-50 text-green-800 border-2 border-green-200"
                : "bg-red-50 text-red-800 border-2 border-red-200"
            }`}
          >
            {result.success ? (
              <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
            ) : (
              <AlertCircle className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <p className="text-sm sm:text-base leading-relaxed font-medium">
                {result.success ? result.message : result.error}
              </p>
              {!result.success && (
                <div className="mt-3 pt-3 border-t border-red-200">
                  <p className="text-sm text-red-700 mb-2">You can also reach out directly:</p>
                  <Link
                    href="https://www.instagram.com/crafting_by_shalini/"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-medium text-red-800 hover:text-red-900 transition-colors"
                  >
                    <Instagram className="w-4 h-4" />
                    @crafting_by_shalini
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}

        <form action={handleSubmit} className="space-y-4 sm:space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Name <span className="text-red-500">*</span>
              </label>
              <Input
                name="name"
                value={formData.name}
                onChange={(e) => handleInputChange("name", e.target.value)}
                required
                disabled={isPending}
                className="border-2 border-rose-200 focus:border-rose-400 focus:ring-rose-400 h-11 sm:h-12 text-base transition-colors"
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <label className="block text-sm sm:text-base font-medium text-gray-700">
                Email <span className="text-red-500">*</span>
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={(e) => handleInputChange("email", e.target.value)}
                required
                disabled={isPending}
                className="border-2 border-rose-200 focus:border-rose-400 focus:ring-rose-400 h-11 sm:h-12 text-base transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="block text-sm sm:text-base font-medium text-gray-700">
              Type of Gift Interested In <span className="text-red-500">*</span>
            </label>
            <select
              name="giftType"
              value={formData.giftType}
              onChange={(e) => handleInputChange("giftType", e.target.value)}
              required
              disabled={isPending}
              className="w-full px-4 py-3 sm:py-4 border-2 border-rose-200 rounded-lg focus:border-rose-400 focus:ring-2 focus:ring-rose-400 focus:outline-none bg-white disabled:bg-gray-50 disabled:cursor-not-allowed text-base transition-colors"
            >
              <option value="">Select a category</option>
              {giftTypes.map((type) => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="block text-sm sm:text-base font-medium text-gray-700">
              Message <span className="text-red-500">*</span>
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={(e) => handleInputChange("message", e.target.value)}
              required
              disabled={isPending}
              className="border-2 border-rose-200 focus:border-rose-400 focus:ring-rose-400 min-h-[120px] sm:min-h-[140px] resize-none text-base transition-colors"
              placeholder="Tell me about your vision, preferred colors, size, occasion, or any special requirements. The more details you provide, the better I can create something perfect for you!"
            />
            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Minimum 10 characters • {formData.message.length}/500
            </p>
          </div>

          <div className="text-center pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isPending}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white px-8 sm:px-12 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto min-w-[200px]"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending Message...
                </>
              ) : (
                <>
                  <span className="mr-2">✨</span>
                  Send Message
                </>
              )}
            </Button>
            <p className="text-xs sm:text-sm text-gray-600 mt-4 px-4 leading-relaxed">
              <span className="font-medium text-rose-700">{note}</span>
              <br />
              <span className="text-gray-500">
                By submitting this form, you agree to be contacted about your inquiry.
              </span>
            </p>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
