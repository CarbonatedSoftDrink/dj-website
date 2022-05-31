import React from "react";

export default function Footer() {
  return (
    <section id="Footer" style={{ height: "auto", backgroundColor: "#242526" }}>
      <div
        className="footer-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "70rem",
          margin: "0 auto",
          textAlign: "center"
        }}
      >
        <div className="footer-container--text" style={{maxWidth: "50%"}}>
          <h2 style={{ fontSize: "2rem", color: "white" }}>@first last</h2>
          <h3 style={{ fontSize: "1rem", color: "white" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce augue
            dui, tincidunt ut tempus a, volutpat eget mi. Sed ac mattis metus.
            Curabitur non urna ac magna faucibus vulputate quis et dui.
          </h3>
        </div>

        <ul class="footer-socials" style={{listStyle: 'none', display: 'flex', alignItems: 'center', paddingInlineStart: "0px"}}>
            <li><a href="#" style={{textDecoration: 'none', color: 'white', padding: ".5rem"}}>ICON1<i class="fa fa-facebook"></i></a></li>
            <li><a href="#" style={{textDecoration: 'none', color: 'white', padding: ".5rem"}}>ICON2<i class="fa fa-twitter"></i></a></li>
            <li><a href="#" style={{textDecoration: 'none', color: 'white', padding: ".5rem"}}>ICON3<i class="fa fa-google-plus"></i></a></li>
            <li><a href="#" style={{textDecoration: 'none', color: 'white', padding: ".5rem"}}>ICON4<i class="fa fa-youtube"></i></a></li>
            <li><a href="#" style={{textDecoration: 'none', color: 'white', padding: ".5rem"}}>ICON5<i class="fa fa-linkedin-square"></i></a></li>
        </ul>

        <ul className="footer-navigation" style={{listStyle: 'none', display: 'flex', alignItems: 'center', paddingInlineStart: "0px"}}>
            <li ><a href="#" style={{textDecoration: 'none', color: 'white', padding: ".5rem", borderRight: "1px solid white"}}>HOME</a></li>
            <li><a href="#" style={{textDecoration: 'none', color: 'white', padding: ".5rem", borderRight: "1px solid white"}}>SECTION1</a></li>
            <li><a href="#" style={{textDecoration: 'none', color: 'white', padding: ".5rem", borderRight: "1px solid white"}}>SECTION2</a></li>
            <li><a href="#" style={{textDecoration: 'none', color: 'white', padding: ".5rem", borderRight: "1px solid white"}}>SECTION3</a></li>
            <li><a href="#" style={{textDecoration: 'none', color: 'white', padding: ".5rem"}}>SECTION4</a></li>
        </ul>

        <div className="footer-hr" style={{borderBottom: "1px solid grey", width: "90%", paddingBottom: "2rem"}}>

        </div>

        <p style={{color: "grey"}}>@firstname_lastname. All rights reserved.</p>

        



        <p>Footer</p>
      </div>
    </section>
  );
}
