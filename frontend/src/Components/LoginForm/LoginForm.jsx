import React from 'react';
import './LoginForm.css';


function LoginForm() {
    return (
        <div className='wrapper'>
            <form action="">
                <h1>Welcome Back</h1>
                <div className="input-box">
                    <input type="text" placeholder='Mobile Number' required/>

                </div>

                <div className="input-box">
                    <input type="password" placeholder='Password' required/>

                </div>
                <div className="remember-forgot">
                    <label><input type='checkbox'/>Show Password</label>
                    <a className='Forgot' href='#'>Forgot password?</a>
                </div>
                <button className='Continue' type='submit'>Continue</button>
                <div className="register-link">
                    <p className='register'>Don't have an account? <a href='#'> SignUp</a></p>
                    <div className="lines">
                        <h4><span>Or</span></h4>
                    </div>
                </div>
                <button className='social' type='submit'><p>Continue with Google</p></button>
                <button className='social' type='submit'><p>Continue with Facebook</p></button>
            </form>
        </div>
    );
};

export default LoginForm;