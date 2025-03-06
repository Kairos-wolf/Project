import React, { useState } from "react";
import "./Special.css";

const products = [
  {
    id: 1,
    name: "Màn hình ACER EK271 G 27 inch",
    specs: "1920x1080/IPS/120Hz/1ms",
    price: "2.590.000 đ",
    oldPrice: "2.790.000 đ",
    discount: "200.000 đ",
    image: "https://lh3.googleusercontent.com/JVHlcyv6teyMGUaakcr7T6AXgz1T8VRAZpGmb2Am8m5sbkNHra5J6SgVRNA3uLcpYDG60b2-3ZfIdf6Rdm0mwhf3yhvVPtQI=w230-rw",
  },
  {
    id: 2,
    name: "Màn hình Dell E2423HN 23.8 inch",
    specs: "1920x1080/VA/60Hz/5ms",
    price: "2.690.000 đ",
    oldPrice: "3.590.000 đ",
    discount: "900.000 đ",
    image: "https://lh3.googleusercontent.com/JVHlcyv6teyMGUaakcr7T6AXgz1T8VRAZpGmb2Am8m5sbkNHra5J6SgVRNA3uLcpYDG60b2-3ZfIdf6Rdm0mwhf3yhvVPtQI=w230-rw",
  },
  {
    id: 3,
    name: "Màn hình Viewsonic VA2732-H 27 inch",
    specs: "1920x1080/IPS/100Hz/1ms",
    price: "2.490.000 đ",
    oldPrice: "2.850.000 đ",
    discount: "360.000 đ",
    image: "https://lh3.googleusercontent.com/JVHlcyv6teyMGUaakcr7T6AXgz1T8VRAZpGmb2Am8m5sbkNHra5J6SgVRNA3uLcpYDG60b2-3ZfIdf6Rdm0mwhf3yhvVPtQI=w230-rw",
  },
  {
    id: 4,
    name: "Màn hình Samsung 27\" LS27C310EAEXXV",
    specs: "1920x1080/IPS/75Hz/5 GTG",
    price: "2.690.000 đ",
    oldPrice: "3.189.000 đ",
    discount: "499.000 đ",
    image: "https://lh3.googleusercontent.com/JVHlcyv6teyMGUaakcr7T6AXgz1T8VRAZpGmb2Am8m5sbkNHra5J6SgVRNA3uLcpYDG60b2-3ZfIdf6Rdm0mwhf3yhvVPtQI=w230-rw",
  },
];

const FlashSale = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handleNext = () => {
    if (startIndex + 1 < products.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <div className="container py-5 position-relative">
      <h2 className="text-center text-white bg-danger py-3 rounded">
        Flash Sale Online
      </h2>
      <div className="d-flex align-items-center justify-content-center position-relative">
        <button className="slider-btn left" onClick={handlePrev}>
          &#10094;
        </button>
        <div className="row flex-nowrap overflow-hidden w-100 slider-container">
          {products.slice(startIndex, startIndex + 4).map((product) => (
            <div className="col-md-3 flex-shrink-0 text-center" key={product.id}>
              <div className="card shadow-sm p-3 mb-4 bg-white rounded">
                <a href={"#"} target="_parent" rel="noopener noreferrer">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                </a>
                <div className="card-body">
                  <h5 className="card-title font-weight-bold">{product.name}</h5>
                  <p className="text-muted">{product.specs}</p>
                  <p className="text-danger font-weight-bold">{product.price}</p>
                  <p className="text-secondary text-decoration-line-through">
                    {product.oldPrice}
                  </p>
                  <button className="custom-btn mt-2">Thêm vào giỏ</button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button className="slider-btn right" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default FlashSale;
