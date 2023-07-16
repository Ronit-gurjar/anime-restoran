import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'

interface CardProps {
  image: string;
  title: string;
  price: number;
  rating: number;
}

const Card: React.FC<CardProps> = ({ image, title, price, rating }) => {
  return (
    <div className="card">
      <Image src={image} alt={title} className="card__image" width={300} height={200}/>
      <h2 className="card__title">{title}</h2>
      <p className="card__price">${price}</p>
      <div className="card__rating">
        {Array(rating)
          .fill(null)
          .map((_, index) => (
            <span key={index} className="card__rating-star"></span>
          ))}
      </div>
    </div>
  );
};

const Carousel_food = () => {
    const [emblaRef1] = useEmblaCarousel({ loop: false }, [Autoplay()])

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

export default Carousel_food