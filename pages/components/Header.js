import Link from "next/link";
import React, { useState } from "react";

function Header() {
  const [navbar, setNavbar] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div
      className={`bg-white border-b border-gray-300 overflow-hidden transition-all duration-500 ease-in-out z-50 ${
        showSearch ? "max-h-[500px] py-6" : "max-h-[100px]"
      }`}
    >
      {/* Navbar */}
      <nav className="w-full px-4 mx-auto md:px-8">
        <div className="flex justify-between items-center h-[80px]  mx-auto">
          {/* Logo */}
          <Link href="/">
            <img
              src="/images/Logo.png"
              alt="Logo"
              style={{ width: "100%", maxWidth: "164px" }}
            />
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex gap-8 font-semibold text-[15px]">
            <li><Link href="#">Services</Link></li>
            <li><Link href="#">Industries</Link></li>
            <li><Link href="#">Clients</Link></li>
            <li><Link href="#">About us</Link></li>
            <li><Link href="#">Blog</Link></li>
          </ul>

          {/* Right Side Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <div className="flex items-center gap-2">
              <img src="/navbar_image/Group.png" alt="Lang" className="w-6 h-6" />
              <span className="text-sm font-semibold text-gray-600">ENG</span>
            </div>

            <Link
              href="#"
              className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-lg font-medium rounded-full hover:bg-gray-800 transition"
            >
              Contact us
              <svg className="w-5 h-5 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16" fill="none">
                <line x1="2" y1="8" x2="20" y2="8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                <polyline points="16,4 20,8 16,12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>

            <button
              onClick={() => setShowSearch(!showSearch)}
              className="w-12 h-12 bg-gray-200 rounded-[20px] flex items-center justify-center hover:bg-gray-300 transition"
            >
              {showSearch ? (
                <svg className="w-6 h-6 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setNavbar(!navbar)}
              className="p-2 rounded-md focus:outline-none"
            >
              {navbar ? (
                <svg className="w-6 h-6" viewBox="0 0 20 20" fill="black">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="black" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {navbar && (
          <div className="md:hidden mt-4">
            <ul className="flex flex-col items-center space-y-4">
              <li><Link href="#">Services</Link></li>
              <li><Link href="#">Industries</Link></li>
              <li><Link href="#">Clients</Link></li>
              <li><Link href="#">About us</Link></li>
              <li><Link href="#">Blog</Link></li>
            </ul>
            <div className="mt-4 flex justify-center gap-4">
              <Link href="#" className="text-sm text-gray-600">ENG</Link>
              <Link
                href="#"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white text-lg font-medium rounded-full hover:bg-gray-800 transition"
              >
                Contact us →
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Search Bar */}
      {showSearch && (
        <div className="px-4 md:px-8 mt-4">
          <div className=" mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="w-full">
              <label htmlFor="search" className="text-sm text-gray-400 block mb-1">
                Search request
              </label>
              <input
                id="search"
                type="text"
                placeholder="What are you looking for?"
                className="w-full border-b border-gray-300 bg-transparent text-lg outline-none py-2 placeholder:text-gray-500"
              />
            </div>
            <button className="mt-3 md:mt-0 px-6 py-3 bg-gray-900 text-white text-lg rounded-full flex items-center gap-2 hover:bg-gray-800 transition">
              Search
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;



//  <div>
//     <header className="container Nav-items flex justify-between items-center h-[100px] ">
//       <div className="logo">
//         <img
//           src="/images/Logo.png"
//           alt="Logo"
//           style={{ width: "100%", maxWidth: "164px" }}
//         />
//       </div>

//       <div className="space-x-6 text-[15px] pr-44 font-semibold">
//         <Link href="">Services</Link>
//         <Link href="">Industries</Link>
//         <Link href="">Clients</Link>
//         <Link href="">About us</Link>
//         <Link href="">Blog</Link>
//       </div>

//       <div className="space-x-2">
//         <button>
//           <img
//             src="/images/Language.png"
//             alt="Language"
//             style={{ width: "100%", maxWidth: "72px" }}
//           />
//         </button>
//         <button>
//           <img
//             src="/images/Contact.png"
//             alt="Contact"
//             style={{ width: "100%", maxWidth: "143px" }}
//           />
//         </button>
//         <button>
//           <img
//             src="/images/Search.png"
//             alt="Search"
//             style={{ width: "100%", maxWidth: "72px" }}
//           />
//         </button>
//       </div>
//     </header>
//   </div>
