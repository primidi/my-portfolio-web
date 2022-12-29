import React from 'react'
import { useState } from 'react';
import navLogo from '../../assets/nav-logo.svg'

const Navbar = () => {
  const navigations = [
    {
      text: 'About',
      path: '#about'
    },
    {
      text: 'Projects',
      path: '#projects'
    },
    {
      text: 'Contacts',
      path: '#contacts'
    },
  ];

  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu((prevState) => !prevState);
  };

  return (
    <header className="sticky top-0 z-10"> 
      <nav className="bg-brand-blue-500 drop-shadow-md px-4 py-4 flex justify-between items-center md:px-9 md:py-6">
        <a href="#home">
          <img className="h-5" src={navLogo} alt="Primidi Logo" />
        </a>
        <button
          type="button"
          onClick={handleToggleMenu}
          className="p-2 border-2 border-brand-red rounded self-center md:hidden"
        >
          { toggleMenu ? '❌' : '🍔' }
        </button>
        <ul className="hidden md:flex md:justify-between md:self-center md:gap-16">
          { navigations.map((navigation, index) => (
            <li key={index}>
              <a
                className="hover:text-brand-red hover:underline hover:underline-offset-8 active:text-brand-red focus:text-brand-red focus:underline focus:underline-offset-8 transition duration-500"
                href={navigation.path}
              >
                { navigation.text }
              </a>
            </li>
          )) }
        </ul>
      </nav>
      {
        toggleMenu && (
          <div className="fixed w-full md:w-auto md:hidden">
            <ul className="flex flex-col p-4 rounded-lg bg-brand-blue-50">
              {
                navigations.map((navigation, index) => (
                  <li key={index}>
                    <a
                      className="block py-2 pl-3 pr-4 text-brand-white rounded hover:bg-brand-red"
                      href={navigation.path}
                    >
                      { navigation.text }
                    </a>
                  </li>
                ))
              }
            </ul>
          </div>
        )
      }
    </header>
  );
};

export default Navbar;
