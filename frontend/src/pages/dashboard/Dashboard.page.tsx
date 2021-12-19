import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { nameState } from "../../atoms/name";
import Aside from "../../components/aside/Aside.component";
import Client from "../../components/client/Client.component";
import HeaderDashboard from "../../components/header/HeaderDashboard.component";
import { MAINITEM } from "../../components/items/mainitem";
import MainItem from "../../components/items/MainItems.component";

export const Dashboard = () => {
  const name = useRecoilValue(nameState);
  document.title = "Dashboard (" + name + ")";
  return (
    <Suspense fallback="chargement...">
      <div className="site h-screen bg-gray-800">
        <div className="site__dashboard">
          <HeaderDashboard />
          <main className="site__dashboard-main h-screen flex flex-row">
            <Aside />
            <section className="site__section flex flex-col bg-gray-200 w-full">
              <div className="grid mx-4 w-full mt-10 md:mt-16 gap-4 grid-cols-1 md:grid-cols-4">
                {MAINITEM.map((i: any) => (
                  <MainItem name={i.name} number={i.number} />
                ))}
              </div>
              <div className="w-full">
                <Client />
              </div>
            </section>
          </main>
        </div>
      </div>
    </Suspense>
  );
};
