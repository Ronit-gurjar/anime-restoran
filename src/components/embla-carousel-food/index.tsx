import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import ramen1 from "./images/ramen1.jpg"
import ramen2 from "./images/ramen2.jpg"
import ramen3 from "./images/ramen3.jpg"
import burger1 from "./images/burger1.jpg"
import burger2 from "./images/burger2.jpg"
import burger3 from "./images/burger3.jpg"
import indianfood1 from "./images/indianfood1.jpg"
import indianfood2 from "./images/indianfood2.jpg"
import indianfood3 from "./images/indianfood3.jpg"


const Carousel_food = () => {
    const [emblaRef1] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <>
    <div className="embla" ref={emblaRef1}>
        <div className="embla__container">
            <div className="embla__slide">
                <div className="embla__slide-list">
                <div className="card">
                  <Image src={ramen1} alt="text" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"text"</h2>
                  <p className="card__price">$20</p>
                </div>
                <div className="card">
                  <Image src={ramen2} alt="text" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"text"</h2>
                  <p className="card__price">$21</p>
                </div>
                <div className="card">
                  <Image src={ramen3} alt="text" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"text"</h2>
                  <p className="card__price">$19.99</p>
                </div>
            </div>
            </div>
            <div className="embla__slide">
                <div className="embla__slide-list">
                <div className="card">
                  <Image src={burger1} alt="text" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"text"</h2>
                  <p className="card__price">$5</p>
                </div>
                <div className="card">
                  <Image src={burger2} alt="text" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"text"</h2>
                  <p className="card__price">$6</p>
                </div>
                <div className="card">
                  <Image src={burger3} alt="text" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"text"</h2>
                  <p className="card__price">$5</p>
                </div>
            </div>
            </div>
            <div className="embla__slide">
                <div className="embla__slide-list">
                <div className="card">
                  <Image src={indianfood1} alt="text" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"text"</h2>
                  <p className="card__price">$10</p>
                </div>
                <div className="card">
                  <Image src={indianfood2} alt="text" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"text"</h2>
                  <p className="card__price">$10</p>
                </div>
                <div className="card">
                  <Image src={indianfood3} alt="text" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"text"</h2>
                  <p className="card__price">$20</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Carousel_food