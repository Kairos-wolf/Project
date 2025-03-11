import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Header";
import BannerSlider from "./BannerSlider";
import Special from "./Special";
import ProductList from "./ProductList";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <BannerSlider />
      <Special />
      <ProductList />
      <Footer />
    </div>
  );
}
