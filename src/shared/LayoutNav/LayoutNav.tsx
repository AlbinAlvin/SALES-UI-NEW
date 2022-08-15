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
        <li className="nav-item"><Link to="/Dashboard" className="nav-link d-flex align-items-center"><i className="fa fa-home me-2"></i>Home</Link></li>
        <li className="nav-item"><Link to="/Purchase" className="nav-link d-flex align-items-center"><i className="fas fa-shopping-basket me-2"></i>Purchase</Link></li>
        <li className="nav-item"><Link to="/Sales" className="nav-link d-flex align-items-center"><i className="fas fa-credit-card me-2"></i>Sales</Link></li>
        <li className="nav-item"><Link to="/Product" className="nav-link d-flex align-items-center"><i className="fas fa-hockey-puck me-2"></i>Product</Link></li>
        <li className="nav-item"><Link to="/SubProduct" className="nav-link d-flex align-items-center"><i className="fas fa-store-alt me-2"></i>Sub Product</Link></li>
        <li className="nav-item"><Link to="/SubProduct" className="nav-link d-flex align-items-center"><i className="fas fa-store-alt me-2"></i>Alert</Link></li>
        </ul>
    </nav>
  </aside>
    </>
    )
}

export default LayoutNav;