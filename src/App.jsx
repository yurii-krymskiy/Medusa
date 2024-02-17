import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // зміна BrowseRouter на BrowserRouter
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import About from './components/About/About';
import Gallery from './components/Gallery/Gallery';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import HeaderMobile from './components/HeaderMobile/HeaderMobile';

import './assets/SCSS/App.scss'
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <HeaderMobile />
                <About />
                <Footer />
              </div>
            }
          />
          <Route
            path="/about"
            element={
              <div>
                <Header />
                <HeaderMobile />
                <About />
                <Footer />
              </div>
            }
          />
          <Route
            path="/menu"
            element={
              <div>
                <Header />
                <HeaderMobile />
                <Menu />
                <Footer />
              </div>
            }
          />
          <Route
            path="/gallery"
            element={
              <div>
                <Header />
                <HeaderMobile />
                <Gallery />
                <Footer />
              </div>
            }
          />
          <Route
            path="/contact"
            element={
              <div>
                <Header />
                <HeaderMobile />
                <Contact />
                <Footer />
              </div>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
