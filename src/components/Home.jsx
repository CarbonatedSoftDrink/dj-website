import React, { Component } from "react";

class Home extends Component {
    render() {
        return (
            <header id="home">

                <nav id="nav-wrap">

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li className="current"><a className="smoothscroll" href="#home">Home   </a></li>
                        <li><a className="smoothscroll" href="#services">Services   </a></li>
                        <li><a classname="smooothscroll" href="#prices">Prices + Packages</a></li>
                        <li><a className="smoothscroll" href="#media">Media </a></li>
                        <li><a className="smoothscroll" href="#suggest">Song Suggestion </a></li>
                        <li><a className="smoothscroll" href="#contact">Contact Us</a></li>
                    </ul>
                </nav>

                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">DJ FADIA</h1>
                    </div>
                </div>

                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>

            </header>
        );
    }
}

export default Home;