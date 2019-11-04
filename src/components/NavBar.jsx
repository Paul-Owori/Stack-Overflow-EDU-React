import React, { Component } from "react";

// Stylesheets
import "./../stylesheets/modules/navbar.css";
import { Link, NavLink as RouterNavLink } from "react-router-dom";


class NavBar extends Component {
    state = {
        checked: false
    };

    toggleChecked = () => {
        this.setState({ checked: !this.state.checked })
    }

    render() {
        return (
            <div id="navbar">

                <span id="logo"><Link to="/">Stack-Overflow EDU</Link> </span>

                <ul id="links">
                    <li><Link to="/" >Home</Link></li>
                    <li><Link to="/signup">Login / Signup</Link></li>
                    <li><Link to="/viewqns">View Questions</Link></li>
                    <li><Link to="/ask">Ask a Question</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

                <div id="dropDownContainer">
                    <input type="checkbox" name="navMenu" id="navMenu" checked={this.state.checked} onChange={this.toggleChecked} />
                    <label htmlFor="navMenu" className="dropBtn">
                        <i className="fas fa-bars"></i>
                    </label>
                    <ul className="dropDownLinks">
                        <Link onClick={this.toggleChecked} to="/">
                            <li>Home</li>
                        </Link>
                        <Link onClick={this.toggleChecked} to="/signup">
                            <li>Login / Signup</li>
                        </Link>
                        <Link onClick={this.toggleChecked} to="/viewqns">
                            <li>View Questions</li>
                        </Link>
                        <Link onClick={this.toggleChecked} to="/ask">
                            <li>Ask a Question</li>
                        </Link>
                        <Link onClick={this.toggleChecked} to="/about">
                            <li>About</li>
                        </Link>
                    </ul>
                </div>
            </div>)
    }
}

export default NavBar;
