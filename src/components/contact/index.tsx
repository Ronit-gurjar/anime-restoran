import React from 'react'
import Image from 'next/image'
import title from "./images/OUR LOCATION.png"
import anime from "./images/totoro.png"

const Contact = () => {
  return (
    <>
        <div className='contact'>
            <div className="contact__top">
                <Image src={title} alt='location' width={300} height={70}/>
            </div>
            <div className="contact__bottom">
                <div className="contact__bottom_left">
                    <div className="contact__b_l_top"></div>
                    <div className="contact__b_l_bottom"></div>
                </div>
                <div className="contact__bottom_right"></div>
            </div>
        </div>
    </>
  )
}

export default Contact