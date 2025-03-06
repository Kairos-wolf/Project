import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './pages/Home/Header';
import BannerSlider from './pages/Home/BannerSlider';
import Special from './pages/Home/Special';
import ProductList from './pages/Home/ProductList'
import Footer from './pages/Home/Footer';

function App() {
  return (
    <div>
      <Header />
      <BannerSlider/>
      <Special/>
      <ProductList/>
      <Footer />
    </div>
  );
}

export default App;