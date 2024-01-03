import ProjectsCard from './ProjectsCard'
import { projects } from '../data'
import SectionTitle from './SectionTitle'

const Projects = () => {
  return (
    <div className="py-20 align-element">
      <SectionTitle title={'Web Creations'} />
      <div className=" py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          return <ProjectsCard key={project.id} {...project} />
        })}
      </div>
    </div>
  )
}

export default Projects
