import React, { useEffect, useState, useRef } from "react";
import { client } from "../client";
import { FaFileImage } from "react-icons/fa";
import Prices from "./Prices";
export default function Services() {
  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);
  
  const modal = useRef(null);

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
        <div className="container">
          <h1>Services</h1>
          <div className="row justify-content-center">
            {services?.map((service, index) => (
              <div className="service-item col-lg-4 col-md-6">
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

<Prices />

      <section id="Packages">
        <div className="container packages">
          <h1>Packages/Deals</h1>
          <div className="row">
            {/*Package 1*/}
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    DJ Package 1
                  </h5>
                  <h6 className="card-price text-center">$</h6>
                  <hr></hr>
                  <ul className="">
                    <li>
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 1
                    </li>
                    <li>
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 2
                    </li>
                    <li>
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 3
                    </li>
                    <li>
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 4
                    </li>
                    <li className="text-muted">
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 5
                    </li>
                    <li className="text-muted">
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 6
                    </li>
                    <li className="text-muted">
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 7
                    </li>
                    <li className="text-muted">
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 8
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">
                      Button
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*Package 2*/}
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    DJ Package 2
                  </h5>
                  <h6 className="card-price text-center">$</h6>
                  <hr></hr>
                  <ul className="">
                    <li>
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 1
                    </li>
                    <li>
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 2
                    </li>
                    <li>
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 3
                    </li>
                    <li>
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 4
                    </li>
                    <li className="">
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 5
                    </li>
                    <li className="">
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 6
                    </li>
                    <li className="text-muted">
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 7
                    </li>
                    <li className="text-muted">
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 8
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">
                      Button
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/*Package 3*/}
            <div className="col-lg-4">
              <div className="card mb-5 mb-lg-0">
                <div className="card-body">
                  <h5 className="card-title text-muted text-uppercase text-center">
                    DJ Package 3
                  </h5>
                  <h6 className="card-price text-center">$</h6>
                  <hr></hr>
                  <ul className="">
                    <li>
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 1
                    </li>
                    <li>
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 2
                    </li>
                    <li>
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 3
                    </li>
                    <li>
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 4
                    </li>
                    <li className="">
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 5
                    </li>
                    <li className="">
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 6
                    </li>
                    <li className="">
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 7
                    </li>
                    <li className="">
                      <span className="">
                        <i className=""></i>
                      </span>
                      Service Item 8
                    </li>
                  </ul>
                  <div className="d-grid">
                    <a href="#" className="btn btn-primary text-uppercase">
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
