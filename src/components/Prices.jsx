import React, { useState } from "react";

const Prices = () => {
  const [isModal, showModal] = useState(false);
  const clickModal = (e) => {
    showModal(!isModal);
  };
  const close = () => {
    showModal(false);
  };
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
          <div className="col-sm-4">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              data-bs-whatever="@fat"
              style={{ marginTop: "30%" }}
              onClick={clickModal}
            >
              More Info
            </button>
          </div>
        </div>
        <div
          className={isModal ? "modal fade show" : "modal fade"}
          tabindex="-1"
          id="exampleModal"
          style={
            isModal
              ? { display: "block", zIndex: "99999" }
              : { display: "none" }
          }
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Modal Information
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={close}
                ></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label
                      for="recipient-name"
                      className="col-form-label"
                      style={{ float: "left" }}
                    >
                      Email:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="recipient-name"
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      for="message-text"
                      className="col-form-label"
                      style={{ float: "left" }}
                    >
                      Message:
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                    ></textarea>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={close}
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Prices;
