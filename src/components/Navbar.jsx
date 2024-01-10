import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../layouts/Button";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import logo from '../assets/img/logo.jpg';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    console.log('Vraj');
    setMenu(false);
  };

  const location = useLocation();

  const handleHomeLink = () => {
    if (location.pathname === '/') {
      return (
        <ScrollLink
          className='hover:text-brightColor transition-all cursor-pointer'
          onClick={closeMenu}
          to='home'
          smooth={true}
          duration={500}
        >
          Home
        </ScrollLink>
      );
    } else {
      return (
        <Link
          onClick={closeMenu}
          className='hover:text-brightColor transition-all cursor-pointer'
          to='/'
        >
          Home
        </Link>
      );
    }
  };

  const handleAboutLink = () => {
    if (location.pathname === '/') {
      return (
        <ScrollLink
          className='hover:text-brightColor transition-all cursor-pointer'
          onClick={closeMenu}
          to='about'
          smooth={true}
          duration={500}
        >
          About
        </ScrollLink>
      );
    } else {
      return (
        <Link
          onClick={closeMenu}
          className='hover:text-brightColor transition-all cursor-pointer'
          to='/'
        >
          About
        </Link>
      );
    }
  };

  const handleTermsLink = () => {
    if (location.pathname === '/') {
      return (
        <ScrollLink
          className='hover:text-brightColor transition-all cursor-pointer'
          onClick={closeMenu}
          to='TermsAndConditions'
          smooth={true}
          duration={500}
        >
          Terms And Conditions
        </ScrollLink>
      );
    } else {
      return (
        <Link
          onClick={closeMenu}
          className='hover:text-brightColor transition-all cursor-pointer'
          to='/'
        >
          Terms And Conditions
        </Link>
      );
    }
  };

  const handleDishesLink = () => {
    if (location.pathname === '/') {
      return (
        <ScrollLink
          className='hover:text-brightColor transition-all cursor-pointer'
          onClick={closeMenu}
          to='dishes'
          smooth={true}
          duration={500}
        >
          Our Products
        </ScrollLink>
      );
    } else {
      return (
        <Link
          onClick={closeMenu}
          className='hover:text-brightColor transition-all cursor-pointer'
          to='/'
        >
          Our Products
        </Link>
      );
    }
  };

  useEffect(() => {
    handleAboutLink();
    handleDishesLink();
    handleHomeLink();
    handleTermsLink();
  }, [location.pathname]);

  const handleBuyClick = () => {
    window.open("https://wa.me/message/SISUP46GKRC6H1", "_blank");
  };

  return (
    <div className='fixed w-full'>
      <div>
        <div className=' flex flex-row justify-between p-5 md:px-32 lg:px-5 md:px-2 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
          <div className=' flex flex-row items-center cursor-pointer'>
            <span>
              <img src={logo} alt='Logo' className='h-9 w-29' />
            </span>
            <h1 className=' text-xl ml-4 font-semibold'>Cluster Globals</h1>
          </div>

          <nav className='hidden md:flex flex-row items-center text-lg font-medium gap-8'>
            <div>{handleHomeLink()}</div>

            <div className='relative group'>
              <div className='flex items-center gap-1'>
                <ScrollLink
                  className='hover:text-brightColor transition-all cursor-pointer'
                  to='dishes'
                  smooth={true}
                  duration={500}
                >
                  Our Products
                </ScrollLink>

                <BiChevronDown className='cursor-pointer' size={25} />
              </div>

              <ul className='absolute hidden group-hover:block bg-white border border-gray-300 w-[252px] rounded-lg p-5 '>
                {/* ... (rest of the code) */}
              </ul>
            </div>

            <div>{handleAboutLink()}</div>
            <div>{handleTermsLink()}</div>

            <Button title='Buy' onClick={handleBuyClick} />
          </nav>

          <div className='md:hidden flex items-center'>
            {menu ? (
              <AiOutlineClose size={25} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={25} onClick={handleChange} />
            )}
          </div>
        </div>

        <div
          className={` ${
            menu ? 'translate-x-0' : '-translate-x-full'
          } lg:hidden flex flex-col z-2 h-screen absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
        >
          {/* ... (rest of the code) */}
          <Button title='Login' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
