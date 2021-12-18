import React from "react";
import Aside from "../../components/aside/Aside.component";
import HeaderDashboard from "../../components/header/HeaderDashboard.component";
import { MAINITEM } from "../../components/items/mainitem";
import MainItem from "../../components/items/MainItems.component";
export const Dashboard = () => {
  return (
    <div className="site h-screen bg-gray-800">
      <div className="site__dashboard">
        <HeaderDashboard />
        <main className="site__dashboard-main h-screen flex flex-row">
          <Aside />
          <section className="site__section flex bg-gray-200 w-full">
            <div className="grid mx-4 w-full mt-10 md:mt-16 gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
              {MAINITEM.map((i: any) => (
                <MainItem name={i.name} number={i.number} />
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};
