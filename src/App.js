import React, { Component } from "react";

import Footer from "./components/Footer";
import Home from "./components/Home";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Media from "./components/Media";
import Suggestions from "./components/SongSubmission";

import "./App.scss";

class App extends Component {
  render() {
    return (
      <>
        <Home />
        <Services />
        <Media />
        <Suggestions />
        <Contact />
        <Footer />
      </>
    );
  }
}

export default App;
