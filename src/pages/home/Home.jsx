import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import "./home.scss";

export default function Home() {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContanier">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="earnings" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart aspect={2 / 1} title={"Generated in the last 6 months"} />
        </div>
        <div className="listContanier">
          <div className="listTitle">Latest Transactions</div>
          <Tables />
        </div>
      </div>
    </div>
  );
}
