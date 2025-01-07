import React, { useEffect, useState } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./shard/Navbar";
import Footer from "./shard/Footer";
import { Cart, CategoryIdData, Home, Product, SearchProduct } from "./pages";
import SingleProduct from "./pages/SingleProduct";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import HomeUser from "./user/HomeUser";

const App: React.FC = () => {
  const [statusCheck, setStatusCheck] = useState<boolean | null>(null);
  useEffect(() => {
    const statusData = JSON.parse(localStorage.getItem('usersData') || '[]');
    const userStatus = statusData.find((ele: any) => ele.status === true);
    setStatusCheck(userStatus ? true : false);
  }, []);
  const handleLoginStatusChange = () => {
    const statusData = JSON.parse(localStorage.getItem('usersData') || '[]');
    const userStatus = statusData.find((ele: any) => ele.status === true);
    setStatusCheck(userStatus ? true : false);
  };

  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={statusCheck === null ? null : statusCheck ? <HomeUser /> : <Home />}
          />
          <Route path="/Product" element={<Product />} />
          <Route path="/CategoryIdData" element={<CategoryIdData />} />
          <Route path="/SingleProduct/:id" element={<SingleProduct />} />
          <Route path="/SearchProduct" element={<SearchProduct />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Login" element={<Login onLogin={handleLoginStatusChange} />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
};

export default App;
