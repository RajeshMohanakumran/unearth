import React from "react";
import { Link, Navigate } from "react-router-dom";
import './LoginForm.css'
import { useState } from "react";
import { connect } from "react-redux";
import { login, signup } from "../reducer/Actions";

const Login = ({ login, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const { email, password } = formData;
    const handlingInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    const handlingSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    }
    const reachGoogle = () => {
        const clientID = "1001496433881-kde3p2i2ibnbmhf8u3jquqtt5snk51no.apps.googleusercontent.com";
        const callBackURI = "http://localhost:3000/";
        window.location.replace(`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${callBackURI}&prompt=consent&response_type=code&client_id=${clientID}&scope=openid%20email%20profile&access_type=offline`)
    }
    if (isAuthenticated) {
        return <Navigate to={"../"}></Navigate>
    }
    return (

        <div className='wrapper'>
            <form action="" onSubmit={e => handlingSubmit(e)}>
            <h1>UnEarth</h1>
                <h1>Welcome Back</h1>
                <div className="input-box">
                <label htmlFor="first_name" className="form-label">Email</label>
                    <input className="form-controll" name="email" value={email} onChange={e => handlingInput(e)} type="email" id="email" placeholder="name@example.com" />
                </div>

                <div className="input-box">
                <label htmlFor="first_name" className="form-label">Password</label>
                    <input className="form-controll" name="password" value={password} onChange={e => handlingInput(e)} type="password" id="password" placeholder="password ..." />

                </div>
                <div className="remember-forgot">
                    <Link to={"../reset/password/"}>Forgot Password ?</Link>
                    
                </div>
                <button className='Continue' type='submit'>Login</button>

                <div className="register-link">
                    <p className='register'>Don't have an account? <Link to={"/signup"} > SignUp</Link></p>
                    <div className="lines">
                        <h4><span>Or</span></h4>
                    </div>
                </div>
                <button className="social" type="button" onClick={reachGoogle}>Login With Google</button>
                
            </form>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated
    }
}

export default connect(mapStateToProps, { login })(Login);