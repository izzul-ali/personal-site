import { FaDiscord, FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

export default function SocialMedia({ contact }: { contact: boolean }) {
  return (
    <div className="flex justify-center gap-x-6 text-gray-600">
      <a href="mailto:izzuldev@gmail.com" target={'_blank'}>
        <MdEmail className="w-8 p-1 h-fit rounded-full bg-white shadow-lg" />
      </a>
      {!contact && (
        <>
          <a href="https://github.com/izzul-ali" target={'_blank'}>
            <FaGithub className="w-8 p-1 h-fit rounded-full bg-white shadow-lg" />
          </a>
          <a href="https://www.linkedin.com/in/izzul-maali" target={'_blank'}>
            <FaLinkedin className="w-8 p-1 h-fit rounded-full bg-white shadow-lg" />
          </a>
        </>
      )}
      <a href="https://t.me/izzul30" target={'_blank'}>
        <FaTelegram className="w-8 p-1 h-fit rounded-full bg-white shadow-lg" />
      </a>
      <a href="https://discordapp.com/users/izzul_#9106" target={'_blank'}>
        <FaDiscord className="w-8 p-1 h-fit rounded-full bg-white shadow-lg" />
      </a>
    </div>
  )
}
