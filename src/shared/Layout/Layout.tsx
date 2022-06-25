import React, { useEffect, useState } from "react";
import { MDBBox } from 'mdbreact';
import DiRoutes from "../Route/Route";
import { BrowserRouter as Router } from "react-router-dom";
import { Dirent } from "fs";
import Header from "../Header/Header";
import LayoutNav from "../LayoutNav/LayoutNav";
import './Layout.scss'
export const Layout = (props: any) => {
  const[routeName, setRouteName] = useState('');

  // useEffect(() => {
  //   setRouteName('');
  //   console.log(routeName);
  // }, []);

  return (
    <Router>
      <div id='layoutContainer' className="w-100" >
        <div id='layoutSubcontainer' className="">
        <div className="row justify-content-start">
      <div id="sidenave" className="col-2 fixed-left">
        <LayoutNav></LayoutNav>
        </div>
      <div id="mainLayout" className="col-9">
      <Header></Header>
      <div id='componentContainer'>
        <DiRoutes />
        </div>
        </div>
        </div>
      </div>
      </div>
    </Router>
  );
};

export default Layout; 