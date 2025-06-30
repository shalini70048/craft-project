// All website content in one place for easy updates
export const siteData = {
  // Hero Section
  hero: {
    title: "Art & Craft with Heart",
    subtitle: "Lippan • Clay • Custom Gifts",
    tagline: "Handmade with Love",
    buttons: {
      primary: "View Creations",
      secondary: "DM to Order on Instagram",
    },
  },

  // About Section
  about: {
    title: "Meet Shalini",
    image: "/placeholder.svg?height=500&width=400",
    paragraphs: [
      "Welcome to my world of handcrafted beauty! I'm Shalini, and I pour my heart into every piece I create. My journey began with a deep love for traditional Indian art forms, especially the intricate beauty of Lippan work.",
      "Each creation tells a story - from delicate clay miniatures that capture life's precious moments to personalized gifts that celebrate your unique relationships. I believe in preserving traditional techniques while adding a modern touch that speaks to today's hearts.",
      "Every piece is made with patience, love, and attention to detail. When you choose my art, you're not just getting a product - you're getting a piece of my soul, crafted especially for you.",
    ],
  },

  // Gallery Categories
  galleryCategories: [
    {
      title: "Lippan Art",
      image: "/placeholder.svg?height=300&width=300",
      description: "Traditional mirror work with contemporary flair",
    },
    {
      title: "Clay Miniatures",
      image: "/placeholder.svg?height=300&width=300",
      description: "Tiny treasures with big hearts",
    },
    {
      title: "Personalized Gifts",
      image: "/placeholder.svg?height=300&width=300",
      description: "Custom creations for special moments",
    },
    {
      title: "Custom Orders",
      image: "/placeholder.svg?height=300&width=300",
      description: "Your vision brought to life",
    },
  ],

  // Gallery Items
  galleryItems: Array.from({ length: 6 }, (_, index) => ({
    id: index + 1,
    image: `/placeholder.svg?height=400&width=400`,
    title: `Artwork ${index + 1}`,
    category: "Handmade Art",
  })),

  // Reels Data
  reels: [
    {
      id: 1,
      title: "Lippan Art Process",
      thumbnail: "/placeholder.svg?height=400&width=300",
      videoUrl: "/placeholder-video.mp4",
      duration: "0:45",
    },
    {
      id: 2,
      title: "Clay Miniature Making",
      thumbnail: "/placeholder.svg?height=400&width=300",
      videoUrl: "/placeholder-video.mp4",
      duration: "1:20",
    },
    {
      id: 3,
      title: "Custom Gift Creation",
      thumbnail: "/placeholder.svg?height=400&width=300",
      videoUrl: "/placeholder-video.mp4",
      duration: "0:58",
    },
    {
      id: 4,
      title: "Traditional Techniques",
      thumbnail: "/placeholder.svg?height=400&width=300",
      videoUrl: "/placeholder-video.mp4",
      duration: "1:15",
    },
    {
      id: 5,
      title: "Color Mixing Magic",
      thumbnail: "/placeholder.svg?height=400&width=300",
      videoUrl: "/placeholder-video.mp4",
      duration: "0:32",
    },
    {
      id: 6,
      title: "Final Touches",
      thumbnail: "/placeholder.svg?height=400&width=300",
      videoUrl: "/placeholder-video.mp4",
      duration: "1:05",
    },
    {
      id: 7,
      title: "Workspace Setup",
      thumbnail: "/placeholder.svg?height=400&width=300",
      videoUrl: "/placeholder-video.mp4",
      duration: "0:38",
    },
    {
      id: 8,
      title: "Inspiration Moments",
      thumbnail: "/placeholder.svg?height=400&width=300",
      videoUrl: "/placeholder-video.mp4",
      duration: "1:02",
    },
  ],

  // Testimonials
  testimonials: [
    {
      name: "Priya Sharma",
      text: "Shalini's Lippan work is absolutely stunning! The attention to detail and the love she puts into each piece is evident. My home feels so much more beautiful now.",
      rating: 5,
    },
    {
      name: "Rahul Patel",
      text: "Ordered a custom clay miniature for my daughter's birthday. She was over the moon! The craftsmanship is exceptional and the personal touch made it extra special.",
      rating: 5,
    },
    {
      name: "Anjali Gupta",
      text: "The personalized gift I received was beyond my expectations. Shalini truly understands how to capture emotions in her art. Highly recommended!",
      rating: 5,
    },
  ],

  // Contact Information
  contact: {
    title: "Let's Create Together",
    subtitle: "Like something you see? DM me on Instagram for orders or custom requests.",
    formTitle: "Or Send Me a Message",
    note: "Customizations welcome! I'll get back within 24 hours.",
    giftTypes: [
      { value: "lippan", label: "Lippan Art" },
      { value: "clay", label: "Clay Miniatures" },
      { value: "personalized", label: "Personalized Gifts" },
      { value: "custom", label: "Custom Order" },
    ],
  },

  // Social Links
  social: {
    instagram: "https://www.instagram.com/crafting_by_shalini/",
    instagramHandle: "@crafting_by_shalini",
  },

  // Instagram Feed
  instagramFeed: Array.from({ length: 8 }, (_, index) => ({
    id: index + 1,
    image: `/placeholder.svg?height=300&width=300`,
    alt: `Instagram post ${index + 1}`,
  })),

  // Footer
  footer: {
    text: "Made with ❤️ by Shalini",
    copyright: `© ${new Date().getFullYear()} Art & Craft with Heart. All rights reserved.`,
  },
}
