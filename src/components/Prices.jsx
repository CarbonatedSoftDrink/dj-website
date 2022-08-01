import React, { useState, useEffect } from "react";
import { client } from "../client";

const Prices = () => {
  const [prices, setPrices] = useState([]);

  useEffect(() => {
    const pricesQuery = '*[_type == "prices"] | order(order asc)';

    const fetchPricesData = async () => {
      try {
        const data = await client.fetch(pricesQuery);
        setPrices(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchPricesData();
  }, []);

  return (
    <section id="prices">
      <h1>Prices</h1>
      <h3>May vary by location</h3>
      <br />
      <br />
      <br />
      <div className="container">
        <div className="row">
          {prices.map((price, index) => {
            return (
              <div key={index} className="col-sm-4 my-4">
                <h1 className="text-uppercase m-2">{price.item}</h1>
                {typeof price.price === "string" ? (
                  <p className="fs-5 m-2">{price.price}</p>
                ) : (
                  <div className="d-flex justify-content-center">
                    {price.price.map((p, i) => {
                      return (
                        <div className="mx-2">
                          <p className="mb-1">{p.name}</p>
                          <div id="price">
                            <p>{p.price}</p>
                          </div>
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

        <div className="prices-button">
            <a
              href="#contact"
            >
              <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                data-bs-whatever="@fat"
              >
                More Info
              </button>
            </a>
          </div>
      </div>
    </section>
  );
};
export default Prices;
