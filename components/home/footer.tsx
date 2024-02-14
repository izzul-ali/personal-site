import SocialMedia from '@/components/social-media'

export default function Footer() {
  return (
    <footer className="bg-transparent text-xs text-gray-600 border-t border-gray-300 mt-16 pt-3 leading-normal tracking-wide">
      <SocialMedia contact={false} />
      <p className="mt-7">©️ 2024 Izzul. All rights reserved.</p>
      <p>Built with Next.js and Tailwindcss.</p>
      <p>
        All code for this website is available on{' '}
        <a href="https://github.com/izzul-ali" className="underline">
          github
        </a>
        .
      </p>
    </footer>
  )
}
