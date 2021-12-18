import React from "react";
import Aside from "../../components/aside/Aside.component";
import HeaderDashboard from "../../components/header/HeaderDashboard.component";
export const Dashboard = () => {
  return (
    <div className="site h-screen bg-gray-800">
      <div className="site__dashboard">
        <HeaderDashboard />
        <main className="site__dashboard-main h-screen flex flex-row">
          <Aside />
          <section className="site__section flex bg-gray-200 w-full"></section>
        </main>
      </div>
    </div>
  );
};
