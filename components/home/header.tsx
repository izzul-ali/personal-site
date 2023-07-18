import { FaGithub } from 'react-icons/fa'

export default function Header() {
  return (
    <header>
      <div className="flex justify-between items-center gap-x-3">
        <h1 className="text-xl font-semibold">
          <span>👋️ </span>
          Izzul Ma'ali
        </h1>
        <div className="flex items-center gap-x-3">
          <a href="https://github.com/izzul-ali" target={'_blank'}>
            <FaGithub className="w-6 h-fit items-center" />
          </a>
        </div>
      </div>
    </header>
  )
}
