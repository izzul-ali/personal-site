import { Project } from '@/components/project-card'

export const projectList: Project[] = [
  {
    image: '/images/projects/e-commerce.webp',
    title: 'E-Commerce',
    description: 'A simple ecommerce website built with next.js and zustand',
    tech: ['next', 'react', 'tailwind', 'typescript'],
    demoLink: 'https://e-commerce-izzul-ali.vercel.app/',
    githubRepo: 'https://github.com/izzul-ali/e-commerce'
  },
  {
    image: '/images/projects/quiz-app.webp',
    title: 'Quiz App',
    description:
      'Fullstack Quiz App created with NextJs, PrismaJs and other web libraries.',
    tech: ['next', 'react', 'tailwind', 'prisma', 'typescript'],
    githubRepo: 'https://github.com/izzul-ali/quiz-app',
    demoLink: 'https://quizapp-demo.vercel.app'
  },
  {
    image: '/images/projects/chat-app.webp',
    title: 'Chat App',
    githubRepo: 'https://github.com/izzul-ali/chat-app',
    description:
      'Built using NodeJs and Socket.io on the backend, and NextJs and Tailwind CSS on the frontend.',
    tech: ['next', 'react', 'tailwind', 'nodejs', 'prisma', 'typescript']
  },
  {
    image: '/images/projects/admin-tkj.webp',
    title: 'Admin TKJ',
    description:
      'Web application for managing student databases at SMK Muhammadiyah 1 Sukoharjo.',
    tech: ['next', 'react', 'tailwind', 'typescript', 'golang', 'postgresql']
  },

  {
    image: '/images/projects/relaxtimee.webp',
    title: 'Relaxtimee Startup',
    description: 'The official website of the startup Relaxtimee.',
    tech: ['nuxt', 'vue', 'tailwind', 'typescript'],
    demoLink: 'https://relaxtimee.com'
  },
  {
    image: '/images/projects/relaxtimee-kasir.webp',
    title: 'Relaxtimee Cashier',
    description: 'Web-based cashier application for startup Relaxtimee.',
    tech: ['vue', 'tailwind', 'typescript', 'golang', 'postgresql']
  },
  {
    image: '/images/projects/vesperr-clone.webp',
    title: 'Vesperr Clone',
    description: 'inspired by a design I found on dribbble.com',
    tech: ['vue', 'tailwind', 'typescript'],
    githubRepo: 'https://github.com/izzul-ali/vesperr-app',
    demoLink: 'http://vesperr-clone.vercel.app/'
  },
  {
    image: '/images/projects/rick&morty.webp',
    title: 'Rick&Morty Characters',
    description:
      'collection of Rick and Morty cartoon characters, taken from the rickandmortyapi.com API.',
    tech: ['react', 'tailwind', 'typescript'],
    githubRepo: 'https://github.com/izzul-ali/characters',
    demoLink: 'https://charactersapp.vercel.app/'
  },
  {
    image: '/images/projects/pokemon-galery.webp',
    title: 'Pokemon Galery',
    description: 'Pokemon character set obtained via the pokeapi.co API.',
    tech: ['svelte', 'tailwind', 'javascript'],
    githubRepo: 'https://github.com/izzul-ali/pokemon-galery',
    demoLink: 'https://pokemon-galery.vercel.app/'
  },
  {
    image: '/images/projects/youtube-ui-clone.webp',
    title: 'Youtube UI Clone',
    description: 'Desktop YouTube clone using React and Tailwind.',
    tech: ['react', 'tailwind', 'typescript'],
    githubRepo: 'https://github.com/izzul-ali/yt-dekstop',
    demoLink: 'https://reactcloneyt.netlify.app/'
  }
]
