// src/BannerSlider.js
import React, { useEffect, useState } from 'react';
import './BannerSlider.css';

const BannerSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [
    { id: 1, image: 'https://hoanghamobile.com/tin-tuc/wp-content/uploads/2024/05/anh-viet-nam.jpg', title: 'Banner 1' },
    { id: 2, image: 'https://media.istockphoto.com/id/1425103315/vi/anh/ng%C6%B0%E1%BB%9Di-ph%E1%BB%A5-n%E1%BB%AF-ch%C3%A2u-%C3%A1-m%E1%BA%B7c-v%C4%83n-h%C3%B3a-vi%E1%BB%87t-nam-truy%E1%BB%81n-th%E1%BB%91ng-t%E1%BA%A1i-tam-c%E1%BB%91c-vi%E1%BB%87t-nam.jpg?s=612x612&w=0&k=20&c=xZDKlDmMiYEv7r5z0KNgMYfEe19Ozr7s1JXc040TR0Y=', title: 'Banner 2' },
    { id: 3, image: 'https://images2.thanhnien.vn/528068263637045248/2024/1/25/e093e9cfc9027d6a142358d24d2ee350-65a11ac2af785880-17061562929701875684912.jpg', title: 'Banner 3' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [banners.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
  };

  return (
    <div className="banner-slider">
      
      {banners.map((banner, index) => (
        <div
          key={banner.id}
          className={`banner ${index === currentIndex ? 'active' : ''}`}
          style={{ backgroundImage: `url(${banner.image})` }}
        >
          <h3>{banner.title}</h3>
        </div>
      ))}
      <div className="indicators">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>

      <button className="prev-button" onClick={prevSlide}>&#10094;</button>
      <button className="next-button" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default BannerSlider;
