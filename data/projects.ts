import { Project } from '@/components/project-card'

export const projectList: Project[] = [
  {
    image: '/images/projects/admin-tkj.webp',
    title: 'Admin TKJ',
    description:
      'Web application for managing student databases at SMK Muhammadiyah 1 Sukoharjo.',
    tech: ['next', 'react', 'tailwind', 'typescript', 'golang', 'postgresql']
  },
  {
    image: '/images/projects/e-commerce.webp',
    title: 'E-Commerce',
    description: 'simple ecommerce website built with next.js and zustand',
    tech: ['next', 'react', 'tailwind', 'typescript'],
    demoLink: 'https://e-commerce-izzul-ali.vercel.app/',
    githubRepo: 'https://github.com/izzul-ali/e-commerce'
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
    image: '/images/projects/lumera-clone.webp',
    title: 'Lumera Clone',
    description: 'inspired by a design I found on dribbble.com',
    tech: ['vue', 'tailwind', 'typescript'],
    githubRepo: 'https://github.com/izzul-ali/lumera',
    demoLink: 'https://lumera.netlify.app/'
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
