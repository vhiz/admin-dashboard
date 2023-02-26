import "./sidebar.scss";
import Dashboard from "../../icons/dashboard.png";
import Delivery from "../../icons/delivery.png";
import Health from "../../icons/health.png";
import Log from "../../icons/log.png";
import Logout from "../../icons/logout.png";
import Notification from "../../icons/notification.png";
import Order from "../../icons/order.png";
import Product from "../../icons/product.png";
import Profile from "../../icons/profile.png";
import Setting from "../../icons/settings.png";
import Stats from "../../icons/stats.png";
import Users from "../../icons/users.png";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkMode";
import { useContext } from "react";
export default function Sidebar() {
  const { toggle, } = useContext(DarkModeContext);
  return (
    <div className="sidebar">
      <div className="top">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <span>Admin dashboard</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p>MAIN</p>
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <li>
              <img src={Dashboard} alt="" className="icon" />
              <span>Dasboard</span>
            </li>
          </Link>
          <p>LIST</p>
          <Link to={"/users"} style={{ textDecoration: "none" }}>
            <li>
              <img src={Users} alt="" className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to={"/products"} style={{ textDecoration: "none" }}>
            <li>
              <img src={Product} alt="" className="icon" />
              <span>Products</span>
            </li>
          </Link>
          <li>
            <img src={Order} alt="" className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <img src={Delivery} alt="" className="icon" />
            <span>Delivery</span>
          </li>
          <p>USEFUL</p>
          <li>
            <img src={Stats} alt="" className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <img src={Notification} alt="" className="icon" />
            <span>Notifications</span>
          </li>
          <p>SERVICE</p>
          <li>
            <img src={Health} alt="" className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <img src={Log} alt="" className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <img src={Setting} alt="" className="icon" />
            <span>Settings</span>
          </li>
          <p>USER</p>
          <li>
            <img src={Profile} alt="" className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <img src={Logout} alt="" className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="colorOption" onClick={toggle}></div>

        <div className="colorOption" onClick={toggle}></div>
      </div>
    </div>
  );
}
