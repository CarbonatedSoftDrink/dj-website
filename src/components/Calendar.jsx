import React from "react";
import { useState } from 'react';

export default function Calendar(){
    const [textItem, setItem] = useState("");

    return (
        <section id="Calendar">
            <p>
                Calendar
            </p>
        <form>
            <label>Select a date:
                <input type="date" id="Calendar_input"></input>
                <input type="submit" value="Submit"></input>
            </label>
        </form>
        </section>
    )
}