import * as React from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";
const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper blue">
                <a href="/" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/fgb">Components</NavLink></li>
                    <li><NavLink to="/">JavaScript</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};
export default Nav;
