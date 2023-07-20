import React, { useState, useEffect }  from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';
import logoImage from '../../../public/images/logo.png';
import {Poppins} from 'next/font/google'
import Sidebar from '@components/sidebar';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const poppins = Poppins({
    weight: ['200', '400'],
    style: ['normal', 'normal'],
    subsets: ['latin'],
    display: 'swap',
  })

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setIsScrolledDown(scrollPosition > window.innerHeight);
  }, [scrollPosition]);

  return (
    <>
     <nav className={`navbar ${isScrolledDown ? 'scrolled' : ''}`}>
      <div className="navbar__left">
        <a href="#home" className={poppins.className}>Home</a>
        <a href="#menu" className={poppins.className}>Our Menu</a>
      </div>
      <div className={`navbar__logo ${isScrolledDown ? 'navbar__logo--small' : ''}`}>
        <Image src={logoImage} alt="Logo" placeholder='blur'/>
      </div>
      <div className="navbar__right">
        <a href="#contact" className={poppins.className}>Contact</a>
        <button className='User' onClick={toggleSidebar}>
          <i id="icon-user" className="fas fa-user-circle fa-2x"></i>
        </button>
      </div>
      {isSidebarOpen && <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
    </nav>
    </>
  )
}

export default Navbar