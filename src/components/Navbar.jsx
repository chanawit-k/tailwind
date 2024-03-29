import React from 'react'
import { links } from '../data'
const Navbar = () => {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-3xl font-bold">
          Web<span className="text-emerald-600">Dev</span>
        </h2>
        <div className="flex flex-col gap-x-3 sm:flex-row">
          {links.map((link) => {
            const { id, href, text } = link
            return (
              <a
                key={id}
                className="capitalize text-lg tracking-wide hover:text-emerald-300 duration-300"
                href={href}
              >
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
