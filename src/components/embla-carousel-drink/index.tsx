import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import drink1 from "./images/drink1.jpg";
import drink2 from "./images/drink2.jpg"



const Carousel_drink = () => {
    const [emblaRef1] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <>
    <div className="embla" ref={emblaRef1}>
        <div className="embla__container">
            <div className="embla__slide">
                <div className="embla__slide-list">
                <div className="card">
                  <Image src={drink1} alt="sweet lemon tea" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"sweet lemon tea"</h2>
                  <p className="card__price">$5</p>
                </div>
                <div className="card">
                  <Image src={drink2} alt="latte coffee" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"latte coffee"</h2>
                  <p className="card__price">$21</p>
                </div>
            </div>
            </div>
            <div className="embla__slide">
                <div className="embla__slide-list">
                <div className="card">
                  <Image src={drink1} alt="sweet lemon tea" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"sweet lemon tea"</h2>
                  <p className="card__price">$5</p>
                </div>
                <div className="card">
                  <Image src={drink2} alt="latte coffee" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"latte coffee"</h2>
                  <p className="card__price">$21</p>
                </div>
            </div>
            </div>
            <div className="embla__slide">
                <div className="embla__slide-list">
                <div className="card">
                  <Image src={drink1} alt="sweet lemon tea" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"sweet lemon tea"</h2>
                  <p className="card__price">$5</p>
                </div>
                <div className="card">
                  <Image src={drink2} alt="latte coffee" className="card__image" width={200} height={200}/>
                  <h2 className="card__title">"latte coffee"</h2>
                  <p className="card__price">$21</p>
                </div>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Carousel_drink