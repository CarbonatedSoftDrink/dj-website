import React from "react";
import PayPal from '../pictures/paypalLogo.png';
import CashApp from '../pictures/cashappLogo.png';
import Insta from '../pictures/instagramLogo.png';

export default function Contact(){
    return (
        <section id="contact">
            <h1>
                Looking to Book?
            </h1>
            <h2>Call us @ H: 313.265.7392 or M: 313.800.1262 </h2>
                <a href='https://www.instagram.com/djfadia'><img src={Insta} /></a>
            <h1>Make A Deposit</h1>
            <a href="https://account.venmo.com/pay?txn=pay&note=DJ%20Deposit&recipients=JoeBomm" target="_blank"><img src={PayPal}/></a>
            
            <a href = "https://cash.app/$joebomm" target="_blank"><img src={CashApp}/></a>
        </section>
    )
}
