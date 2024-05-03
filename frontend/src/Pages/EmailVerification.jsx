import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { useState } from "react";
import { connect } from "react-redux";
import { emailVerification } from "../reducer/Actions";

const EmailVerification = ({ emailVerification }) => {
    const [status, setStatus] = useState(false);
    const { key } = useParams();
    
    const handlingSubmit = (e) => {
        e.preventDefault();
        emailVerification(key);
        setStatus(true);
    };

    if (status) {
        return <Navigate to="../login/" />;
    }

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "60vh" }}>
            <div style={{ background: "#fff", padding: "20px", borderRadius: "10px", textAlign: "center" }}>
                <h2 style={{ marginBottom: "20px" }}>Activate Account</h2>
                <h5 style={{ marginBottom: "20px" }}>
                    Click the below link to activate your account
                </h5>
                <form onSubmit={handlingSubmit}>
                    <div style={{ display: "inline-block" }}>
                        <button 
                            style={{ 
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
                            onClick={handlingSubmit}
                        >
                            Activate Account
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default connect(null, { emailVerification })(EmailVerification);
