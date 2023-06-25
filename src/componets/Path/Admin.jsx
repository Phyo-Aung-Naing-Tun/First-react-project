import React from "react";
import { Navigate } from "react-router-dom";

const Admin = () => {
  if (localStorage.getItem("token")) {
    return <div>Admin</div>;
  } else <Navigate to={"/contant"} />;
};

export default Admin;
