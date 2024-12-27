import React from 'react';
import Header from './components/header';
import Hero from './components/hero';

import PopularDestinations from './components/populardestination';
import Packages from './components/package';
import Gallery from './components/gallery';
import Footer from './components/footer';


function App() {
  return (
    <div>
      <Header />
      <Hero />     
      <PopularDestinations />
      <Packages />
      <Gallery />      
      <Footer />
    </div>
  );
}

export default App;