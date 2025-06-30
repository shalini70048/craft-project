import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Instagram, Heart, Star, Sparkles, Palette } from "lucide-react"
import { siteData } from "./data"
import { HorizontalScrollReels } from "@/components/horizontal-scroll-reels"
import { ContactForm } from "@/components/contact-form"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      {/* Hero Banner */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-12 sm:py-16 lg:py-20">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] bg-cover bg-center opacity-5"></div>
        <div className="relative text-center max-w-4xl mx-auto">
          <div className="mb-6 sm:mb-8">
            <Sparkles className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-500 mx-auto mb-4 animate-pulse" />
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-serif text-rose-800 mb-4 leading-tight px-2">
              {siteData.hero.title}
            </h1>
            <div className="text-lg sm:text-2xl md:text-3xl text-rose-600 mb-4 sm:mb-6 font-light px-4">
              {siteData.hero.subtitle}
            </div>
            <div className="flex items-center justify-center gap-2 text-base sm:text-xl text-rose-700 mb-6 sm:mb-8 px-4">
              <Palette className="w-5 h-5 sm:w-6 sm:h-6" />
              <span>{siteData.hero.tagline}</span>
              <Heart className="w-5 h-5 sm:w-6 sm:h-6 fill-current text-pink-500" />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              size="lg"
              className="bg-rose-500 hover:bg-rose-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {siteData.hero.buttons.primary}
            </Button>
            <Link href={siteData.social.instagram} target="_blank">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-rose-400 text-rose-600 hover:bg-rose-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">{siteData.hero.buttons.secondary}</span>
                <span className="sm:hidden">DM on Instagram</span>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About the Artist */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-green-50 to-blue-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-200 to-yellow-200 rounded-3xl opacity-30 blur-lg"></div>
              <Image
                src={siteData.about.image || "/placeholder.svg"}
                alt="Shalini crafting with traditional tools"
                width={400}
                height={500}
                className="relative rounded-2xl shadow-2xl object-cover w-full max-w-md mx-auto"
              />
            </div>
            <div className="space-y-4 sm:space-y-6 order-1 md:order-2">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-rose-800 mb-4 sm:mb-6 text-center md:text-left">
                {siteData.about.title}
              </h2>
              <div className="prose prose-sm sm:prose-lg text-gray-700 space-y-3 sm:space-y-4">
                {siteData.about.paragraphs.map((paragraph, index) => (
                  <p key={index} className="text-sm sm:text-base leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery / Showcase */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-rose-800 text-center mb-8 sm:mb-12">
            My Creations
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {siteData.galleryCategories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={category.image || "/placeholder.svg"}
                      alt={category.title}
                      width={300}
                      height={300}
                      className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <h3 className="text-lg sm:text-xl font-serif text-rose-800 mb-2">{category.title}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm">{category.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {siteData.galleryItems.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative overflow-hidden rounded-lg">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="w-full h-64 sm:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                      <Button className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-rose-600 hover:bg-rose-50 text-sm">
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Reels Section - Horizontal Scroll */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-rose-800 text-center mb-3 sm:mb-4">
            Behind the Scenes
          </h2>
          <p className="text-base sm:text-lg text-gray-600 text-center mb-8 sm:mb-12 px-4">
            Watch my creative process come to life
          </p>

          <HorizontalScrollReels reels={siteData.reels} />

          <div className="text-center mt-8 sm:mt-12">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-rose-400 text-rose-600 hover:bg-rose-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href={`${siteData.social.instagram}reels/`} target="_blank">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">View All Reels on Instagram</span>
                <span className="sm:hidden">View All Reels</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-rose-800 text-center mb-8 sm:mb-12">
            Happy Hearts
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {siteData.testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex mb-3 sm:mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-3 sm:mb-4 italic text-sm sm:text-base leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  <p className="font-semibold text-rose-700 text-sm sm:text-base">— {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Order & Contact Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-b from-green-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-rose-800 mb-4 sm:mb-6 px-4">
              {siteData.contact.title}
            </h2>
            <p className="text-base sm:text-xl text-gray-700 mb-6 sm:mb-8 px-4">{siteData.contact.subtitle}</p>
            <Link href={siteData.social.instagram} target="_blank">
              <Button
                size="lg"
                className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 mb-6 sm:mb-8 w-full sm:w-auto"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">Message on Instagram</span>
                <span className="sm:hidden">Message on IG</span>
              </Button>
            </Link>
          </div>

          <ContactForm
            formTitle={siteData.contact.formTitle}
            note={siteData.contact.note}
            giftTypes={siteData.contact.giftTypes}
          />
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 bg-gradient-to-r from-orange-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-rose-800 text-center mb-8 sm:mb-12">
            Latest from Instagram
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            {siteData.instagramFeed.map((post) => (
              <div key={post.id} className="aspect-square relative group cursor-pointer">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.alt}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 rounded-lg flex items-center justify-center">
                  <Instagram className="w-6 h-6 sm:w-8 sm:h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-rose-400 text-rose-600 hover:bg-rose-50 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              asChild
            >
              <Link href={siteData.social.instagram} target="_blank">
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                <span className="hidden sm:inline">Follow on Instagram</span>
                <span className="sm:hidden">Follow on IG</span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-rose-100 to-pink-100 py-8 sm:py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-4 sm:mb-6">
            <Link
              href={siteData.social.instagram}
              target="_blank"
              className="inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>

          <p className="text-base sm:text-lg text-rose-700 mb-3 sm:mb-4 flex items-center justify-center gap-2 flex-wrap">
            {siteData.footer.text.split("❤️")[0]}
            <Heart className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-pink-500" />
            {siteData.footer.text.split("❤️")[1]}
          </p>

          <p className="text-xs sm:text-sm text-gray-600">{siteData.footer.copyright}</p>
        </div>
      </footer>
    </div>
  )
}
