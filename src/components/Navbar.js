import React from 'react';

import '../styles/primary.css';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" >Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page">Home</a>
                        <a className="nav-link" >Schedule</a>
                        <a className="nav-link" >Historical Home</a>
                        <a className="nav-link disabled">Analysis & Analytics</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
