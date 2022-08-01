import React from "react";
import { useEffect, useState } from "react";

import ModalBody from "react-bootstrap/ModalBody";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

import { client } from "../client";
import DynamicIcon from "./DynamicIcon";
import Prices from "./Prices";
import PackageForm from "./PackageForm";


export default function Services() {
  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("");

  useEffect(() => {
    const servicesQuery = '*[_type == "services"] | order(order asc)';
    const packagesQuery = '*[_type == "packages"] | order(order asc)';

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
              {selectedPackage}
            </Modal.Title>
          </Modal.Header>
          <ModalBody>
            <p>
              All below fields are optional - Please fill out with as
              much information as possible and we will get back to you as soon
              as possible!
            </p>
            <PackageForm
              closeAfterSubmit={() => setShowModal(false)}
              selectedPackage={selectedPackage}
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

      <Prices />

      <section id="Packages">
        <div class="container packages">
          <h1>Packages/Deals</h1> 
          <div class="row">
            {packages?.map((item, index) => (
              <div class="col-lg-4 package">
                <div class="card mb-5 mb-lg-0">
                  <div class="card-body">
                    <h6 class="card-title text-uppercase text-center card-price">
                      {item.package}
                    </h6>
                    {/* <h6 class="card-price text-center">$</h6> */}
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
                      {/* <li class="text-muted">Disabled Service</li> */}
                    </ul>

                    <div class="d-grid">
                      <a onClick={() => {
                        
                        setShowModal(true);
                        setSelectedPackage(item.package)
                        
                        }} class="btn btn-primary text-uppercase">
                        Contact
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
