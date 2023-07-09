import React from 'react'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';
import logoImage from '../../../public/images/logo.png';
import {Poppins} from 'next/font/google'

const poppins = Poppins({
    weight: ['200', '400'],
    style: ['normal', 'normal'],
    subsets: ['latin'],
    display: 'swap',
  })

const Navbar = () => {
  return (
    <>
     <nav className="navbar">
      <div className="navbar__left">
        <a href="#" className={poppins.className}>Home</a>
        <a href="#" className={poppins.className}>Our Menu</a>
      </div>
      <div className="navbar__logo">
        <Image src={logoImage} alt="Logo" placeholder='blur'/>
      </div>
      <div className="navbar__right">
        <button>
          <i id="icon-cart" className="fas fa-shopping-cart fa-2x" ></i>
        </button>
        <button>
          <i id="icon-user" className="fas fa-user-circle fa-2x"></i>
        </button>
      </div>
    </nav>
    </>
  )
}

export default Navbar