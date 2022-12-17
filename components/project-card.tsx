import { AiOutlineGlobal } from 'react-icons/ai'
import { FaGithub } from 'react-icons/fa'
import GenerateIcon from '@/components/generate-icon'

export type Project = {
  image: string
  title: string
  description: string
  tech: Array<string>
  githubRepo?: string
  demoLink?: string
}

export default function ProjectCard({
  image,
  title,
  description,
  tech,
  githubRepo,
  demoLink
}: Project) {
  return (
    <div className="relative rounded overflow-hidden shadow-md hover:shadow-lg bg-gradient-to-r from-cyan-400/20 to-indigo-400/20 hover:from-cyan-400/30 hover:to-indigo-400/30 duration-300 hover:scale-105">
      <img src={image} alt={title} width={'100%'} height={52} />
      <div className="px-3 py-4 mt-3">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-base tracking-wide mt-3 text-gray-600">
          {description}
        </p>

        <div className="flex gap-x-2 items-center mt-5">
          {tech.map((v) => GenerateIcon(v))}
        </div>

        <div className="flex items-center gap-x-3 mt-7">
          {githubRepo && (
            <a
              href={githubRepo}
              target={'_blank'}
              className="inline-flex items-center gap-x-1 w-fit px-1"
            >
              <FaGithub />
              code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target={'_blank'}
              className="inline-flex gap-x-1 items-center w-fit px-1"
            >
              <AiOutlineGlobal />
              visit
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
