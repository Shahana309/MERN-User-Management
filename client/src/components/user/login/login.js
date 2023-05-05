import React, { useState } from 'react';
import { useNavigate,Link } from 'react-router-dom';
import './login.css';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function loginUser(event) {
        event.preventDefault();
        const response = await fetch('http://localhost:8080/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await response.json();
        if(data.token !=='noUser'){
            localStorage.setItem('token',data.token)
            
            navigate('/home')
        } else {
            alert('Please check your username and password')
        }
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        loginUser(event)
        console.log(`Login credentials: email=${email}, password=${password}`);
    };

    return (
        <div className='maindiv'>
            <h1> </h1>
            <form onSubmit={handleSubmit} action="">

                <div className="headingsContainer">
                    <h3>Sign in</h3>
                    <p>Sign in with your username and password</p>
                </div>

                <div className="mainContainer">
                    <label htmlFor="username">Your username</label>
                    <input type="text" placeholder="Enter Username" name="username" onChange={handleEmailChange} required />

                    <label htmlFor="pswrd">Your password</label>
                    <input type="password" placeholder="Enter Password" name="pswrd" onChange={handlePasswordChange} required />

                    <button type="submit">Login</button>
                    <p className="register">Not a member? <Link to="/signup">Register here!</Link></p>                </div>
            </form>
        </div>
    );
};

export default Login;