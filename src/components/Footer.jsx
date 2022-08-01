import React from "react";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";


export default function Footer() {
  return (
    <section id="Footer" className="footer">
      <div
        className="footer__container"

      >
        <div className="footer__about-text">
          <h2 className="footer__about-h2">@DJ_FADIA</h2>
          <h3 className="footer__about-h3">
            Providing DJ services since 2016.
          </h3>
        </div>

        <ul className="socials__list" >
            <li className="socials__list-item"><a href="#/" className="socials__link"><i className="socials__icon"><FaInstagram /></i></a></li>
            {/* <li className="socials__list-item"><a href="#/" className="socials__link"><i className="socials__icon"><FaFacebook /></i></a></li> */}
            {/* <li className="socials__list-item"><a href="#/" className="socials__link"><i className="socials__icon"><FaTwitter /></i></a></li> */}

        </ul>

        <ul className="footer-navigation__list" >
            <li className="footer-navigation__item"><a href="/#home" className="footer-navigation__link">HOME</a></li>
            <li className="footer-navigation__item"><a href="/#services" className="footer-navigation__link">SERVICES</a></li>
            <li className="footer-navigation__item"><a href="/#prices" className="footer-navigation__link">PRICES + PACKAGES</a></li>
            <li className="footer-navigation__item"><a href="/#media" className="footer-navigation__link">MEDIA</a></li>
            <li className="footer-navigation__item"><a href="/#suggest" className="footer-navigation__link">SONG SUGGESTION</a></li>
            <li className="footer-navigation__item"><a href="/#contact" className="footer-navigation__link">CONTACT</a></li>
        </ul>

        <div className="footer__hr" />

        <p className="footer__legal">© 2022 djfadia.com</p>

      </div>
    </section>
  );
}
