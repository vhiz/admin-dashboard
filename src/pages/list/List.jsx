import Datatable from "../../components/datatable/Datatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./list.scss";

export default function List() {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContanier">
        <Navbar />
        <Datatable />
      </div>
    </div>
  );
}
