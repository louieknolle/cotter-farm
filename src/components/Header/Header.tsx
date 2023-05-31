import React from 'react'
import logo from './media/logo.png'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex flex-wrap justify-around w-screen h-40 text-white bg-slate-600 md:flex-nowrap md:h-48">
      {/* <!-- LOGO --> */}
      <NavLink to="/" className="h-40 w-auto">
        <img
          className="mx-auto h-full w-auto"
          src={logo}
          alt="Cotter Farm logo"
        />
      </NavLink>
      {/* <!-- MenuButton --> */}
      <button className="z-30 flex items-center justify-end flex-grow pr-3 focus:outline-none md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
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
      <div className="hidden md:flex md:w-3/4">
        <div className="menu flex flex-col bg-slate-500 items-stretch w-screen text-xl text-center transform md:flex-row md:translate-y-0 md:space-x-5 md:items-center md:justify-end md:pr-10 md:bg-slate-600">
          <NavLink
            to="/"
            className="h-10 leading-10 border-b-2 border-dotted md:border-none block"
          >
            About Us
          </NavLink>
          <NavLink
            to="csa"
            className="h-10 leading-10 border-b-2 border-dotted md:border-none block"
          >
            CSA Info
          </NavLink>
          <NavLink
            to="faqs"
            className="h-10 leading-10 border-b-2 border-dotted md:border-none block"
          >
            FAQS
          </NavLink>
          <NavLink
            to="our-pork"
            className="h-10 leading-10 border-b-2 border-dotted md:border-none block"
          >
            Pork
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Header

{
  /* <NavLink
            to="/"
            className="text-gray-800 text-lg font-semibold hover:underline cursor-pointer"
          >
            About Us
          </NavLink>

          <NavLink
            to="csa"
            className="text-gray-800 text-lg font-semibold hover:underline cursor-pointer"
          >
            CSA Info
          </NavLink>
          <NavLink
            to="faqs"
            className="text-gray-800 text-lg font-semibold hover:underline cursor-pointer"
          >
            FAQs
          </NavLink>
          <NavLink
            to="our-pork"
            className="text-gray-800 text-lg font-semibold hover:underline cursor-pointer"
          >
            Our Pork
          </NavLink>
        </div> */
}
