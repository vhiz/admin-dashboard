import "./navbar.scss";
import Search from "../../icons/search.png";
import Language from "../../icons/language.png";
import Moon from "../../icons/dark.png";
import Sun from "../../icons/sun.png";
import Fullscreen from "../../icons/fullscreen.png";
import Notification from "../../icons/notification.png";
import Chat from "../../icons/chat.png";
import Log from "../../icons/log.png";
import { DarkModeContext } from "../../context/darkMode";
import { useContext } from "react";
export default function Navbar() {
  const { toggle, darkMode } = useContext(DarkModeContext);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="search" />
          <img src={Search} alt="" />
        </div>
        <div className="items">
          <div className="item">
            <img src={Language} alt="" />
            <span>English</span>
          </div>
          <div className="item">
            {darkMode ? (
              <img src={Sun} alt="" onClick={toggle} />
            ) : (
              <img src={Moon} alt="" onClick={toggle} />
            )}
          </div>
          <div className="item">
            <img src={Fullscreen} alt="" />
          </div>
          <div className="item">
            <img src={Notification} alt="" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <img src={Chat} alt="" />
            <div className="counter">2</div>
          </div>
          <div className="item">
            <img src={Log} alt="" />
          </div>
          <div className="item">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDBEvK5mbLd1_i0sPZi5TgMCSJs13srRC53A&usqp=CAU"
              alt=""
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
