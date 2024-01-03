import React from 'react'

const SkillsCard = ({ title, icon, text }) => {
  return (
    <article>
      {icon}
      <h1 className="text-xl font-bold tracking-wider">{title}</h1>
      <p className="mt-4 text-m text-slate-700 capitalize tracking-wide">
        {text}
      </p>
    </article>
  )
}

export default SkillsCard
