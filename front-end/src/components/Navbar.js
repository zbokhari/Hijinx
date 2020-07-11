import './navbar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
        return (
            <div className="nav">
                <div className="nav-items">
                    <Link className="item" to="/music">Music</Link>
                    <Link className="item" to="/videos">Videos</Link>
                    <Link className="item" to="/mixes">Mixes</Link>
                    <Link className="item" to="/discography">Discography</Link>
                    <Link className="item" to="/contact">Contact</Link>
                </div>
            </div>
        );
    }
export default Navbar;
