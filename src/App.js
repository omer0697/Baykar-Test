import React from 'react';
import Hero from './Components/Hero';
import ProductCards from './Components/ProductCards';
import JoinUs from './Components/JoinUs';
import Slider from './Components/Slider';
import Collection from './Components/Collection';
import ShoeMap from './Components/ShoeMap';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <ProductCards />
      <JoinUs />
      <Slider />
      <Collection />
      <Footer />
    </div>
  );
}

export default App;
