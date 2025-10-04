import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   <div
      className="relative w-full h-[400px] flex items-end"
      style={{
        backgroundImage: `url("https://demo.egenslab.com/html/eventlab/assets/images/backgrounds/breadcrumb-bg.png")`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="absolute inset-0 bg-[#2a333b] bg-opacity-90"></div>

      <div className="relative z-10 text-white px-20 pb-12 font-alice">
        <h1 className="text-4xl md:text-5xl font-bold">Event Detail</h1>
        <div className="flex items-center gap-3 text-sm mt-3 text-gray-200">
          <Link to="/" className="hover:text-[#ce1446] transition">
            Home
          </Link>
          <span>|</span>
          <span className="text-[#ce1446]">Event Detail</span>
        </div>
      </div>
    </div>
  )
}

export default Header
