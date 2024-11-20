import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import CreateCompany from "../components/CreateCompany";
import JoinCompany from "../components/JoinCompany";
import LoadingApproval from "../components/LoadingApproval";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  if (!user) return <p>Loading...</p>;

  if (!user.company_id && user.status === "pending") {
    return (
      <div className="flex flex-col items-center space-y-4">
        <h1 className="text-xl">Welcome, {user.name}!</h1>
        <p>What would you like to do?</p>
        <CreateCompany />
        <JoinCompany />
      </div>
    );
  }

  if (user.company_id && user.status === "pending") {
    return <LoadingApproval />;
  } else {
    return (
      <>
        <p>Main Dashboard</p>;<p>Company ID: {user.company_id}</p>;
        <p>Role: {user.role}</p>;<p>Status: {user.status}</p>;
      </>
    );
  }
};

export default Dashboard;
