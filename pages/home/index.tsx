import React from 'react';

const Home = () => {
  return (
    <div className="home">
      <div className="home__top">
        <h1>Welcome to our website!</h1>
      </div>
      <div className="home__bottom">
        <div className="home__image">
          <img src="/image1.jpg" alt="Image 1" />
        </div>
        <div className="home__image">
          <img src="/image2.jpg" alt="Image 2" />
        </div>
        <div className="home__image">
          <img src="/image3.jpg" alt="Image 3" />
        </div>
      </div>
    </div>
  );
};

export default Home;
