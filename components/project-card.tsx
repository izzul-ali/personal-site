import { AiOutlineGlobal } from 'react-icons/ai'
import { FaGithub, FaYoutube } from 'react-icons/fa'
import GenerateIcon from '@/components/generate-icon'

export interface Project {
  image: string
  title: string
  description: string
  tech: string[]
  githubRepo?: string
  demoLink?: string
  youtubeVideo?: string
}

export default function ProjectCard({
  image,
  title,
  description,
  tech,
  githubRepo,
  demoLink,
  youtubeVideo
}: Project) {
  return (
    <div className="relative rounded overflow-hidden shadow-md hover:shadow-lg shadow-gray-300 bg-gradient-to-r from-cyan-400/20 to-indigo-400/20 hover:from-cyan-400/30 hover:to-indigo-400/30 duration-300 hover:scale-105">
      <img
        src={image}
        alt={title}
        loading="lazy"
        className="w-full h-48 sm:h-56 object-cover"
      />

      <div className="px-3 py-4 mt-3">
        <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
        <p className="text-sm tracking-wide mt-3 text-gray-600">
          {description}
        </p>

        <div className="flex gap-x-2 items-center mt-5">
          {tech.map((v) => GenerateIcon(v))}
        </div>

        <div className="flex items-center gap-x-3 mt-7">
          {youtubeVideo && (
            <a
              href={youtubeVideo}
              target={'_blank'}
              className="inline-flex items-center gap-x-1 w-fit px-1 hover:underline"
            >
              <FaYoutube />
              Youtube
            </a>
          )}
          {githubRepo && (
            <a
              href={githubRepo}
              target={'_blank'}
              className="inline-flex items-center gap-x-1 w-fit px-1 hover:underline"
            >
              <FaGithub />
              code
            </a>
          )}
          {demoLink && (
            <a
              href={demoLink}
              target={'_blank'}
              className="inline-flex gap-x-1 items-center w-fit px-1 hover:underline"
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
