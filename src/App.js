import React, { Component } from "react";

import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import Media from './components/Media';
import Suggestions from './components/SongSubmission';

import './App.scss';


class App extends Component {
  render() {
    return (
      <>
        <Home />
        <Media />
        <Suggestions />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
