import { useState } from "react";

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
            <li>Home</li>
            <li>About Us</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login-btn" onClick={toggleLogin}>{btnName}</button>
        </ul>
        </div>
    </div>
);
};
