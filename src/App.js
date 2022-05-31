import React, { Component } from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";

import Home from './pages/Home';
import Services from './pages/Services';
import Media from './pages/Media';
import Suggestions from './pages/Suggestions';
import Contact from './pages/Contact';
 
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <h1>FADIA</h1>
          <ul className="header">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/services">Services</NavLink></li>
            <li><NavLink to="/media">Media</NavLink></li>
            <li><NavLink to="/add-songs">Suggestions</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/services" element={<Services />}/>
              <Route path="/media" element={<Media />}/>
              <Route path="/add-songs" element={<Suggestions />}/>
              <Route path="/contact" element={<Contact />}/>
            </Routes>
          </div>
        </div>
      </HashRouter>
    );
  }
}
 
export default App;