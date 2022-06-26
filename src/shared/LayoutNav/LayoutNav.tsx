import { fontSize } from "@mui/system";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import './LayoutNav.scss';
export const LayoutNav = () => {

    const openNav = () => {
        const sidnavElement = document.getElementById('mySidenav');
        const mainElement = document.getElementById("main");
        if (sidnavElement != null && mainElement != null) {
            sidnavElement.style.width = "250px";
            mainElement.style.marginLeft = "250px";
            // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }
    }

    const closeNav = () => {

        const sidnavElement = document.getElementById('mySidenav');
        const mainElement = document.getElementById("main");
        if (sidnavElement != null && mainElement != null) {
        sidnavElement.style.width = "0";
        mainElement.style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
        }
    }


    return (
    <>
<aside className="sidebar_aside">
    <div className="logo"> Logo</div>
    <nav className="sidebar_nav">
        <ul className="nav flex-column mb-0">
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-home me-2"></i>Dashboard</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center d-flex align-items-center"><i className="fa fa-table me-2"></i>Table <i className="fa fa-angle-right ms-auto" aria-hidden="true"></i></Link>
          <ul className="nav flex-column mb-0 sub_ul">
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-angle-right me-2"></i>Modal</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-angle-right me-2"></i>Component</Link></li>
            </ul>
          </li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-address-book me-2"></i>Modal</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-bookmark me-2"></i>Component</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-calculator me-2"></i>Button</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-clone me-2"></i>Card</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-compass me-2"></i>Link</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-home me-2"></i>LogOut</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-home me-2"></i>Dashboard</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-table me-2"></i>Table</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-address-book me-2"></i>Modal</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-bookmark me-2"></i>Component</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-calculator me-2"></i>Button</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-clone me-2"></i>Card</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-compass me-2"></i>Link</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-home me-2"></i>LogOut</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-home me-2"></i>Dashboard</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-table me-2"></i>Table</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-address-book me-2"></i>Modal</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-bookmark me-2"></i>Component</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-calculator me-2"></i>Button</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-clone me-2"></i>Card</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-compass me-2"></i>Link</Link></li>
          <li className="nav-item"><Link to="/" className="nav-link d-flex align-items-center"><i className="fa fa-home me-2"></i>LogOut</Link></li>
        </ul>
    </nav>
  </aside>
    </>
    )
}

export default LayoutNav;