import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import HeaderMobile from './components/HeaderMobile/HeaderMobile';

import './assets/SCSS/App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <HeaderMobile />
        <Routes>
          <Route>
            <Route path="./" element={<About />} />
            <Route path="/about" element={<About to="/" replace />} />

            <Route path="/menu" element={<Menu />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
