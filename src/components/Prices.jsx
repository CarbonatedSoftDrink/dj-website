import React, { useState, useRef } from "react";

import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

export default function Services() {
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

  //Modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
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
  );
}
