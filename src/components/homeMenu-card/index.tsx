import React from 'react'
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

export default Card;
