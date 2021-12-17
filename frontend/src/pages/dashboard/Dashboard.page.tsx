import React from "react";
import HeaderDashboard from "../../components/header/HeaderDashboard.component";
export const Dashboard = () => {
  return (
    <div className="site h-screen bg-gray-800">
      <div className="site__dashboard">
        <HeaderDashboard />
        <main className="site__dashboard-main h-screen flex flex-row">
          <aside className="site__aside hidden md:flex w-60 h-screen bg-red-500"></aside>
          <section className="site__section flex bg-gray-400 w-full"></section>
        </main>
      </div>
    </div>
  );
};
