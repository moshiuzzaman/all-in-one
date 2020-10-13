import React from 'react';
import logo from '../../../../images/logo.png'
import { Link } from 'react-router-dom';
import "./ShopHeader.css"

const ShopHeader = () => {
    return (
        <div className="shop-header">
            <img src={logo} alt=""/>
            <nav className="shop-menu">
                <Link to="/home">Home</Link>
                <Link to="/shop">Shop</Link>
                <Link to="/perview">Preview</Link>
                <Link to="/manegment">Manegment</Link>
            </nav>
        </div>
    );
};

export default ShopHeader;