import React, { Component } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";

import Services from './components/Services';
import Media from './components/Media';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Home from './components/Home';

import './App.css';


class App extends Component {
  render() {
    return (
      <>
        <HashRouter>
          <div>
            <h1>FADIA</h1>
            <ul className="header">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/services">Services</NavLink></li>
              <li><NavLink to="/media">Media</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/services" element={<Services />}/>
                <Route path="/media" element={<Media />}/>
                <Route path="/contact" element={<Contact />}/>
              </Routes>
            </div>
          </div>
        </HashRouter>

        <Footer />
      </>
    );
  }
}

export default App;
