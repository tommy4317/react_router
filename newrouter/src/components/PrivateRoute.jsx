import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../context/AuthContext";

const PrivateRoute = ({ children, ...rest }) => {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) => {
        return isLoggedIn ? children : <Redirect to="/" />;
      }}
    />
  );
};

export default PrivateRoute;
