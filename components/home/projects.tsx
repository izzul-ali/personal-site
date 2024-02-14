import ProjectCard from '@/components/project-card'
import { projectList } from '@/data/projects'
import { useState } from 'react'

const defaultRows = 4

export default function projects() {
  const [projectRows, setProjectRows] = useState<number>(defaultRows)

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mb-6 border-b-2 w-fit border-[#b3daff] ">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-4">
        {projectList.slice(0, projectRows).map((v) => (
          <ProjectCard
            key={v.title}
            image={v.image}
            title={v.title}
            description={v.description}
            tech={v.tech}
            youtubeVideo={v.youtubeVideo}
            githubRepo={v.githubRepo}
            demoLink={v.demoLink}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12 [&>button]:outline-none text-gray-700 text-sm">
        {projectRows < projectList.length ? (
          <button
            onClick={() => setProjectRows((prev) => prev + defaultRows)}
            className={`bg-gradient-to-r from-cyan-400/30 to-indigo-400/30 px-4 py-[3px] rounded hover:scale-105 duration-200`}
          >
            see more
          </button>
        ) : (
          <button
            onClick={() => setProjectRows(defaultRows)}
            className={`bg-gradient-to-r from-cyan-400/30 to-indigo-400/30 px-4 py-[3px] rounded hover:scale-105 duration-200`}
          >
            show less
          </button>
        )}
      </div>
    </>
  )
}
