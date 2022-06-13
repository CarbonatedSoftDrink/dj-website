import React from "react";
import { useState } from 'react';
import Calendar from './Calendar';

export default function SongSubmission2(){
    const [textItem, setItem] = useState("");

    return (
        <section id="SongSubmission">
            <p>
                Song Submission
            </p>
        <form>
            <label>Enter your submission:
                <input
                type="text" ß
                value={textItem}
                onChange={(e) => setItem(e.target.value)}
                />

                Enter your Parties Name:
                <input
                type="text" 
                value={textItem}
                onChange={(e) => setItem(e.target.value)}
                />
                <input type="submit" value="Submit"></input>
            </label>
        </form>
        <Calendar />
        </section>
    )
}