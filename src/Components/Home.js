import React from 'react';
import { NavLink } from 'react-router-dom';
import "../Css/Home.css";
import HomeImg from "../img/home.jpg"

const Home = () => {
    return (
        <>
            <div className="container pt-5 ">
            <div className="row">
                <div className="col-4"></div>
                <div className="col-4 intro_div d-flex justify-content-center align-items-center">
                <p className='intro'>Gourav</p>
                </div>
                <div className="col-4"></div>
            </div>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-lg-6 pt-5 order-1 d-flex justify-content-center flex-column ">
                                <h1>
                                   <span className='brand'><b> I Build Things For The Web</b> </span>
                                </h1>
                                <h5>Hi, I am Gourav, a front-end Developer</h5>
                                <p>Develop your website with me.</p>
                                <div className='mt-5'>
                                <button className='btn'><NavLink className='btnlink' to="/About"> More about me</NavLink></button>
                                </div>
                            </div>
                            <div className="col-lg-6 pt-5 order-2 d-flex justify-content-center align-items-center pt-5">
                                <img className='img-fluid homeimg' src={HomeImg} alt="not found" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home
