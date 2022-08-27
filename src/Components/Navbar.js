import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Css/Navbar.css"

const Navbar = () => {
    return (
        <>
        <div className="container">
            <div className="row">
                <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="/Home">Gourav</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink exact className="nav-link links" aria-current="page" to="/Home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link links" to="/About">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink exact className="nav-link links" to="/Contact">Contact Me</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
                </div>
            </div>
        </div>
        </>
    )
}

export default Navbar
