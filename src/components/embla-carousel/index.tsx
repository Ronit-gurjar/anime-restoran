import React from 'react'
import Card from '@components/homeMenu-card';
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

const Carousel = () => {
    const [emblaRef1] = useEmblaCarousel({ loop: false }, [Autoplay()])
    const [emblaRef2] = useEmblaCarousel({ loop: false }, [Autoplay()])

  return (
    <>
    <div className="embla" ref={emblaRef1}>
                <div className="embla__container">
                    <div className="embla__slide">
                      <div className="embla__slide-list">
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
                    <div className="embla__slide">
                      <div className="embla__slide-list">
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
                    <div className="embla__slide">
                      <div className="embla__slide-list">
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
    </>
  )
}

export default Carousel