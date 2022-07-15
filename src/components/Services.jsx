import React from "react";
import { useEffect, useState } from "react";

import { client } from "../client";
import { FaFileImage } from "react-icons/fa";

export default function Services() {
  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const servicesQuery = '*[_type == "services"]';
    const packagesQuery = '*[_type == "packages"]';

    const fetchServicesData = async () => {
      try {
        const data = client.fetch(servicesQuery);
        setServices(data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchPackagesData = async () => {
      try {
        const data = client.fetch(packagesQuery);
        setPackages(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchServicesData();
    fetchPackagesData();
  }, []);

  return (
    <body>
      <section id="services">
        <div class="container">
          <h1>Services</h1>
          <div class="row justify-content-center">
            {services?.map((service, index) => (
              <div class="service-item col-lg-4 col-md-6">
                <i className="services-img">
                  <FaFileImage />
                </i>
                <h3>{service.service}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*<section id="Prices">
        <h2>Prices</h2>
        <p>DJ Only: $400.00 - $750.00 * May vary by location</p>
        <p>
          Fireworks: $200.0+ * Value depends on how many fireworks (2,4,6,8)
        </p>
        <p>Dry Ice: $150.00</p>
        <p>Bogo Custom: $100.00</p>
        <p>
          Rental Speakers $250
          <p>*Small System</p>
          <p>*Large System</p>
        </p>
            </section>*/}

      <section id="Packages">
        <div class="container packages">
          <h1>Packages/Deals</h1>
          <div class="row">
            {/*Package 1*/}
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">
                    DJ Package 1
                  </h5>
                  <h6 class="card-price text-center">$</h6>
                  <hr></hr>
                  <ul class="">
                    <li>
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 1
                    </li>
                    <li>
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 2
                    </li>
                    <li>
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 3
                    </li>
                    <li>
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 4
                    </li>
                    <li class="text-muted">
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 5
                    </li>
                    <li class="text-muted">
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 6
                    </li>
                    <li class="text-muted">
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 7
                    </li>
                    <li class="text-muted">
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 8
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="#" class="btn btn-primary text-uppercase">
                      Button
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*Package 2*/}
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">
                    DJ Package 2
                  </h5>
                  <h6 class="card-price text-center">$</h6>
                  <hr></hr>
                  <ul class="">
                    <li>
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 1
                    </li>
                    <li>
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 2
                    </li>
                    <li>
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 3
                    </li>
                    <li>
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 4
                    </li>
                    <li class="">
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 5
                    </li>
                    <li class="">
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 6
                    </li>
                    <li class="text-muted">
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 7
                    </li>
                    <li class="text-muted">
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 8
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="#" class="btn btn-primary text-uppercase">
                      Button
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*Package 3*/}
            <div class="col-lg-4">
              <div class="card mb-5 mb-lg-0">
                <div class="card-body">
                  <h5 class="card-title text-muted text-uppercase text-center">
                    DJ Package 3
                  </h5>
                  <h6 class="card-price text-center">$</h6>
                  <hr></hr>
                  <ul class="">
                    <li>
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 1
                    </li>
                    <li>
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 2
                    </li>
                    <li>
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 3
                    </li>
                    <li>
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 4
                    </li>
                    <li class="">
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 5
                    </li>
                    <li class="">
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 6
                    </li>
                    <li class="">
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 7
                    </li>
                    <li class="">
                      <span class="">
                        <i class=""></i>
                      </span>
                      Service Item 8
                    </li>
                  </ul>
                  <div class="d-grid">
                    <a href="#" class="btn btn-primary text-uppercase">
                      Button
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<br></br>
        <br></br>
        <p>Package/Deal Notes from Client:</p>
        <p>Dry Ice & 4 Fireworks: $600</p>
        <p>Dry Ice & DJ: $600</p>
        <p>
          DJ Package 1: DJ, Dry Ice, 4 Fireworks, and Lights on Dance Floor:
          $1,250
        </p>
        <p>
          DJ Package 2: DJ, 2 Fireworks and Dry Ice with Lights on Dance Floor:
          $900
        </p>
        <p>
          You get two free fireworks with DJ Package 1 Deal! Save around $200
        </p>*/}
      </section>
    </body>
  );
}
