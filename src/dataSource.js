export const userRows = [
  {
    id: 1,
    username: "Hommer Simpson",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcvjzzO5mzwC_s4VoPloxEcJBavs9gxK_bg&usqp=CAU",
    status: "active",
    email: "hommer@gmail.com",
    age: 40,
  },
  {
    id: 2,
    username: "Marge Simpson",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcvjzzO5mzwC_s4VoPloxEcJBavs9gxK_bg&usqp=CAU",
    status: "passive",
    email: "marge@gmail.com",
    age: 30,
  },
  {
    id: 3,
    username: "Petter Griffin",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcvjzzO5mzwC_s4VoPloxEcJBavs9gxK_bg&usqp=CAU",
    status: "pending",
    email: "petter@gmail.com",
    age: 43,
  },
  {
    id: 4,
    username: "Lois Griffin",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcvjzzO5mzwC_s4VoPloxEcJBavs9gxK_bg&usqp=CAU",
    status: "active",
    email: "lois@gmail.com",
    age: 20,
  },
  {
    id: 5,
    username: "Stwie",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcvjzzO5mzwC_s4VoPloxEcJBavs9gxK_bg&usqp=CAU",
    status: "active",
    email: "stwie@gmail.com",
    age: 40,
  },
  {
    id: 6,
    username: "Jenifer",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcvjzzO5mzwC_s4VoPloxEcJBavs9gxK_bg&usqp=CAU",
    status: "active",
    email: "jenifer@gmail.com",
    age: 18,
  },
  {
    id: 7,
    username: "Potter",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcvjzzO5mzwC_s4VoPloxEcJBavs9gxK_bg&usqp=CAU",
    status: "active",
    email: "potter@gmail.com",
    age: 21,
  },
  {
    id: 8,
    username: "Harry",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcvjzzO5mzwC_s4VoPloxEcJBavs9gxK_bg&usqp=CAU",
    status: "passive",
    email: "harry@gmail.com",
    age: 42,
  },
  {
    id: 9,
    username: "Kruise",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcvjzzO5mzwC_s4VoPloxEcJBavs9gxK_bg&usqp=CAU",
    status: "active",
    email: "kruise@gmail.com",
    age: 48,
  },
  {
    id: 10,
    username: "Vhiz",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBcvjzzO5mzwC_s4VoPloxEcJBavs9gxK_bg&usqp=CAU",
    status: "active",
    email: "vhiz@gmail.com",
    age: 20,
  },
];

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      );
    },
  },
];
