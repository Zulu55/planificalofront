// src/components/Logout.js
import React, { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const Logout = () => {
  const { logout } = useContext(AuthContext);

  const handleLogout = async () => {
    await logout();
    window.location.reload();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default Logout;
