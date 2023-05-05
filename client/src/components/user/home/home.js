import React, {useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './home.css';

function HomePage() {
  const navigate = useNavigate()
    useEffect(() => {
      const token = localStorage.getItem('token')
      if(token) {
        
     }
    }, [])
  return (
    <div className="homepage">
      <div className="navbar">
        <Link to="/home" className="active">Home</Link>
        <Link to="/userProfile" className="profile">Profile</Link>
        <Link to="/" className="logout">Logout</Link>
      </div>
 
      <div className="content">
        <h1>Welcome to my website!</h1>
        <p>This is a basic home page with a navigation bar that includes a "Logout" button and a "Profile" button.</p>
      </div>
    </div>
  );
}

export default HomePage;
