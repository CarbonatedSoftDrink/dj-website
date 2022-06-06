import React from "react";
import { Route, Routes, NavLink, HashRouter } from "react-router-dom";

export default function Footer() {
  return (
    <section id="Footer" className="footer">
      <div
        className="footer__container"

      >
        <div className="footer__about-text">
          <h2 className="footer__about-h2">@Fadia Dagher</h2>
          <h3 className="footer__about-h3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue
            dui, tincidunt ut tempus a, volutpat eget mi. Sed ac mattis metus.
            Curabitur non urna ac magna faucibus vulputate quis et dui.
          </h3>
        </div>

        <ul className="socials__list" >
            <li className="socials__list-item"><a href="#" className="socials__link">ICON1<i className="socials__icon"></i></a></li>
            <li className="socials__list-item"><a href="#" className="socials__link">ICON2<i className="socials__icon"></i></a></li>
            <li className="socials__list-item"><a href="#" className="socials__link">ICON3<i className="socials__icon"></i></a></li>
            <li className="socials__list-item"><a href="#" className="socials__link">ICON4<i className="socials__icon"></i></a></li>
            <li className="socials__list-item"><a href="#" className="socials__link">ICON5<i className="socials__icon"></i></a></li>
        </ul>

        <ul className="footer-navigation__list" >
            <li className="footer-navigation__item"><a href="#" className="footer-navigation__link">HOME</a></li>
            <li className="footer-navigation__item"><a href="#" className="footer-navigation__link">SERVICES</a></li>
            <li className="footer-navigation__item"><a href="#" className="footer-navigation__link">MEDIA</a></li>
            <li className="footer-navigation__item"><a href="#" className="footer-navigation__link">CONTACT</a></li>
        </ul>

        <div className="footer__hr" />

        <p className="footer__legal">@Fadia Dagher. All rights reserved.</p>
        
      </div>
    </section>
  );
}