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
    <div className="flex flex-wrap justify-around w-screen h-40 text-white bg-nav-grey md:h-48 bg-opacity-80">
      {/* <!-- LOGO --> */}
      <NavLink to="/" className="h-40 w-auto self-center">
        <img
          className="mx-auto h-full w-auto"
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
          stroke="white"
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
        <div className="menu pt-4 border-b-golden-yellow border-b-8 md:border-none flex flex-col bg-opacity-80  bg-nav-grey w-full text-2xl text-center text-white-white transition-transform md:flex-row md:translate-y-0 md:space-x-5 md:items-center md:justify-end md:pr-10">
          <NavLink
            onClick={handleClick}
            to="/"
            className="h-10 leading-10 md:border-none block"
          >
            About Us
          </NavLink>
          <NavLink
            onClick={handleClick}
            to="/"
            className="h-10 leading-10 md:border-none block"
          >
            Contact
          </NavLink>
          <NavLink
            onClick={handleClick}
            to="csa"
            className="h-10 leading-10 md:border-none block"
          >
            CSA Info
          </NavLink>
          <NavLink
            onClick={handleClick}
            to="faqs"
            className="h-10 leading-10 md:border-none block"
          >
            F.A.Q.s
          </NavLink>
          <NavLink
            onClick={handleClick}
            to="our-pork"
            className="h-10 leading-10 md:border-none block"
          >
            Pork
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header
