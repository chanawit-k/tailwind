import React from 'react'
import { skills } from '../data'
import SectionTitle from './SectionTitle'
import SkillsCard from './SkillsCard'

const Skills = () => {
  return (
    <div className="py-20 align-element">
      <SectionTitle title={'Tech Stack'} />
      <div className=" py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill) => {
          return <SkillsCard key={skill.id} {...skill} />
        })}
      </div>
    </div>
  )
}

export default Skills
