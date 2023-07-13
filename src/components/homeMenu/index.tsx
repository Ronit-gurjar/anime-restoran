import React from 'react';
import {Poppins} from 'next/font/google'

const poppins = Poppins({
  weight: ['200', '400'],
  style: ['normal', 'normal'],
  subsets: ['latin'],
  display: 'swap',
})

const HomeMenu = () => {
  return (
    <div className="home-menu">
      <div className="home-menu__top">
        <div className="home-menu__top-title"><h1 className={poppins.className}>Our Menu</h1></div>
      </div>
        
      <div className="home-menu__bottum"></div>
    </div>
  );
};

export default HomeMenu;