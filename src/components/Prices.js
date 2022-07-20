import React, { useState } from "react";

const Prices = () => {
  const prices = [
    {
      name: "DJ Only",
      price: "$400 - 750",
      description: "Price may vary depending on location and type of event",
    },
    {
      name: "fireworks",
      price: "$ 200 +",
      description: "Depending how many fireworks(2,4,6)",
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
      <h1>Prices</h1>
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
        </div>
      </div>
    </section>
  );
};
export default Prices;
