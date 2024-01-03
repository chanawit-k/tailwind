import React from 'react'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'
const ProjectsCard = ({ img, url, github, title, text }) => {
  return (
    <article className="border rounded-xl shadow-xl">
      <img src={img} alt="" />
      <h1 className="capitalize text-xl font-bold tracking-wider px-4 mt-4">
        {title}
      </h1>
      <p className="p-4">{text}</p>
      <div className="mt-4 p-4 flex gap-x-4">
        <a href={url}>
          <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-slate-900" />
        </a>
        <a href={github}>
          <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-slate-900" />
        </a>
      </div>
    </article>
  )
}

export default ProjectsCard
