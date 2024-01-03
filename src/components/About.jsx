import React from 'react'
import SectionTitle from './SectionTitle'
import aboutSvg from '../assets/about.svg'
const About = () => {
  return (
    <div className="py-20 align-element">
      <div className=" py-16 grid md:grid-cols-2 gap-8">
        <article>
          <img src={aboutSvg} className="w-full h-64" />
        </article>
        <article>
          <SectionTitle title={'Code And Coffee'} />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro
            omnis exercitationem tempora, aliquid deleniti tenetur vero esse
            praesentium eaque dicta fugiat? Molestiae expedita, nulla neque
            error porro sint distinctio possimus!
          </p>
        </article>
      </div>
    </div>
  )
}

export default About
