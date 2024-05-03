import React from 'react';
import './SignUpForm.css';


function SignUpForm2() {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Create Your Account</h1>
                <div className="input-box">
                    <input type="text" placeholder='Name'></input>

                </div>

                <div className="input-box">
                    <input type="text" placeholder='Mobile Number'></input>

                </div>
                
                <a href='#'><button className='Continue' type='submit' >Continue</button></a>
                <div className="register-link">
                    <p className='register'>Already have an account? <a href='#'> Login</a></p>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm2;