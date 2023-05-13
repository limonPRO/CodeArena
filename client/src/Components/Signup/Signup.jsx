import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Signup.css";
import { backendUrl } from "../../constants.js";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  return (
    <div id='signup' className='flex-col'>
      <h1>Signup</h1>
      <div className='signup-form'>
        <div className='subform'>
          <label htmlFor='email'>Email: </label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type='text'
            name='email'
            placeholder='Your Email'
          />
        </div>

        <div className='subform'>
          <label htmlFor='password'>Password: </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            type='password'
            name='password'
            placeholder='Your Password'
          />
        </div>

        <button
          type='submit'
          id='test'
          onClick={async (e) => {
            const response = await fetch(`${backendUrl}/signup`, {
              method: "POST",
              body: JSON.stringify({
                email: email,
                password: password,
              }),
            });

            const json = await response.json();
            console.log(json.messege);
            if (response.status === 200) { // check for successful signup
              navigate("/login"); // navigate to login page
            }
          }}
        >
          SIGNUP
        </button>
      </div>
    </div>
  );
};

export default Signup;

// neetcode1@gmail.com
