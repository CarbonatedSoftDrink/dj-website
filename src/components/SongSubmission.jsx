import React from "react";
import { useState } from 'react';
import Calendar from './Calendar';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function SongSubmission(){
    const [textItem, setItem] = useState("");
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_bcs8en5', 'template_wy5hueo', form.current, 'wyAHCBsK_pLmlsJnf')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        toast.success('Form Submitted!', {duration: 8000});
    };

    return (
        <section id="suggest">
        <div class="container song-submission">
          <h1>Song Submissions</h1>
          <form id="song-submission-form" ref={form} onSubmit={sendEmail}>
              <div class="mb-3">
                  <label for="party-name" class="form-label">Party Name</label>
                  <input type="text" class="form-control" id="party-name" name="message1"></input>
              </div>
              <div class="mb-3">
                  <label for="party-date" class="form-label">Party Date</label>
                  <input type="date" class="form-control" id="party-date" name="message2"></input>
              </div>
              <div class="mb-3">
                  <label for="person-name" class="form-label">Person Name</label>
                  <input type="text" class="form-control" id="person-name" name="message3"></input>
              </div>
              <div class="mb-3">
                  <label for="phone" class="form-label">Phone Number</label>
                  <input type="text" class="form-control" id="phone" name="message4"></input>
              </div>
              <div class="mb-3">
                  <label for="song-suggestions" class="form-label">Song Suggestions</label>
                  <textarea class="form-control" id="song-suggestions" name="message5"></textarea>
              </div>
              <button type="submit" class="btn btn-primary" value="Send">Submit</button>
          </form>
          <Toaster />
        </div>
        </section>
    )
}
