import React from 'react';
import "./style.css";

function Jumbotron() {
    return (
        <div style={{padding: "10px"}}>
            <div className="jumbotron">
                <h1 className="display-3 text-center myText">(React) Google Books Search</h1>
                <br></br>
                <h2 className="text-center myText">Search for and save books of interest.</h2>
            </div>
        </div>
    )
}

export default Jumbotron;