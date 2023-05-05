import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function registerUser(event) {
    event.preventDefault();
    const response = await fetch('http://localhost:8080/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });

    const data = await response.json();

    if(data.status === 'ok'){
      navigate('/')
    }else{
      alert('user already exist')
    }

  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(event);
  };

  return (
    <div className='maindiv'>
      <h1> </h1>
      <form onSubmit={handleSubmit}>
        <div className="headingsContainer">
          <h3>Create an account</h3>
          <p>Fill in your information to create an account</p>
        </div>
        <div className="mainContainer">
          <label htmlFor="username">Username</label>
          <input type="text" placeholder="Enter username" name="username" required value={username} onChange={handleUsernameChange} />

          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Enter email" name="email" required value={email} onChange={handleEmailChange} />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Enter password" name="password" required value={password} onChange={handlePasswordChange} />

          <button type="submit">Create Account</button>
          <p className="register">Already have an account? <Link to="/">Sign in here!</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
