import React from 'react';
import {Poppins} from 'next/font/google'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

import Image from 'next/image';
import naruImg from '../../../public/images/naruto eating snacks.png';
import sasuImg from '../../../public/images/sasuke eating snack.png';
import FoodTypoImg from '../../../public/images/Foods.png';
import DrinkTypoImg from '../../../public/images/Drinks.png';

import Card from '@components/homeMenu-card';

const poppins = Poppins({
  weight: ['200', '400'],
  style: ['normal', 'normal'],
  subsets: ['latin'],
  display: 'swap',
})

const HomeMenu = () => {

    const [emblaRef1] = useEmblaCarousel({ loop: false }, [Autoplay()])
    const [emblaRef2] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <div className="home-menu">
      <div className="home-menu__top">
        <div className="home-menu__top-title">
            <Image src={naruImg} alt="naruto eating snack" />
            <h1 className={poppins.className}>Our Menu</h1>
            <Image src={sasuImg} alt="sasuke eating snack" />
        </div>
        <div className="home-menu__top-content">
            <Image src={FoodTypoImg} alt="Foods" />
            <div className="embla" ref={emblaRef1}>
                <div className="embla__container">
                    <div className="embla__slide">
                      <Card
                        image="/path/to/image.jpg"
                        title="Product Title"
                        price={19.99}
                        rating={4}
                      />
                      <Card
                        image="/path/to/image.jpg"
                        title="Product Title"
                        price={19.99}
                        rating={4}
                      />
                      <Card
                        image="/path/to/image.jpg"
                        title="Product Title"
                        price={19.99}
                        rating={4}
                      />
                    </div>
                    <div className="embla__slide">
                      <Card
                        image="/path/to/image.jpg"
                        title="Product Title"
                        price={19.99}
                        rating={4}
                      />
                      <Card
                        image="/path/to/image.jpg"
                        title="Product Title"
                        price={19.99}
                        rating={4}
                      />
                      <Card
                        image="/path/to/image.jpg"
                        title="Product Title"
                        price={19.99}
                        rating={4}
                      />
                    </div>
                    <div className="embla__slide">
                      <Card
                        image="/path/to/image.jpg"
                        title="Product Title"
                        price={19.99}
                        rating={4}
                      />
                      <Card
                        image="/path/to/image.jpg"
                        title="Product Title"
                        price={19.99}
                        rating={4}
                      />
                      <Card
                        image="/path/to/image.jpg"
                        title="Product Title"
                        price={19.99}
                        rating={4}
                      />
                    </div>
                </div>
            </div>
        </div>
      </div>
        
      <div className="home-menu__bottum">
        <div className="home-menu__bottum-content">
            <Image src={DrinkTypoImg} alt="Drinks" />
            <div className="embla" ref={emblaRef2}>
                <div className="embla__container">
                    <div className="embla__slide"><h1>Slide 2</h1></div>
                    <div className="embla__slide"><h1>Slide 2</h1></div>
                    <div className="embla__slide"><h1>Slide 2</h1></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMenu;