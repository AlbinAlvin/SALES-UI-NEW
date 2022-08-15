import React, { useEffect, useState } from "react";
import { MDBBox } from 'mdbreact';
import DiRoutes from "../Route/Route";
import { BrowserRouter as Router } from "react-router-dom";
import { Dirent } from "fs";
import Header from "../Header/Header";
import LayoutNav from "../LayoutNav/LayoutNav";
import './Layout.scss'
import Alert from "../alert";
import Toast from '../toast'
export const Layout = (props: any) => {
  const[routeName, setRouteName] = useState('');

  const [isActive, setActive] = useState(false);
  const toggleClass = () => {
    setActive(!isActive);
  };

  // useEffect(() => {
  //   setRouteName('');
  //   console.log(routeName);
  // }, []);

  return (
    <Router>
      <div  className={"main_wrapper" +(isActive ? ' isopen' : ' ')} >
      <div  className="side_bar">
        <LayoutNav></LayoutNav>
        </div>
      <div  className="mainlayout">
      <Header handleToggle={()=>toggleClass()} ></Header>
      <div id='componentContainer' className="content_layout">
        <DiRoutes />
        </div>
        <div className="footer text-center">Thia is footer</div>
        </div>
       {/* <Alert/> */}
      </div>
    </Router>
  );
};

export default Layout; 