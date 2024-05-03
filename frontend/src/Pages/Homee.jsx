
import './Homee.css'
import { assets } from '../assets/assets';
import React, { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { logout } from "../reducer/Actions";
import { faInstagram, faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
const Homee = ({ logout, isAuthenticated }) => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_36i2kfg', 'template_kl3q4oq', form.current, {
          publicKey: '9URAyIGfim_GBhXWW',
        })
        .then((result)=> {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    return (
        <div className="container">
            <nav id="header">
                <div className="nav-logo">
                    <p className="nav-name">UnEarth</p>
                </div>
                <div className="nav-menu" id="myNavMenu">
                    <ul className="nav_menu_list">
                        <li className="nav_list">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>

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
                    
                { !isAuthenticated?<Link className="btn" aria-current="page" to="login/">Login &#x279C;</Link>:
                
                <span className="btn" aria-current="page" onClick={ logout } id="logout">Logout &#x279C;</span>}
                
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
                        { isAuthenticated?<Link to="chat/" className="btn blue-btn">Chat With us &#x279C;</Link>:
                            <Link className="btn" aria-current="page" to="signup/">Signup for free &#x279C;</Link>}
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
                        <h1>About Us</h1>
                        <span>Meet our Incredible Team</span>
                    </div>
                    <div className="row">

                        <div className="col1">
                            <div className="contact-infoo">
                                <img className='profile' src={assets.ajay2} alt='' />
                                <div className='name'>
                                    <div className="social_icon">
                                        <div className="icon"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div className="icon"><FontAwesomeIcon icon={faLinkedin} /></div>
                                        <div className="icon"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <button className='contactus'>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-infoo">
                                <img className='profile' src={assets.ajay2} alt='' />
                                <div className='name'>
                                    <div className="social_icon">
                                        <div className="icon"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div className="icon"><FontAwesomeIcon icon={faLinkedin} /></div>
                                        <div className="icon"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <button className='contactus'>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-infoo">
                                <img className='profile' src={assets.ajay2} alt='' />
                                <div className='name'>
                                    <div className="social_icon">
                                        <div className="icon"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div className="icon"><FontAwesomeIcon icon={faLinkedin} /></div>
                                        <div className="icon"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <button className='contactus'>Contact Us</button>
                                    </div>
                                </div>
                            </div>
                            <div className="contact-infoo">
                                <img className='profile' src={assets.ajay2} alt='' />
                                <div className='name'>
                                    <div className="social_icon">
                                        <div className="icon"><FontAwesomeIcon icon={faInstagram} /></div>
                                        <div className="icon"><FontAwesomeIcon icon={faLinkedin} /></div>
                                        <div className="icon"><FontAwesomeIcon icon={faTwitter} /></div>
                                        <button className='contactus'>Contact Us</button>
                                    </div>
                                </div>
                            </div> 
                        </div>

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
                                <form ref={form} onSubmit={sendEmail}>
                                <div className="form-inputs">
                                    <input  type="text" name="from_name" className="input-field" placeholder="Name" />
                                    <input type="email" name="from_email" className="input-field" placeholder="Email" />
                                </div>
                                <div className="text-area">
                                    <textarea name="message" placeholder="Message"></textarea>
                                    
                                </div>
                                <div className="form-button">
                                <input className="btn" type="submit" value="Send" /> 
                                </div>
                                </form>
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

const mapStateToProps = ( state ) => {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated
    }
}

export default connect(mapStateToProps, { logout })(Homee);