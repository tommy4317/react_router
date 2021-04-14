import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router-dom";

const Admin = () => {
  const { isLoggedIn } = useContext(AuthContext);

  //simple if statement with redirect route
  // if (!isLoggedIn) {
  //   return <Redirect to="/" />;
  // }

  return (
    <div>
      <h1>Admin</h1>
    </div>
  );
};

export default Admin;
