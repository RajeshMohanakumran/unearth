import React, { useState } from 'react';
import './Homee.css'
import { assets } from '../../assets/assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
const Homee = () => {

    return (
        <div className="container">
            <nav id="header">
                <div className="nav-logo">
                    <p className="nav-name">UnEarth</p>
                </div>
                <div className="nav-menu" id="myNavMenu">
                    <ul className="nav_menu_list">
                        <li className="nav_list">
                            <a href="#home" className="nav-link ">Home</a>
                            
                        </li>
                        <li className="nav_list">
                            <a href="#about" className="nav-link">About</a>
                           
                        </li>

                        <li className="nav_list">
                            <a href="#contact" className="nav-link">Contact</a>
                            
                        </li>
                    </ul>
                </div>
                <div className="nav-button">
                    <Link to="/login" className="btn">Login </Link>
                </div>
                <div className="nav-menu-btn">
                    <i className="uil uil-bars" onclick="myMenuFunction()"></i>
                </div>
            </nav>

            <main className="wrapperr">

                <section className="featured-box" id="home">

                    <div className="featured-text">

                        <div className="featured-text-card">
                            <span>Smart Mining,Safe Tomorrow</span>
                        </div>
                        <div className="featured-name">
                            <p>Know the Rules </p>
                            <p>and Regulation of</p>
                            <p>Mining</p>
                        </div>

                        <div className="featured-text-btn">
                            <Link to="/chat" className="btn blue-btn">Chat With us &#x279C;</Link>
                            <Link to="/register" className="btn">Signup for free &#x279C;</Link>
                        </div>
                        <div className="social_icons">
                            <div className="icon"><FontAwesomeIcon icon={faInstagram} /></div>
                            <div className="icon"><FontAwesomeIcon icon={faLinkedin} /></div>
                            <div className="icon"><FontAwesomeIcon icon={faTwitter} /></div>
                            <div className="icon"><FontAwesomeIcon icon={faGithub} /></div>
                        </div>
                    </div>
                    <div className="featured-image">
                        <div className="image">
                            <img src={assets.profile} alt="avatar" />
                        </div>
                    </div>
                    <div className="scroll-icon-box">
                        <a href="#contact" className="scroll-btn">

                            <p>Scroll Down</p>
                        </a>
                    </div>

                </section>

                






                <section className="section" id="contact">
                    <div className="top-header">
                        <h1>Get in touch</h1>
                        <span>Need help with something, contact me here</span>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-control">
                                <div className="form-inputs">
                                    <input type="text" className="input-field" placeholder="Name" />
                                    <input type="text" className="input-field" placeholder="Email" />
                                </div>
                                <div className="text-area">
                                    <textarea placeholder="Message"></textarea>
                                </div>
                                <div className="form-button">
                                    <button className="btn">Send <i className="uil uil-message"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="contact-info">
                                <h2>Find Me <i className="uil uil-corner-right-down"></i></h2>
                                <p>Email: unearth.help@gmail.com</p>
                                <p> +91 6374416569</p>
                                <p>TamilNadu,Coimbatore</p>

                            </div>
                        </div>

                    </div>
                </section>

            </main>



            <footer>

                <div className="footer-social-icons">
                    <div className="icon"><FontAwesomeIcon icon={faInstagram} /></div>
                    <div className="icon"><FontAwesomeIcon icon={faLinkedin} /></div>
                    <div className="icon"><FontAwesomeIcon icon={faTwitter} /></div>
                    <div className="icon"><FontAwesomeIcon icon={faGithub} /></div>
                </div>
                <div className="bottom-footer">
                    <p>Copyright &copy; <a href="#home" >UnEarth</a> - All rights reserved
                    </p>
                </div>
            </footer>

        </div>


    );
};


export default Homee;