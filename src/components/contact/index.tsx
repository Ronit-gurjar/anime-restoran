import React from 'react'
import {Poppins} from 'next/font/google'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image'
import title from "./images/OUR LOCATION.png"
import anime from "./images/totoro.png"

const poppins = Poppins({
    weight: ['200', '400'],
    style: ['normal', 'normal'],
    subsets: ['latin'],
    display: 'swap',
  })

const Contact = () => {
  return (
    <>
        <div className='contact'>
            <div className="contact__top">
                <Image src={title} alt='location' width={300} height={70}/>
            </div>
            <div className="contact__bottom">
                <div className="contact__bottom_left">
                    <div className="contact__b_l_top">
                    <h1 className={poppins.className}><i className="fas fa-location-dot"></i>Restaurant Address</h1>
                    <h2 className={poppins.className}>Anime restaurant, freeganj, Ujjain 456001</h2>
                    <p className={poppins.className}>
                        "We believe that fun and food can be brought together.We would love to serve you HOT"
                    </p>
                    </div>
                    <div className="contact__b_l_bottom">
                        <div className="c__b__l__b__image">
                        <Image src={anime} alt='totoro' width={300} height={350}/>
                        </div>
                        <div className="c__b__l__b__contact">
                            <div className="c__b__l__b__c__socials">
                            <a href="#">
                                <i className="fa-brands fa-instagram fa-lg"></i>
                            </a>
                            <a href="#">
                                <i id="social2" className="fa-brands fa-youtube fa-lg" ></i>
                            </a>
                            </div>
                            <div className="c__b__l__b__c__mail">
                                <a href='#'>
                                    <h3 className={poppins.className}>animerestoran@gmail.com</h3>
                                </a>
                            </div>
                            <div className="c__b__l__b__c__number">
                                <h3 className={poppins.className}>+91 xxxxx-xxxxx</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact__bottom_right">
                <iframe width="500" height="500" src="https://maps.google.com/maps?width=500&amp;height=500&amp;hl=en&amp;q=1%20Ujjain,%20Madhya%20Pradesh,%20India+(Anime%20restaurant)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contact