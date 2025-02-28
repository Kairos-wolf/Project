import React, { useRef, useEffect, useState } from "react";
import "./Footer.css";

const TechNews = () => {
  const [newsItems, setNewsItems] = useState([
    { img: "https://lh3.googleusercontent.com/elShai7vAHXxQbwumg_sQi-t0dyri6-rcNC_KehZmcDMFWlxUWBcvrLS30Jarpre4ZhstFBmi3P29eAvSBBRhjhR7K1Jt3U=w400-rw", title: "Qualcomm ra mắt siêu chip Snapdragon..." },
    { img: "https://lh3.googleusercontent.com/rx45dX2mGoWK1V4INl39CUWBUY9rZntuneQMLqwfMxvandrY0dXxEk5Y0zIOKjdhLOAWO7-UDkXTjb3y9THalwE8s90SKoY=w400-rw", title: "Tổng hợp những mẫu laptop chạy chip..." },
    { img: "https://lh3.googleusercontent.com/R10SLb2OyuCWb01LOb_StPdRumcXnN59w74eds7q3QgFZt_iaBUktyk1IesIP5mBz1ZpD3oj5_J7pN_aUnh994GnQIxqZAGQ=w400-rw", title: "Chuột công thái học là gì? Lợi ích khi sử..." },
    { img: "https://lh3.googleusercontent.com/wld04m0xKoSRjWAj3aT03trcGolKThCpDfItSVridI79EPE7N9hyTpnvQ9lUngap5J3kXE2dko55C63uXNKzjjywUOOqu_kc=w400-rw", title: "Laptop chip ARM Snapdragon Dell..." },
    { img: "https://lh3.googleusercontent.com/JAO33sKkZ8o-y5e4gGCMbGT73kP5SFWY4mZ6tULHDDd71WoRRgPxI4iaBrZA4_gCsMBOIIjgo_D1bEugQ2zBpt4Cql3QaSRC=w400-rw", title: "So sánh hiệu năng chip mới nhất..." }
  ]);

  const sliderRef = useRef(null);
  const [autoSlide, setAutoSlide] = useState(true);

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "transform 0.5s ease-in-out";
      sliderRef.current.style.transform = "translateX(-25%)";
      setTimeout(() => {
        const updatedNews = [...newsItems];
        const firstItem = updatedNews.shift();
        updatedNews.push(firstItem);
        setNewsItems(updatedNews);
        sliderRef.current.style.transition = "none";
        sliderRef.current.style.transform = "translateX(0)";
      }, 500);
    }
  };

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.style.transition = "none";
      const updatedNews = [...newsItems];
      const lastItem = updatedNews.pop();
      updatedNews.unshift(lastItem);
      setNewsItems(updatedNews);
      sliderRef.current.style.transform = "translateX(-25%)";
      setTimeout(() => {
        sliderRef.current.style.transition = "transform 0.5s ease-in-out";
        sliderRef.current.style.transform = "translateX(0)";
      }, 10);
    }
  };

  useEffect(() => {
    if (!autoSlide) return;
    const interval = setInterval(slideRight, 3000);
    return () => clearInterval(interval);
  }, [autoSlide, newsItems]);

  return (
    <div className="tech-news-container">
      <h3 className="news-title">TIN CÔNG NGHỆ</h3>
      <div className="news-wrapper">
        <button className="news-btn left" onClick={slideLeft}>&#10094;</button>
        <div className="news-slider" ref={sliderRef} onMouseEnter={() => setAutoSlide(false)} onMouseLeave={() => setAutoSlide(true)}>
          {newsItems.map((item, index) => (
            <div key={index} className="news-item">
              <img src={item.img} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>
        <button className="news-btn right" onClick={slideRight}>&#10095;</button>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <>
      <TechNews />
      <footer className="bg-dark text-white text-center p-3 mt-4">
        <p>&copy; 2025. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Footer;
