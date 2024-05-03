import React, { useState } from 'react';
import './Home.css'
import { assets } from '../../assets/assets';

const Home = () => {

    return (
        <div className='home'>
            <nav id="header">
                <div class="nav-logo">
                    <p class="nav-name">UnEarth</p>

                </div>
                <div class="nav-menu" id="myNavMenu">
                    <ul class="nav_menu_list">
                        <li class="nav_list">
                            <a href="#home" class="nav-link active-link">Home</a>

                        </li>
                        <li class="nav_list">
                            <a href="#about" class="nav-link">About</a>

                        </li>

                        <li class="nav_list">
                            <a href="#contact" class="nav-link">Contact</a>

                        </li>
                    </ul>
                    <input  className="login" type='button' value="Login" />
                </div>

            </nav>

            <div className="center">
            <h2>Smart Mining,Safe Tomorrow</h2>
            
            
            </div>
            
            <div className="section1" id="contact">
                
                <div class="row1">

                    <div className="col">
                        <div className="form-control">
                            <div className='rules'><p>Know the Rules <br></br> and Regulation of<br></br> Mining</p>
                                <input  className="in" type='button' value="sign for free &rarr;" /></div>
                        </div>
                    </div>
                    <div class="col1">
                        <img src={assets.home} alt='' />
                    </div>
                </div>



                <div class="top-header">
                    <h1>Need help with something?</h1>
                    <span>Do you have any doubt in your mind, contact me here</span>
                </div>
                <div class="row">

                    <div className="col">
                        <div className="form-control">
                            <div className="form-inputs">
                                <input type="text" className="input-field" placeholder="Name" />
                                <input type="text" className="input-field" placeholder="Number" />
                            </div>
                            <div class="text-area">
                                <textarea placeholder="Message"></textarea>
                            </div>
                            <div class="form-button">
                                <button className="btn">Submit <i class="uil uil-message"></i></button>
                            </div>
                        </div>
                    </div>
                    <div class="col1">
                        <div class="contact-info">
                            <h2>Find Me <i class="uil uil-corner-right-down"></i></h2>
                            <p><i class="uil uil-envelope"></i> Email: sugan@unearth.com</p>
                            <p><i class="uil uil-phone"></i> +91 6374416569</p>
                        </div>
                    </div>
                </div>
            </div>

            <footer>

                <div class="footer-social-icons">
                    <div class="icon"><i class="uil uil-instagram"></i></div>
                    <div class="icon"><i class="uil uil-linkedin-alt"></i></div>
                    <div class="icon"><i class="uil uil-twitter"></i></div>
                    <div class="icon"><i class="uil uil-github-alt"></i></div>
                </div>
                <hr className='line'></hr>
                <div class="bottom-footer">
                    <p>Copyright &copy; <a href="#home" >UnEarth</a> - All rights reserved
                    </p>
                    <i class="fas fa-clock"></i>
                </div>
            </footer>



        </div>





    );
};

export default Home;