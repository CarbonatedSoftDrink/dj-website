import React from "react";
import { useState } from 'react';
import Calendar from './Calendar';

export default function SongSubmission(){
    const [textItem, setItem] = useState("");

    return (
        <section id="suggest">
        <div class="container song-submission">
          <h1>Song Submissions</h1>

          <form id="song-submission-form">
              <div class="mb-3">
                  <label for="party-name" class="form-label">Party Name</label>
                  <input type="text" class="form-control" id="party-name"></input>
              </div>
              <div class="mb-3">
                  <label for="party-date" class="form-label">Party Date</label>
                  <input type="date" class="form-control" id="party-date"></input>
              </div>
              <div class="mb-3">
                  <label for="song-suggestions" class="form-label">Song Suggestions</label>
                  <textarea class="form-control" id="song-suggestions"></textarea>
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
          </form>
        </div>
        </section>
    )
}
