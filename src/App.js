import React from "react";
import Navbar from "./components/Navbar";

import Services from "./components/Services";
import Prices from "./components/Prices";
import Packages from "./components/Packages";
import Media from "./components/Media";
import Suggestions from "./components/Suggestions";
import Checkout from "./components/Checkout";

import './App.css';

export default function App(){
  return(
    <main>
      <Navbar />
      <Services />
      <Prices />
      <Packages />
      <Media />
      <Suggestions />
      <Checkout />
    </main>
  );
}
