import React from "react";
// import { useState } from 'react';
// import Calendar from './Calendar';

export default function SongSubmission(){
    // const [textItem, setItem] = useState("");

    return (
        <section id="suggest">
        <div className="container song-submission">
          <h1>Song Submissions</h1>

          <form id="song-submission-form">
              <div className="mb-3">
                  <label for="party-name" className="form-label">Party Name</label>
                  <input type="text" className="form-control" id="party-name"></input>
              </div>
              <div className="mb-3">
                  <label for="party-date" className="form-label">Party Date</label>
                  <input type="date" className="form-control" id="party-date"></input>
              </div>
              <div className="mb-3">
                  <label for="song-suggestions" className="form-label">Song Suggestions</label>
                  <textarea className="form-control" id="song-suggestions"></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        </section>
    )
}
