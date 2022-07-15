import React, { useEffect, useState, useRef } from "react";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { client } from "../client";
import { FaFileImage } from "react-icons/fa";

export default function Services() {
  const [services, setServices] = useState([]);
  const [packages, setPackages] = useState([]);
  const prices = [
    {
      name: "DJ Only",
      price: "$400 - 750",
      description: "Price may vary depending on location and type of event",
    },
    {
      name: "fireworks",
      price: "$ 200 +",
      description: "depeding how many fireworks(2,4,6,8)",
    },
    { name: "Dry ice", price: "$150" },
    { name: "Any custom bogo", price: "$100" },
    {
      name: "Rental speakers",
      price: [
        {
          name: "Small system",
          price: "$250",
        },
        {
          name: "Large system",
          price: "$450",
        },
      ],
    },
  ];

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

  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
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

      <section id="prices">
        <h1>Price Style</h1>
        <br />
        <br />
        <br />
        <div className="container">
          <div className="row">
            {prices.map((price, index) => {
              return (
                <div key={index} className="col-sm-4 my-4">
                  <h1 className="text-uppercase m-2">{price.name}</h1>
                  {typeof price.price === "string" ? (
                    <p className="fs-5 m-2">{price.price}</p>
                  ) : (
                    <div className="d-flex justify-content-center">
                      {price.price.map((p, i) => {
                        return (
                          <div className="mx-2">
                            <p className="mb-1">{p.name}</p>
                            <p>{p.price}</p>
                          </div>
                        );
                      })}
                    </div>
                  )}
                  <p>{price.description}</p>
                </div>
              );
            })}
            <div className="col-sm-4 my-4">
              <Button variant="primary" onClick={handleShow}>
                More Info
              </Button>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Prices Detail</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Form>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlInput1"
                    >
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        autoFocus
                      />
                    </Form.Group>
                    <Form.Group
                      className="mb-3"
                      controlId="exampleForm.ControlTextarea1"
                    >
                      <Form.Label>Example textarea</Form.Label>
                      <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                  </Form>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Send Message
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          </div>
        </div>
      </section>

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
