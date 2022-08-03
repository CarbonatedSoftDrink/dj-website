import React from "react";
import { useState } from 'react';
import Calendar from './Calendar';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function SongSubmission(){
    const [inputs, setInputs] = useState({
        partyName: "",
        partyDate: "",
        personName: "",
        phoneNumber: "",
        songSuggestions: "",
      });
    
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const sendFormPromise = sendForm();
        toast.promise(
          sendFormPromise,
          {
            loading: "Sending...",
            success: "Your message has been sent, thank you!",
          },
          { loading: { position: "bottom-center" } },
          { success: { duration: 8000, position: "bottom-center" } }
        );
    };

    const sendForm = async () => {
        try {
          const fetchData = await fetch(
            "https://formsubmit.co/ajax/e6d5ab319530c607a40d9dee7541426d",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify({
                "Party Name": inputs.partyName,
                "Party Date": inputs.partyDate,
                "Person Name": inputs.personName,
                "Phone Number": inputs.phoneNumber,
                "Song Suggestions": inputs.songSuggestions,
              }),
            }
          );
          setInputs({});
    
        return fetchData;
        } catch (err) {
        console.log(err);
        }
    };

    return (
        <section id="suggest">
        <div class="container song-submission">
          <h1>Song Suggestions</h1>
          <form id="song-submission-form" onSubmit={handleSubmit}>
              <div class="mb-3">
                  <label for="party-name" class="form-label">Party Name</label>
                  <input type="text" class="form-control" id="party-name" name="partyName" value={inputs.partyName || ""}
              onChange={handleChange}></input>
              </div>
              <div class="mb-3">
                  <label for="party-date" class="form-label">Party Date</label>
                  <input type="date" class="form-control" id="party-date" name="partyDate" value={inputs.partyDate || ""}
              onChange={handleChange}></input>
              </div>
              <div class="mb-3">
                  <label for="person-name" class="form-label">Person Name</label>
                  <input type="text" class="form-control" id="person-name" name="personName" value={inputs.personName || ""}
              onChange={handleChange}></input>
              </div>
              <div class="mb-3">
                  <label for="phone" class="form-label">Phone Number</label>
                  <input type="text" class="form-control" id="phone" name="phoneNumber" value={inputs.phoneNumber || ""}
              onChange={handleChange}></input>
              </div>
              <div class="mb-3">
                  <label for="song-suggestions" class="form-label">Song Suggestions</label>
                  <textarea class="form-control" id="song-suggestions" name="songSuggestions" value={inputs.songSuggestions || ""} onChange={handleChange}></textarea>
              </div>
              <button type="submit" class="btn btn-primary" value="Send">Submit</button>
          </form>
          <Toaster />
        </div>
        </section>
    )
}
