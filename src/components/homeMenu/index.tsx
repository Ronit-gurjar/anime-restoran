import React from 'react';
import {Poppins} from 'next/font/google'
import Image from 'next/image';
import naruImg from '../../../public/images/naruto eating snacks.png';
import sasuImg from '../../../public/images/sasuke eating snack.png';
import FoodTypoImg from '../../../public/images/Foods.png';
import DrinkTypoImg from '../../../public/images/Drinks.png';

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
        <div className="home-menu__top-title">
            <Image src={naruImg} alt="naruto eating snack" />
            <h1 className={poppins.className}>Our Menu</h1>
            <Image src={sasuImg} alt="sasuke eating snack" />
        </div>
        <Image src={FoodTypoImg} alt="Foods" />
      </div>
        
      <div className="home-menu__bottum">
        <Image src={DrinkTypoImg} alt="Drinks" />
      </div>
    </div>
  );
};

export default HomeMenu;