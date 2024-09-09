import { useState } from "react";
import $ from 'jquery';
import { hasCorrectEmail, hasUppercase } from "../helper/formater";

export const Home = () => {

  const [page, setPage] = useState('Login');

  const [firstName, setFirstname] = useState();
  
  const [lastName, setLastname] = useState();
  
  const [email, setEmail] = useState();
  
  const [password, setPassword] = useState();

  function verifyfirstName(){
    const fName = $('#txtFirstName').val();
    $('#errFirstName').text('');
    setFirstname(null)
    if(fName.trim().length <= 0) $('#errFirstName').text('No Blankspaces.');
    else if(fName.trim().length <= 2) $('#errFirstName').text('Atleast 2 Characters.');
    else setFirstname(fName);
  }
  function verifyLastname(){
    const lName = $('#txtLastName').val();
    $('#errLastName').text('');
    setLastname(null);
    if(lName.trim().length <= 0) $('#errLastName').text('No Blankspaces');
    else if (lName.trim().length <= 2) $('#errLastName').text('Atleast 2 Characters.');
    else setLastname(lName);
  }
  function verifyEmailAddress(){
    const emailAddress = $('#txtRegEmailAddress').val();
    $('#errtxtEmailAddress').text('');
    setEmail(null);
    if(emailAddress.trim().length <= 0) $('#errtxtEmailAddress').text('No Blankspaces.');
    else if(!hasCorrectEmail(emailAddress)) $('#errtxtEmailAddress').text('Invalid Email Address');
    else setEmail(emailAddress);
  }
  function verifyPassword(){
    const password = $('#txtRegPassword').val();
    $('#errtxtPassword').text('');
    setPassword(null);
    const confirmPassword = $('#txtConfirmPassword').val();
    $('#errConfirmpassword').text('');
    if(password.length <=0 ) $('#errtxtPassword').text('No Blankspaces.');
    else if(password.length < 8) $('#errtxtPassword').text('Atleast 8 Characters.');
    else if(!hasUppercase(password)) $('#errtxtPassword').text('Atleast 1 Uppercase Letter.');
    else if(password !== confirmPassword) $('#errConfirmpassword').text('Password do not match.');
    else setPassword(password);
  }
  return (
    <div className="row main-container">
      <div className="col-lg-6 col-12 align-self-center left-container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            {page === 'Login' && 
              <div className="login-container shadow-lg rounded animate__animated animate__fadeIn">
                <h2 className="text-center">Sign-in</h2>
                <span>Email Address</span>
                <input type="text" id="textEmailAddress" className="form-control mb-3"/>
                <span>Password</span>
                <input type="password" id="txtPassword" className="form-control mb-3"/>
                <button className="btn btn-primary w-100 mt-2">Login</button>
                <p className="forgot small">Forgot Password?</p>
                <p className=" forgot text-center small" onClick={()=>setPage('Register')}>Don't have an Account? Sign up!</p>
              </div>
            }
            {page === 'Register' && 
              <div className="register-container shadow-lg rounded animate__animated animate__fadeIn">
                <h2 className="text-center mb-3">Sign-up</h2>
                <div className="row">
                  <div className="col-6">
                    <span>First Name</span>
                    <input type="text" id="txtFirstName" className="form-control" onChange={()=>verifyfirstName()}/>
                    <p id="errFirstName" className="text-danger small"></p>
                  </div>
                  <div className="col-6">
                    <span>Last Name</span>
                    <input type="text" id="txtLastName" className="form-control" onChange={()=>verifyLastname()}/>
                    <p id="errLastName" className="text-danger small"></p>
                  </div>
                </div>
                <span>Email Address</span>
                <input type="email" id="txtRegEmailAddress" className="form-control" onChange={()=>verifyEmailAddress()}/>
                <p id="errtxtEmailAddress" className="text-danger small"></p>
                <span>Password</span>
                <input type="password" id="txtRegPassword" className="form-control" onChange={()=>verifyPassword()}/>
                <p id="errtxtPassword" className="text-danger small"></p>
                <span>Confirm Password</span>
                <input type="password" id="txtConfirmPassword" className="form-control" onChange={()=>verifyPassword()}/>
                <p id="errConfirmpassword" className="text-danger small"></p>
                { firstName && lastName && email && password ?
                  <button className="btn btn-primary w-100 mt-2 mb-3">Register</button>
                  :  
                  <button className="btn btn-primary w-100 mt-2 mb-3" disabled>Register</button>
                }
                <p className=" forgot text-center small" onClick={()=>setPage('Login')}>Already have an Account? Login!</p>
              </div>
            }
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-12 right-container bg-secondary">
        <img src="src/assets/react.svg" className="react-photo"/>
      </div>
    </div>
  );
};
