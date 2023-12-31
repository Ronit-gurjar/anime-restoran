import React from 'react';
import {Poppins} from 'next/font/google'
import Carousel_food from '@components/embla-carousel-food';
import Carousel_drink from '@components/embla-carousel-drink';

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
    <div className="home-menu" id='menu'>
      <div className="home-menu__top">
        <div className="home-menu__top-title">
            <Image src={naruImg} alt="naruto eating snack" />
            <h1 className={poppins.className}>Our Menu</h1>
            <Image src={sasuImg} alt="sasuke eating snack" />
        </div>
        <div className="home-menu__top-content">
            <Image src={FoodTypoImg} alt="Foods" />
            <Carousel_food/>
        </div>
      </div>
        
      <div className="home-menu__bottum">
        <div className="home-menu__bottum-content">
            <Image src={DrinkTypoImg} alt="Drinks" />
            <Carousel_drink/>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;