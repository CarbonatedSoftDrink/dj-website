import React, {useState} from "react";
import PayPal from '../pictures/paypal.png';
import CashApp from '../pictures/cashapp.png';

export default function Contact(){
    const [isModal, showModal] = useState(false);
  const clickModal = (e) => {
    showModal(!isModal);
  };
  const close = () => {
    showModal(false);
  };
    return (
        <section id="contact">
            <h1>
                Contact Us
            </h1>
            <p>
                FADIA DAGHER<br></br>
                PH: 313-265-7392<br></br>
                PH: 313-800-1262<br></br>
                <a href='https://www.instagram.com/djfadia'>DJFADIA ON INSTAGRAM</a>
            </p>
            <h1>Make A Deposit</h1>
            <a href="https://account.venmo.com/pay?txn=pay&note=DJ%20Deposit&recipients=JoeBomm" target="_blank"><img src={PayPal}/></a>
            
            <a href = "https://cash.app/$joebomm" target="_blank"><img src={CashApp}/></a>
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
                  More Information
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
    )
}
