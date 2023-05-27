import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto md:flex justify-between py-2 max-width">
      <nav className={` ${!isOpen ? "hidden" : null} text-center md:flex justify-between`}>
        <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5 md:mr-10">
          <li className="pb-1 md:pb-0">
            <NavLink to="/" onClick={toggleClass}>
              Home
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/tentang" onClick={toggleClass}>
              Tentang
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/teknologi" onClick={toggleClass}>
              Teknologi
            </NavLink>
          </li>
          <li className="pb-1 md:pb-0">
            <NavLink to="/proyek" onClick={toggleClass}>
              Proyek
            </NavLink>
          </li>
          <li>
            <NavLink to="/kontak" onClick={toggleClass}>
              Kontak
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
