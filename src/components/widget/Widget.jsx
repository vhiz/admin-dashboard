import "./widget.scss";
import Profile from "../../icons/profile.png";
import Wallet from "../../icons/wallet.png";
import Shoping from "../../icons/shoping.png";
import Money from "../../icons/money.png";

import { KeyboardArrowUp } from "@mui/icons-material";
export default function Widget({ type }) {
  let data;

  const amount = 100;
  const diff = 20;

  switch (type) {
    case "user":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: Profile,
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: Shoping,
      };
      break;
    case "earnings":
      data = {
        title: "EARNINGS",
        isMoney: true,
        link: "See all earnings",
        icon: Money,
      };
      break;
    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: Wallet,
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney && "$"} {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUp />
          {diff}%
        </div>
        <img src={data.icon} alt="" />
      </div>
    </div>
  );
}
