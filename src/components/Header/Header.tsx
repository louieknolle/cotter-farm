import React from 'react'
import logo from './media/logo.png'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className="flex justify-between py-2 w-3/4 m-auto">
      <div className="flex items-center w-1/4">
        <img
          className="mx-auto h-24 w-auto"
          src={logo}
          alt="Cotter Farm logo"
        />
        <h3 className="text-2xl font-bold text-gray-800">Cotter Farm</h3>
      </div>
      <div className="flex flex-col justify-between w-1/2">
        <div className="contact flex justify-evenly">
          <p className="text-gray-800 text-md font-semibold">📞 513-555-5555</p>
          <p className="text-gray-800 text-md font-semibold">
            ✉️ farm_email@email.com
          </p>
        </div>
        <div className="links flex justify-between ">
          <NavLink
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
        </div>
      </div>
    </div>
  )
}

export default Header
