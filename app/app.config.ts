export default defineAppConfig({
  global: {
    meetingLink: '',
    available: false,
  },
  profile: {
    name: 'Taede Meijer',
    job: 'Software Engineer',
    email: 'info@taedemeijer.nl',
    phone: 'bel me niet',
    picture: 'https://avatars.githubusercontent.com/u/78475736?v=4',
  },
  socials: {
    github: 'https://github.com/TaedeM',
    // twitter: 'https://twitter.com/HugoRCD__', // https://bsky.app/profile/taedeee.bsky.social
    linkedin: 'https://www.linkedin.com/in/taede-meijer-664382233/',
    instagram: 'https://www.instagram.com/taede.meijer/',
    spotify: 'https://open.spotify.com/user/taedemeijer',
  },
  seo: {
    title: 'Taede Meijer portfolio website',
    description: 'Canvas is a simple but beautiful portfolio template for designers and developers built with Nuxt and Tailwind CSS. Made with ❤️ by HugoRCD',
    url: 'taede-m-portfolio.nuxt.space',
  },
  ui: {
    colors: {
      primary: 'emerald',
      neutral: 'neutral',
    },
    notifications: {
      position: 'top-0 bottom-auto',
    },
    notification: {
      progress: {
        base: 'absolute bottom-0 end-0 start-0 h-0',
        background: 'bg-transparent dark:bg-transparent',
      },
    },
    button: {
      slots: {
        base: 'cursor-pointer',
      },
      defaultVariants: {
        color: 'neutral',
      },
    },
    input: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    textarea: {
      defaultVariants: {
        color: 'neutral',
      },
    },
    icons: {
      loading: 'lucide:loader',
    },
  },
  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicon-16x16.png',
    },
    {
      rel: 'manifest',
      href: '/site.webmanifest',
    },
  ],
})