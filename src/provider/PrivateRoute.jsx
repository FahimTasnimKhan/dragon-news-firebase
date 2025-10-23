import React, { use } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <span className="loading loading-spinner loading-xs"></span>;
  }
  if (user && user?.email) {
    return children;
  } else {
    return <Navigate to="/auth/login"></Navigate>;
  }
};

export default PrivateRoute;
