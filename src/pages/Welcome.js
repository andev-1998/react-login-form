import React from 'react';
import { useNavigate } from "react-router-dom";

const Welcome = () => {
    const navigate = useNavigate();
    const handleClickLogin = () => {
        navigate("/login");
    };
    
    return (
        <div>
            <button onClick={handleClickLogin} className='btn-login'>Login</button>
            <h1>Welcome to the App</h1>
        </div>
    );
};

export default Welcome;