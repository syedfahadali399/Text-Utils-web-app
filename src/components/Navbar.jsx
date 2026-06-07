import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar({title, mode, toggleMode}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className={`w-full z-20 top-0 start-0`} style={{background:mode.color, color:mode.background}}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          className="flex items-center max-sm:mb-2 space-x-3 rtl:space-x-reverse"
        >
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className={`self-center text-xl sm:text-2xl font-semibold whitespace-nowrap`}>
            {title}
          </span> 
        </Link>
        <div className="flex items-center max-sm:w-full max-sm:justify-between md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <label className="inline-flex items-center cursor-pointer mr-2 md:mr-0">
            <input type="checkbox" checked={mode.background === "black"} onChange={toggleMode} className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span className="ms-2 text-sm font-medium">
              {mode.text}
            </span>
          </label>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"}`}
          id="navbar-sticky"
        >
          <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:border-gray-700`} style={{background: isMenuOpen && window.innerWidth < 768 ? mode.color : "transparent"}}>
            <li>
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 rounded-sm hover:text-blue-700 md:hover:bg-transparent md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 px-3 rounded-sm hover:text-blue-700 md:hover:bg-transparent md:p-0"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar