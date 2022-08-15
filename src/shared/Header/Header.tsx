import React from 'react';
// import './Header.scss'
import { Link } from "react-router-dom";
import {useState } from "react";

const Header =(props: any) =>{
    return(<>
    <div className="header_top">
      <div className='top_head d-flex align-items-center'>
        <ul className="nav">
          <li className="nav-item">
            <div className='toggle_icon' onClick={() => props.handleToggle()} ><i className="fa fa-bars"></i></div>
          </li>
        </ul>
          <ul className="nav ms-auto">
            {/* <li className="nav-item">
            <Link to="/Dashboard" className="nav-link"> Home</Link>
            <Link to="/Purchase" className="nav-link">Purchase</Link>
            <Link to="/Sales" className="nav-link">Sales</Link>
            <Link to="/Product" className="nav-link">Product</Link>
            <Link to="/SubProduct" className="nav-link">Sub Product</Link>
            </li> */}
            <li className='nav-item user_profile'>
            <i className="fas fa-user"></i>
            <div className='user_setting'>
            <ul className="nav flex-column">
              <li className="nav-item">
                <Link to="" className="nav-link d-flex align-items-center"><i className="fas fa-id-badge me-2"></i>Profile</Link></li>
                <li className="nav-item">
                <Link to="" className="nav-link d-flex align-items-center"><i className="fas fa-sign-out-alt me-2"></i>LogOut</Link>
              </li>
            </ul>
            </div>
            </li>
          </ul>
      </div>
</div>
    </>)
}

export default Header;