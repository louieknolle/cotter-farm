import React, { useState } from 'react'
import logo from './media/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  const [isMenuHidden, setMenuHidden] = useState(true)

  const handleClick = () => {
    if (window.innerWidth < 768) {
      setMenuHidden(!isMenuHidden)
    }
  }

  return (
    <div className="flex flex-wrap justify-around w-screen h-24 md:h-36  text-dark-nav-grey font-bold bg-blue-grey ">
      {/* <!-- LOGO --> */}
      <NavLink to="/" className="h-full w-auto self-center">
        <img
          className="mx-auto h-24 md:h-36 w-auto"
          src={logo}
          alt="Cotter Farm logo"
        />
      </NavLink>
      {/* <!-- MenuButton --> */}
      <button
        onClick={handleClick}
        className="z-30 flex items-center justify-end flex-grow pr-10 focus:outline-none md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#1f2937"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* <!-- Menu --> */}
      <div
        className={`navlink-container ${
          isMenuHidden ? 'hidden' : ''
        } md:flex w-full md:w-3/4 `}
      >
        <div className="menu border-b-light-orange border-b-8 border-t-light-orange border-t-2 md:border-none flex flex-col   bg-blue-grey w-full text-2xl text-center transition-transform md:flex-row md:translate-y-0 md:space-x-5 md:items-center md:justify-end md:pr-10">
          <NavLink
            onClick={handleClick}
            to="/"
            className="h-10 leading-10 md:border-none block hover:underline hover:decoration-light-orange"
          >
            About Us
          </NavLink>
          <NavLink
            onClick={handleClick}
            to="csa"
            className="h-10 leading-10 md:border-none block hover:underline hover:decoration-light-orange"
          >
            CSA Info
          </NavLink>
          <NavLink
            onClick={handleClick}
            to="faqs"
            className="h-10 leading-10 md:border-none block hover:underline hover:decoration-light-orange"
          >
            F.A.Q.s
          </NavLink>
          <NavLink
            onClick={handleClick}
            to="our-pork"
            className="h-10 leading-10 md:border-none block hover:underline hover:decoration-light-orange"
          >
            Pork
          </NavLink>
          <NavLink
            onClick={handleClick}
            to="/"
            className="h-10 leading-10 md:border-none block hover:underline hover:decoration-light-orange"
          >
            Get in Touch
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
