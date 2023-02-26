import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../dataSource";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Datatable() {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const actionColum = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/users/1"} style={{ textDecoration: "none" }}>
              <div className="view">View</div>
            </Link>
            <div className="delete" onClick={() => handleDelete(params.row.id)}>
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="dataTitle">
        Add New User
        <Link to={"/users/new"} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={userColumns.concat(actionColum)}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
        className="datagrid"
      />
    </div>
  );
}
