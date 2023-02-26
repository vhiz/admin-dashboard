import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./pages/list/List";
import New from "./pages/new/New";
import Login from "./pages/login/Login";
import { productInputs, userInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkMode";
import "./app.scss";
import One from "./pages/One/One";

export default function App() {
  const { darkMode } = useContext(DarkModeContext);
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<List />} />
          <Route path="/users/:userid" element={<One />} />
          <Route
            path="/users/new"
            element={<New inputs={userInputs} title={"Add New User"} />}
          />
          <Route path="/products" element={<List />} />
          <Route path="/products/:productid" element={<One />} />
          <Route
            path="/products/new"
            element={<New inputs={productInputs} title={"Add New Product"} />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
