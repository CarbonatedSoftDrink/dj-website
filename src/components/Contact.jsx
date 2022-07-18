import React from "react";
import PayPal from '../pictures/paypal.png';
import CashApp from '../pictures/cashapp.png';

export default function Contact(){
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
            <a href="https://account.venmo.com/pay?txn=pay&note=DJ%20Deposit&recipients={user_name}" target="_blank"><img src={PayPal}/></a>

            <a href = "https://cash.app/${user_name}" target="_blank"><img src={CashApp}/></a>
        </section>
    )
}
