import React from "react";

export default function SongSubmission(){
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
            </label>
        </form>
        </section>
    )
}