import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { nameState } from "../../atoms/name";
import Aside from "../../components/aside/Aside.component";
import Client from "../../components/client/Client.component";
import HeaderDashboard from "../../components/header/HeaderDashboard.component";
import { MAINITEM } from "../../components/items/mainitem";
import MainItem from "../../components/items/MainItems.component";

const DashboardTemplate = (props: any) => {
  // const name = useRecoilValue(nameState);
  const name = localStorage.getItem("name");
  console.log("Name", name);
  document.title = "Dashboard (" + name + ")";
  return (
    <Suspense
      fallback={
        <div className="flex justify-center items-center h-screen">
          Chargement...
        </div>
      }
    >
      <div className="site h-screen bg-gray-800">
        <div className="site__dashboard">
          <HeaderDashboard />
          <main className="site__dashboard-main h-screen flex flex-row">
            <Aside />
            <section className="site__section flex flex-col bg-gray-200 w-full">
              {props.children}
            </section>
          </main>
        </div>
      </div>
    </Suspense>
  );
};

export default DashboardTemplate;
