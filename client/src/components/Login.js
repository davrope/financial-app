import React from 'react';
import {FcGoogle} from 'react-icons/fc';


const Login = () => {
  return (
    <div>
      <form className='login-form'>
        <div className='login-container'>
          <label for = "uname" className='login-label'>
            E-mail
          </label>
          <br/>
          <input type="text" placeholder='Enter your e-mail' name='uname' required/>
          <br/>
          <label for= "psw" className='login-label'>
            Password  
          </label>
          <br/>
          <input type = "text" placeholder="Enter your password" name = "psw" required/>
          <br/>
          <button type = "submit" class="login-button">Login</button>
          <br/>
          <label  class="remember-checkbox">
              <input type="checkbox" checked = "checked" name="remember"/>Remember me
          </label>
        </div>
      </form>

      <section className="third-party-login">
        <h3>or</h3>
        <p>Login with:</p>
        
        <a className='google log in' href = "/auth/google" key = "googlelogin">
        <FcGoogle className='smedia-icon'/>
        </a>
        
      </section>
      <div className="sign-up-link">
          <b><p>Don't have an account yet?</p></b>
          <a href="/sign-up">Sign up</a>
      </div>
    </div>
  )
}

export default Login