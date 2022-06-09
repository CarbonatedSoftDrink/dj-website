import React, { Component } from "react";
import SongSubmission2 from "./SongSubmission2";

class Home extends Component {
    render() {
        return (
            <div>
                <h2>HOME PAGE</h2>
                <SongSubmission2 /> {/* This line must be deleted before merging into main branch. */}
            </div>
        );
    }
}

export default Home;