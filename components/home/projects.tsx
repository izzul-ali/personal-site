import ProjectCard from '@/components/project-card'
import { projectList } from '@/data/projects'
import { useState } from 'react'

const defaultRows = 3

export default function projects() {
  const [projectRows, setProjectRows] = useState<number>(defaultRows)

  return (
    <>
      <h2 className="text-3xl font-bold mb-6">Projects</h2>

      <div className="flex flex-col gap-y-8">
        {projectList.slice(0, projectRows).map((v) => (
          <ProjectCard
            key={v.title}
            image={v.image}
            title={v.title}
            description={v.description}
            tech={v.tech}
            githubRepo={v.githubRepo}
            demoLink={v.demoLink}
          />
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={() => setProjectRows((prev) => prev + defaultRows)}
          className={`underline underline-offset-2 text-cyan-500 ${
            projectRows > projectList.length ? 'hidden' : 'block'
          }`}
        >
          see more
        </button>
      </div>
    </>
  )
}
