import { useState } from 'react'
import SocialMedia from '@/components/social-media'

export default function AboutContact() {
  const [selected, setSelected] = useState<string>('about')

  return (
    <div className="mt-14 mb-24 flex flex-col md:flex-row w-full items-center justify-center overflow-x-hidden">
      <div className="md:mr-10">
        <div className="w-40 h-40 flex-shrink bg-[url(/images/logo.webp)] bg-cover bg-center shadow-md rounded-full"></div>
      </div>

      <div className="flex-1 overflow-hidden">
        <div className="flex gap-x-1 w-full justify-center items-center mt-5 font-semibold">
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

        <div className="mt-6 relative text-center items-start text-sm pb-10">
          <p
            className={`leading-normal transition duration-500 tracking-wide text-gray-900 ${
              selected === 'about' ? 'translate-x-0' : '-translate-x-full'
            }`}
          >
            Hello, I'm Izzul, a Software Developer who has the ability to create
            websites and mobile applications as well as backend services. I use
            ReactJS for websites, Flutter/React-Native to create applications,
            and NodeJS and NestJS for the backend, followed by other supporting
            technologies.
          </p>

          <div
            className={`transition duration-500 absolute top-0 right-0 left-0 z-10 ${
              selected === 'contact' ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <p className="mb-7">
              If you are interested in collaborating, don't hesitate to contact
              me via the contact below
              <span> 🙌️</span>
            </p>
            <SocialMedia contact />
          </div>
        </div>
      </div>
    </div>
  )
}
