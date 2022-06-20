import React from "react";
import { FaFileImage } from "react-icons/fa";

export default function Services(){
    return (
        <body>
            <section id="services">
                <div class="container">
                <h1>Services</h1>
                <div class="row justify-content-center">
                    <div class="service-item col-lg-4 col-md-6" >
                        <i className="services-img"><FaFileImage /></i>
                        <h3>DJ Services</h3>
                        <p>We travel anywhere!</p>
                    </div>
                    <div class="service-item col-lg-4 col-md-6" >
                        <i className="services-img"><FaFileImage /></i>
                        <h3>Wireless Microphones</h3>
                        <p>Lorem ipsum</p>
                    </div>
                    <div class="service-item col-lg-4 col-md-6" >
                        <i className="services-img"><FaFileImage /></i>
                        <h3>DJ/Speaker Rentals</h3>
                        <p>Lorem ipsum</p>
                    </div>
                    <div class="service-item col-lg-4 col-md-6" >
                        <i className="services-img"><FaFileImage /></i>
                        <h3>Dry Ice</h3>
                        <p>Lorem ipsum</p>
                    </div>
                    <div class="service-item col-lg-4 col-md-6" >
                        <i className="services-img"><FaFileImage /></i>
                        <h3>Fireworks</h3>
                        <p>Cold Sparklers</p>
                    </div>
                    <div class="service-item col-lg-4 col-md-6" >
                        <i className="services-img"><FaFileImage /></i>
                        <h3>Lighting</h3>
                        <p>Lorem ipsum</p>
                    </div>
                    <div class="service-item col-lg-4 col-md-6" >
                        <i className="services-img"><FaFileImage /></i>
                        <h3>Custom Bogos</h3>
                        <p>Lorem ipsum</p>
                    </div>
                </div>
                </div>
            </section>

            <section id="Prices">
                <h2>Prices</h2>
                <p>DJ Only: $400.00 -  $750.00 * May vary by location</p>
                <p>Fireworks: $200.0+ * Value depends on how many fireworks (2,4,6,8)</p>
                <p>Dry Ice: $150.00</p>
                <p>Bogo Custom: $100.00</p>
                <p>Rental Speakers $250
                    <p>*Small System</p>
                    <p>*Large System</p>
                </p>
            </section>

            <section id="Packages">
                <h2>Packages/Deals</h2>
                <p>Dry Ice & 4 Fireworks: $600</p>
                <p>Dry Ice & DJ: $600</p>
                <p>DJ Package 1: DJ, Dry Ice, 4 Fireworks, and Lights on Dance Floor: $1,250</p>
                <p>DJ Package 2: DJ, 2 Fireworks and Dry Ice with Lights on Dance Floor: $900</p>
                <p>You get two free fireworks with DJ Package 1 Deal! Save around $200</p>
            </section>
        </body>
    )
}
