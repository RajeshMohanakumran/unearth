import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { resetPasswordConfirm } from "../reducer/Actions";

const ResetPasswordConfirm = ({ resetPasswordConfirm }) => {
    const [status, setStatus] = useState(false);
    const { uid, token } = useParams();
    const [formData, setFormData] = useState({
        new_password1: "",
        new_password2: ""
    });

    const { new_password1, new_password2 } = formData;

    const handlingInput = (e) => setFormData({...formData, [e.target.name]: e.target.value});
    
    const handlingSubmit = (e) => {
        e.preventDefault();
        resetPasswordConfirm( uid, token, new_password1, new_password2);
        setStatus(true);
    }

    if (status) {
        return <Navigate to={"../login/"}></Navigate>
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
            <div style={{ background: "#fff", padding: "20px", borderRadius: "10px"}}>
            <h2 style={{ marginBottom: "20px",textAlign:"center" }}>Set Password</h2>
            <form onSubmit={e => handlingSubmit(e)} >
                <div className="input-box" >
                    <label className="form-label" htmlFor="new_password1">New Password</label>
                    <input 
                        className="form-controll"
                        style={{ marginBottom: "10px"}}
                        name="new_password1" 
                        value={new_password1} 
                        onChange={e => handlingInput(e)} 
                        type="password" 
                        id="new_password1" 
                        placeholder="New password ..."
                    />
                </div>
                <div className="input-box">
                    <label className="form-label" htmlFor="new_password2">Re-enter New Password</label>
                    <input 
                    style={{ marginBottom: "10px"}}
                       className="form-controll"
                        name="new_password2" 
                        value={new_password2} 
                        onChange={e => handlingInput(e)} 
                        type="password" 
                        id="new_password2" 
                        placeholder="Re-enter new password ..."
                    />
                </div>
                <div>
                    <button style={{ 
                                padding: "10px 20px", 
                                background: "#007bff", 
                                color: "white", 
                                border: "none", 
                                borderRadius: "5px", 
                                cursor: "pointer", 
                                transition: "all 0.3s ease",
                                outline: "none"
                            }}
                            onMouseEnter={(e) => e.target.style.color= "black"}
                            onMouseLeave={(e) => e.target.style.color = "white"}
                            type="submit" 
                            onClick={handlingSubmit}>Set Password</button>
                </div>
            </form>
        </div>
        </div>
    )
}

export default connect(null, { resetPasswordConfirm })(ResetPasswordConfirm);
