import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function AppDashboard() {
  const { user } = useContext(AuthContext);

  return (
    <>
      <div>Hello World</div>
    </>
  );
}

export default AppDashboard;
