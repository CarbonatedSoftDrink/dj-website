import React from "react";
import { useState } from 'react';

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
                type="text" 
                value={textItem}
                onChange={(e) => setItem(e.target.value)}
                />
                <input type="submit" value="Submit"></input>
            </label>
        </form>
        </section>
    )
}