import React, { useEffect } from 'react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { FaWhatsapp, FaLinkedin } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const NavLink = ({ to, text, isScrollLink }) => {
  const ScrollComponent = isScrollLink ? ScrollLink : Link;

  return (
    <ScrollComponent
      className='hover:text-brightColor transition-all cursor-pointer'
      to={to}
      smooth={true}
      duration={500}
    >
      {text}
    </ScrollComponent>
  );
};

const Footer = () => {
  const location = useLocation();

  useEffect(() => {
    // Your code here
  }, [location.pathname]);

  const links = [
    { to: 'home', text: 'Home', isScrollLink: true },
    { to: 'dishes', text: 'Our Products', isScrollLink: true },
    { to: 'about', text: 'About', isScrollLink: true },
    { to: 'TermsAndConditions', text: 'Terms & Conditions', isScrollLink: true },
  ];

  return (
    <div className='flex flex-col bg-black text-white h-[260px] rounded-t-3xl md:mt-0'>
      <div className='flex flex-col justify-between lg:flex-row lg:pb-12 md:px-16 px-5'>
        <div className='flex flex-row w-full lg:mt-8 justify-between md:mt-8'>
          <div className='w-full mt-6 md:mt-3 lg:mt-2 hidden sm:block'>
            <h1 className='font-semibold text-xl pb-4 ml-3'>Cluster Globals</h1>
            <p className='text-sm'>Welcome to Cluster Globals</p>
            <p className='text-sm'> – Your Freshness Source!.</p>
          </div>
          <div className='w-full'>
            <h1 className='font-medium text-xl pt-5 md:pt-0'>Links</h1>
            <nav className='flex flex-col mt-3 gap-1'>
              {links.map((link, index) => (
                <div key={index}>
                  <NavLink {...link} />
                </div>
              ))}
            </nav>
          </div>
          <div>
            <h1 className='font-medium text-xl pt-5 md:pt-0'>Contact Us</h1>
            <nav className='flex flex-col mt-3 gap-1'>
              <ScrollLink
                className='hover:text-brightColor transition-all cursor-pointer'
                to='contact'
                smooth={true}
                duration={500}
              >
                info@clusterglobals.com
              </ScrollLink>
              <ScrollLink
                className='hover:text-brightColor transition-all cursor-pointer'
                to='contact'
                smooth={true}
                duration={500}
              >
                +91 93288 46954
              </ScrollLink>
            </nav>
            <div className='flex gap-4 pt-2 pt-4'>
              <a
                className='hover:text-brightColor transition-all cursor-pointer'
                href='https://www.instagram.com/clusterglobals'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsInstagram size={24} />
              </a>
              <a
                className='hover:text-brightColor transition-all cursor-pointer'
                href='https://wa.me/message/BV54IILSKBQDB1'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                className='hover:text-brightColor transition-all cursor-pointer'
                href='https://www.linkedin.com/company/clusterglobals/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <FaLinkedin size={24} />
              </a>
              <a
                className='hover:text-brightColor transition-all cursor-pointer'
                href='https://www.facebook.com/profile.php?id=61551872733020&mibextid=ZbWKwL'
                target='_blank'
                rel='noopener noreferrer'
              >
                <BsFacebook size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='lg:-mt-8 '>
        <p className='text-center mt-8 lg:mt-4'>
          Cluster Globals | Developed by
          <span className='text-brightColor'> CryptoMinds Developer</span> | All rights reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
