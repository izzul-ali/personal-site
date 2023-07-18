import { useState } from 'react'
import SocialMedia from '@/components/social-media'

export default function AboutContact() {
  const [selected, setSelected] = useState<string>('about')

  return (
    <div className="mt-14 mb-24 flex flex-col w-full items-center justify-center overflow-x-hidden">
      <div className="w-40 h-40 bg-[url(/images/me.webp)] bg-cover bg-center shadow-md rounded-full"></div>

      <div className="flex gap-x-1 justify-center w-full text-base sm:text-lg items-center mt-5 font-semibold">
        <h2
          onClick={() => setSelected('about')}
          className={`px-3 cursor-pointer transition duration-300 border-b-2 border-[#b3daff]  ${
            selected === 'about'
              ? 'border-opacity-100 text-gray-700'
              : 'border-opacity-0 text-gray-500'
          }`}
        >
          About
        </h2>
        <h2
          onClick={() => setSelected('contact')}
          className={`px-3 cursor-pointer transition duration-300 border-b-2 border-[#b3daff] ${
            selected === 'contact'
              ? 'border-opacity-100 text-gray-700'
              : 'border-opacity-0 text-gray-500'
          }`}
        >
          Contact
        </h2>
      </div>

      <div className="mt-6 relative text-center items-start text-sm sm:text-base pb-10">
        <p
          className={`leading-normal transition duration-500 tracking-wide text-gray-900 ${
            selected === 'about' ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          Hello, I'm Izzul Ma'ali, a Web Developer focused on creating
          interactive experiences on the web. I'm very interested in creating
          new projects and working with various web tools like React, Next,
          Tailwind, NodeJs, and TypeScript.
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
          <SocialMedia contact />
        </div>
      </div>
    </div>
  )
}
