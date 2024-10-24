import React, { useState, useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import logo from '../../assets/images/Nyros-Technologies-logo-profile.jpg'; // Import the image
import "./index.css";

const key = {
    token: 'kkekeykey1key12key123key123!key123!@eeyey1ey12ey123ey123!ey123!@yy1y12y123y123!y123!@112123123!123!@22323!23!@33!3!@!!@'
};

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [check, setError] = useState({ isShow: false, content: "" });
    const navigate = useNavigate();
    const sessionToken = Cookies.get('sessionToken');

    useEffect(() => {
        if (sessionToken) {
            navigate('/', { replace: true });
        }
    }, [sessionToken, navigate]);

    const changeUserName = (event) => {
        setUsername(event.target.value);
    };

    const changePassword = (event) => {
        setPassword(event.target.value);
    };

    const submitForm = (event) => {
        event.preventDefault();

        if (username === "NyrosTech" && password === "Nyros@123!") {
            const yourtoken = key.token;
            Cookies.set('sessionToken', yourtoken, { expires: 7 });
            navigate('/', { replace: true });
            setUsername('');
            setPassword('');
        } else {
            setError({ isShow: true, content: "Invalid username or password!" });
        }
    };

    if (sessionToken) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="login">
            
            <div className="sub-page">
                <form onSubmit={submitForm}>
                    <h1>Login</h1>
                      <img src={logo} alt="Nyros Technologies Logo" className="logo" />
                    <label htmlFor="username">USERNAME</label>
                    <input 
                        id="username"
                        type="text" 
                        value={username} 
                        onChange={changeUserName} 
                    />
                    <label htmlFor="password">PASSWORD</label>
                    <input 
                        id="password"
                        type="password" 
                        value={password} 
                        onChange={changePassword} 
                    />
                    <button type="submit">Login</button>
                    {check.isShow && <p className="error-message">{check.content}</p>}
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
