import Chart from "../../components/chart/Chart";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Tables from "../../components/table/Table";
import "./one.scss";

export default function Single() {
  return (
    <div className="single">
      <Sidebar />
      <div className="singleContanier">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="eTitle">Information</h1>
            <div className="item">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcvjzzO5mzwC_s4VoPloxEcJBavs9gxK_bg&usqp=CAU"
                alt=""
              />
              <div className="details">
                <h1>Vhiz</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">vhiz@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">123234556</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">vhiz@gmail.com</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">Nigeria</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title={"User spending (last 6 Months)"} />
          </div>
        </div>
        <div className="bottom">
          <h1 className="eTitle">Last Transactions</h1>
          <Tables />
        </div>
      </div>
    </div>
  );
}
