import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { signup } from "../reducer/Actions";
import './LoginForm.css'
const Signup = ({ signup }) => {
    const [ status, setStatus ] = useState (false);
    const [ formData, setFormData ] = useState ({
        email: "",
        first_name: "",
        last_name: "",
        password1: "",
        password2: ""
    });
    const reachGoogle = () => {
        const clientID = "1001496433881-kde3p2i2ibnbmhf8u3jquqtt5snk51no.apps.googleusercontent.com";
        const callBackURI = "http://localhost:3000/";
        window.location.replace(`https://accounts.google.com/o/oauth2/v2/auth?redirect_uri=${callBackURI}&prompt=consent&response_type=code&client_id=${clientID}&scope=openid%20email%20profile&access_type=offline`)
    }
    const { email, first_name, last_name, password1, password2 } = formData;
    const handlingInput = (e) => setFormData({...formData, [e.target.name]: e.target.value});
    const handlingSubmit = (e) => {
        e.preventDefault();
        signup( email, first_name, last_name, password1, password2 );
        setStatus(true)
    }
    if (status) {
        return <Navigate to={"../"}></Navigate>
    }
    return (
        <div className="wrapper wrapper1">
            <form action="" onSubmit={e => handlingSubmit(e)}>
            <h1>UnEarth</h1>
                <h1>Create Your Account</h1>
                <div className="input-box">
                <label htmlFor="first_name" className="form-label">First Name</label>
                    <input name="first_name" value={first_name} onChange={e => handlingInput(e)} type="text" className="form-controll" id="first_name" placeholder="First name ..."/>
                </div>

                <div className="input-box">
                <label htmlFor="first_name" className="form-label">Last Name</label>
                <input name="last_name" value={last_name} onChange={e => handlingInput(e)} type="text" className="form-controll" id="last_name" placeholder="Last name ..."/>

                </div>
                <div className="input-box">
                <label htmlFor="first_name" className="form-label">Email</label>
                <input name="email" value={email} onChange={e => handlingInput(e)} type="email" className="form-controll" id="email" placeholder="name@example.com"/>

                </div>
                <div className="input-box">
                <label htmlFor="first_name" className="form-label">Password</label>
                <input name="password1" value={password1} onChange={e => handlingInput(e)} type="password" className="form-controll" id="password1" placeholder="Password ..."/>

                </div>
                <div className="input-box">
                <label htmlFor="first_name" className="form-label">Confirm Password</label>
                <input name="password2" value={password2} onChange={e => handlingInput(e)} type="password" className="form-controll" id="password2" placeholder="Confirm Password ..."/>
                </div>
                
                <button className='Continue' type='submit' >Continue</button>
                <div className="register-link">
                    <p className='register'>Already have an account? <Link to={"../login/"}>Login</Link></p>
                </div>
                <div className="register-link">
                    
                    <div className="lines">
                        <h4><span>Or</span></h4>
                    </div>
                </div>
                <button  style={{width:"320px"}} className="social social1" type="button" onClick={reachGoogle}>Login With Google</button>
              
            </form>
          
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        isAuthenticated: state.AuthReducer.isAuthenticated
    }
}
export default connect(mapStateToProps, { signup })(Signup)