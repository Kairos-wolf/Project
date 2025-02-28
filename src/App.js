import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import BannerSlider from './BannerSlider';
import Special from './components/Special';
import ProductList from './components/ProductList'
import Footer from './components/Footer';

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