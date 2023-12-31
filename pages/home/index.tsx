import React from 'react';
import Navbar from "@components/navbar";
import HomeMenu from '@components/homeMenu';
import Footer from "@components/footer";
import Image from 'next/image';
import HeroRamen from '../../public/images/hero-ramen.png'
import HeroStanding1 from '../../public/images/luffy-standing.png'
import HeroStanding2 from '../../public/images/naruto-standing.png'
import Contact from '@components/contact';


const Home = () => {
  return (
    <>
    <Navbar />
    <div className="home" id='home'>
        <div className="home__top">
            <h1>INDIA’s 1st ANIME THEMED FAMILY RESTAURANT</h1>
        </div>
        <div className="home__bottom">
            <div className="home__image__left">
                <Image src={HeroStanding1} alt="hero-image luffy standing" />
            </div>
            <div className="home__image__main">
                <Image src={HeroRamen} alt="Ramen" />
            </div>
            <div className="home__image__right">
                <Image src={HeroStanding2} alt="hero-image naruto standing" />
            </div>
        </div>
    </div>
    <HomeMenu/> 
    <Contact/>
    <Footer/>
    </>
  );
};

export default Home;
