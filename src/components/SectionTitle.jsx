import React from 'react'

const SectionTitle = ({ title }) => {
  return (
    <div className="border-b-2 border-blue-50 pb-5">
      <h2 className="text-3xl font-medium tracking-wider capitalize">
        {title}
      </h2>
      <span className="underline underline-offset-1"></span>
    </div>
  )
}

export default SectionTitle
