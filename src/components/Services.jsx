import React from "react";
import { useEffect, useState } from "react";

import { client } from "../client";
import { FaFileImage } from "react-icons/fa";
import DynamicIcon from "./DynamicIcon";
import Prices from "./Prices";

export default function Services() {
  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const servicesQuery = '*[_type == "services"]';
    const packagesQuery = '*[_type == "packages"]';

    const fetchServicesData = async () => {
      try {
        const data = await client.fetch(servicesQuery);
        setServices(data);
      } catch (err) {
        console.log(err);
      }
    };

    const fetchPackagesData = async () => {
      try {
        const data = await client.fetch(packagesQuery);
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
          <div class="container-fluid">
            <h1>Services</h1>
            <div class="row justify-content-center">
              {services?.map((service, index) => (
                <div class="service-item card col-lg-4 col-md-6" key={index}>
                  <i className="services-img">
                    <DynamicIcon
                      iconData={service.icon ? service.icon : null}
                    />
                  </i>
                  <h3 id="service-title">{service.service}</h3>
                  <p id="service-description">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Prices />

      <section id="Packages">
        <div class="container packages">
          <h1>Packages/Deals</h1>
          <div class="row">
            {packages?.map((item, index) => (
              <div class="col-lg-4 package">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h5 class="card-title text-muted text-uppercase text-center">
                      {item.package}
                    </h5>
                    <h6 class="card-price text-center">$</h6>
                    <hr></hr>

                    <ul className="">
                      {item.features?.map((packageItem, index) => (
                        <li>
                          <span class="">
                            <i class=""></i>
                          </span>
                          {packageItem}
                        </li>
                      ))}
                    </ul>

                    <div class="d-grid">
                      <a href="#" class="btn btn-primary text-uppercase">
                        Button
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
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
