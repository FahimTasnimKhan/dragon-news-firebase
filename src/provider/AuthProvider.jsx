import React, { createContext, useState } from "react";
export const AuthContext = createContext();
// 1 create Context
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const authdata = {
    user,
    setUser,
  };
  return <AuthContext value={authdata}>{children}</AuthContext>;
};

export default AuthProvider;
