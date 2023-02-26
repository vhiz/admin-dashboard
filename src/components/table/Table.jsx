import "./table.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function Tables() {
  const rows = [
    {
      id: 1,
      product: "Game Pad",
      custormer: "Hommer Simpson",
      date: "25 Febuary",
      amount: 2000,
      method: "Online",
      status: "Pending",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlH8s1Aex8wjVGqgWzfB0uabOMGh_4uBR62WeZdUXI8Q&s",
    },
    {
      id: 2,
      product: "Game Pad",
      custormer: "Hommer Simpson",
      date: "25 Febuary",
      amount: 2000,
      method: "Online",
      status: "Approved",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlH8s1Aex8wjVGqgWzfB0uabOMGh_4uBR62WeZdUXI8Q&s",
    },
    {
      id: 3,
      product: "Game Pad",
      custormer: "Hommer Simpson",
      date: "25 Febuary",
      amount: 2000,
      method: "Online",
      status: "Pending",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlH8s1Aex8wjVGqgWzfB0uabOMGh_4uBR62WeZdUXI8Q&s",
    },
    {
      id: 4,
      product: "Game Pad",
      custormer: "Hommer Simpson",
      date: "25 Febuary",
      amount: 2000,
      method: "Online",
      status: "Pending",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlH8s1Aex8wjVGqgWzfB0uabOMGh_4uBR62WeZdUXI8Q&s",
    },
    {
      id: 5,
      product: "Game Pad",
      custormer: "Hommer Simpson",
      date: "25 Febuary",
      amount: 2000,
      method: "Online",
      status: "Pending",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlH8s1Aex8wjVGqgWzfB0uabOMGh_4uBR62WeZdUXI8Q&s",
    },
    {
      id: 6,
      product: "Game Pad",
      custormer: "Hommer Simpson",
      date: "25 Febuary",
      amount: 2000,
      method: "Online",
      status: "Approved",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlH8s1Aex8wjVGqgWzfB0uabOMGh_4uBR62WeZdUXI8Q&s",
    },
  ];
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Tracking Id</TableCell>
            <TableCell className="tableCell">Product</TableCell>
            <TableCell className="tableCell">Customer</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Payment Method</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  <img src={row.img} alt="" />
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.custormer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
