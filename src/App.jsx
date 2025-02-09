import React from 'react';
import Header from './components/header/header';
import Hero from './components/Hero/hero';

import PopularDestinations from './components/populardestination/populardestination';
import Packages from './components/Package/package';
import Gallery from './components/Gallery/gallery';
import Footer from './components/Footer/footer';

import  FaQ  from './components/faq/FAQ';



function App() {
  return (
    <div>
      <Header />
      <Hero />      
      <PopularDestinations />
      <Packages />
       
      <Gallery />
      <FaQ/>      
      <Footer />
    </div>
  );
}

export default App;