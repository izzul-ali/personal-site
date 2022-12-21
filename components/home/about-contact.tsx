import { useState } from 'react'
import SocialMedia from '@/components/social-media'

export default function AboutContact() {
  const [selected, setSelected] = useState<string>('about')

  return (
    <div className="mt-14 mb-24 flex flex-col w-full items-center justify-center overflow-x-hidden">
      <div className="w-40 h-40 bg-[url(/images/me.webp)] bg-cover bg-center shadow-md rounded-full"></div>

      <div className="flex gap-x-1 justify-center w-full text-lg items-center mt-5 font-medium">
        <h2
          onClick={() => setSelected('about')}
          className={`px-3 cursor-pointer transition duration-300 border-b-2 border-[#b3daff]  ${
            selected === 'about'
              ? 'border-opacity-100'
              : 'border-opacity-0 text-gray-600'
          }`}
        >
          About
        </h2>
        <h2
          onClick={() => setSelected('contact')}
          className={`px-3 cursor-pointer transition duration-300 border-b-2 border-[#b3daff] ${
            selected === 'contact'
              ? 'border-opacity-100'
              : 'border-opacity-0 text-gray-600'
          }`}
        >
          Contact
        </h2>
      </div>
      <div className="mt-6 relative text-center items-start text-lg pb-10">
        <p
          className={`leading-normal transition duration-500 tracking-wide ${
            selected === 'about' ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          Hello<span>👋️</span>, my name is Izzul Maali. I am 17 years old. The
          first time I learned a back-end programming language, I used{' '}
          <a href="https://go.dev/" target={'_blank'} className="underline">
            Golang
          </a>
          , but now I focus on the front-end, mostly using{' '}
          <a
            href="https://reactjs.org/"
            target={'_blank'}
            className="underline"
          >
            React.js
          </a>{' '}
          and{' '}
          <a href="https://nextjs.org/" target={'_blank'} className="underline">
            Next.js
          </a>
          .
        </p>

        <div
          className={`transition duration-500 absolute top-0 right-0 left-0 z-10 ${
            selected === 'contact' ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <p className="mb-7">
            For anything you want to ask, please contact me via the contact
            below, I will answer with pleasure
            <span>🙌️</span>
          </p>
          <SocialMedia />
        </div>
      </div>
    </div>
  )
}
