import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggle = () => {
    setMenuOpen(!menuOpen);
  };
  const navItems = [
    { path: "/about", link: "About" },
    { path: "/collection", link: "Collection" },
    { path: "/artist", link: "Artist" },
    { path: "/library", link: "Library" },
    { path: "/questions", link: "Questions" },
  ];
  return (
    <header className="bg-[#f3f1ec] fixed top-0 left-0 right-0">
      <nav className="px-5 py-4  mx-auto flex justify-between items-center border-b-2 border-black">
        <Link to="/">
          <a href="/" className="text-xl font-bold">
            Artisans.
          </a>
        </Link>

        {/*NavItems for large devices*/}
        <ul className="font-bold text-xl font-serif md:flex gap-12 text-large hidden">
          {navItems.map(({ path, link }) => (
            <li className="" key={path}>
              <NavLink to={path}>{link}</NavLink>
            </li>
          ))}
        </ul>

        <div className="lg:flex gap-4 items-center hidden">
          <button className="bg-black text-[#f3f1ec] px-6 py-2 font-medium rounded hover:bg-[#f3f1ec] hover:border hover:border-black hover:text-black transition-all duration-200 ease-in">
            Log in
          </button>
        </div>

        {/* Menu Items*/}
        <div className="md:hidden">
          <button onClick={toggle} className="cursor-pointer">
            {menuOpen ? (
              <FaXmark className="w-5 h-5" />
            ) : (
              <FaBars className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>
      {/*menu items*/}
      <div>
        <ul
          className={`md:hidden gap-12 text-large flex flex-col justify-center items-center text-bold space-y-4 px-4 py-6 mt-14 bg-black text-white h-full ${
            menuOpen
              ? "fixed top-0 left-0 w-full trenasition-all ease-out duration-150"
              : "hidden"
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li className="" key={path}>
              <NavLink onClick={toggle} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
