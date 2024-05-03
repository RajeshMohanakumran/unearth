import React from "react";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { resetPassword } from "../reducer/Actions";
import './LoginForm.css'
const ResetPassword = ({ resetPassword }) => {
    const [ status, setStatus ] = useState (false);
    const [ formData, setFormData ] = useState ({
        email: ""
    });
    const { email } = formData;
    const handlingInput = (e) => setFormData({...formData, [e.target.name]: e.target.value});
    const handlingSubmit = (e) => {
        e.preventDefault();
        resetPassword( email );
        setStatus(true)
    }
    if (status) {
        return <Navigate to={"../"}></Navigate>
    }
    return (
        <div className="whole">
        <div className="box">
            <h2 className="text-center ">Reset Password</h2>
            <h5 className="text-center ">
                Please input your registered email. The link for set your new password will be stent into your email
            </h5>
            <form className="" onSubmit={e => handlingSubmit(e)}>
                <div className="input-box gapp">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input name="email" value={email} onChange={e => handlingInput(e)} type="email" className="form-controll" id="email" placeholder="name@example.com"/>
                </div>
                <div className="input-box gapp">
                    <button className="btn btn-primary" type="submit">Send Link</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default connect(null, { resetPassword })(ResetPassword);