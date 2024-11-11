import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './LoginSignup.scss';
import backgroundImage from './image.png'; 

function LoginSignup() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login-signup-container">
      <div className="image-container">
        <img src={backgroundImage} alt="Background" />
      </div>
      <div className="form-container">
        <h1 className="title"> Bulk SMS</h1>
        <p className="subtitle">Welcome to the Bulk SMS Platform</p>
        <div className="inputs">
          <label>Username</label>
          <div className="input-wrapper">
            <FontAwesomeIcon icon={faUser} className="icon" />
            <input type="text" placeholder="Username" />
          </div>
          <label>Password</label>
          <div className="input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <FontAwesomeIcon
              icon={showPassword ? faEyeSlash : faEye}
              className="icon toggle-password-icon"
              onClick={togglePasswordVisibility}
            />
          </div>
          <button>Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default LoginSignup;
