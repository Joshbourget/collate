import React from 'react';
import logo from './collate-logo-dev.png'; // Adjust the file extension if necessary
import './GetStarted.css';
import background from './collective-consciousness-ai-dev.png';

function GetStarted() {
    const bgImage = `url(${background})`;

    return (
        <div className="get-started-container" style={{backgroundImage: bgImage}}>
	    <h1 className="collate">Collate</h1>
            <img src={logo} alt="Logo" className="logo" />
            <h1 className="title">Understand the Collective</h1>
            <button onClick={() => window.location.href="/login"} className="get-started-button">Get Started</button>
        </div>
    );
}

export default GetStarted;
