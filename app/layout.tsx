import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

export const metadata: Metadata = {
  title: "✨ Art & Craft with Heart | Lippan • Clay • Custom Gifts 🎁",
  description:
    "🎨 Handmade with Love — Dive into a world of soulful creations inspired by Indian traditional art and modern gifting. Discover handcrafted Lippan art, clay miniatures, personalized gifts, and more — all made with heart.",
  keywords:
    "handmade art, lippan art, clay miniatures, personalized gifts, custom crafts, traditional Indian art, handcrafted gifts",
  authors: [{ name: "Shalini" }],
  openGraph: {
    title: "✨ Art & Craft with Heart | Lippan • Clay • Custom Gifts 🎁",
    description:
      "🎨 Handmade with Love — Discover handcrafted Lippan art, clay miniatures, personalized gifts, and more.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "✨ Art & Craft with Heart | Lippan • Clay • Custom Gifts 🎁",
    description:
      "🎨 Handmade with Love — Discover handcrafted Lippan art, clay miniatures, personalized gifts, and more.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
