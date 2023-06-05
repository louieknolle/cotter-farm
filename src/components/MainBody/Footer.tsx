import React from 'react'

const Footer = () => {
  return (
    <div className="w-full bg-light-blue text-dark-nav-grey">
      <div className="text-center py-4 flex flex-col md:flex-row items-center justify-evenly">
        <div className="flex flex-col items-center text-center">
          <p className="font-bold text-lg">Cotter Farm CSA</p>
          <p className="text-md">1557 Olive Branch-Stonelick Rd</p>
          <p className="text-md">Batavia, OH 45103</p>
          <a href="tel://5135555555" className="text-md">
            513-555-5555
          </a>
          <a href="#" className="text-md">
            Email Us
          </a>
        </div>
        <div className="flex flex-col items-center text-center text-md">
          <p className="font-bold text-lg">CSA Pickup Hours</p>
          <p className="">Fridays and Saturdays 4:00pm - 7:00pm</p>
          <p className=" ">Follow Us!</p>
          <a href="#" className=" ">
            Facebook
          </a>
          <a href="#" className=" ">
            Instagram
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center"></div>
    </div>
  )
}

export default Footer
