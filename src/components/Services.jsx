import React from "react";
import { useEffect, useState } from "react";

import ModalBody from "react-bootstrap/ModalBody";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

import { client } from "../client";
import DynamicIcon from "./DynamicIcon";
import PackageForm from "./PackageForm";



export default function Services() {
  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);
  const [showModal, setShowModal] = useState(true);
  

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
        <Modal
          className="packages-modal"
          onHide={() => setShowModal(false)}
          size="lg"
          show={showModal}
          keyboard={true}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header
            closeVariant="white"
            closeButton={() => setShowModal(false)}
          >
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <PackageForm
              closeAfterSubmit={() => setShowModal(false)}
            ></PackageForm>
          </ModalBody>
          <Modal.Footer>
            <Button onClick={() => setShowModal(false)}>Close</Button>
          </Modal.Footer>
        </Modal>

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
