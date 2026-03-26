import React from 'react';
import './App.css';

import Navbar          from './components/Navbar';
import Hero            from './components/Hero';
import About           from './components/About';
import Rooms           from './components/Rooms';
import Services        from './components/Services';
import Advantages      from './components/Advantages';
import Reviews         from './components/Reviews';
import Contact         from './components/Contact';
import Footer          from './components/Footer';
import WhatsAppButton  from './components/WhatsAppButton';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Services />
        <Advantages />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default App;
