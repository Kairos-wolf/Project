import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Home/Header";
import BannerSlider from "./pages/Home/BannerSlider";
import Special from "./pages/Home/Special";
import ProductList from "./pages/Home/ProductList";
import Footer from "./pages/Home/Footer";
import FlashSale from "./pages/FlashSale/FlashSale"; // Import FlashSale
import ProductDetail from "./pages/Detail/ProductDetail"; // Import trang chi tiết sản phẩm
import Auth from "./pages/Auth/Auth"; // Import trang đăng nhập và đăng ký

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<>
          <BannerSlider />
          <Special />
          <ProductList />
        </>} />
        <Route path="/flash-sale" element={<FlashSale />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
