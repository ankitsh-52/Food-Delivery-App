import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {

    // let btnName: string = "Login";
    const [btnName, setBtnName] = useState<string>("Login");
    const toggleLogin = () => {
        if(btnName === 'Login'){
            setBtnName('Logout')
        } else {
            setBtnName('Login')
        }
        // (btnName === 'Login') ? (btnName === 'Logout') : (btnName === 'Login')
    }
    
    return (
    <div className="header">
            <div className="logo">
            <img src="/logo.png" alt="App-logo" />
        </div>
        <div className="nav-itmes">
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li>Cart</li>
            <button className="login-btn" onClick={toggleLogin}>{btnName}</button>
        </ul>
        </div>
    </div>
);
};
