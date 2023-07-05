import React, { useState } from 'react';
import './Login.css';
import background from './collective-consciousness-ai-dev.png';

function Login() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = event => {
        event.preventDefault();
        // Here you would typically send the form data to your backend
        console.log(`Logging in...\nEmail: ${email}, Password: ${password}`);
    };

    const handleSignUp = event => {
        event.preventDefault();
        // Here you would typically send the form data to your backend
        console.log(`Creating account...\nUsername: ${username}, Email: ${email}, Password: ${password}`);
    };

    return (
	<div className="login-container" style={{backgroundImage: `url(${background})`}}>
            <h1 className="login-title">Log In / Sign Up</h1>
            <form onSubmit={handleLogin} className="login-form">
                <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username (for sign up)" className="login-input" />
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required className="login-input" />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required className="login-input" />
                <button type="submit" className="login-button">Log In</button>
                <button onClick={handleSignUp} className="signup-button">Sign Up</button>
            </form>
        </div>
    );
}

export default Login;
