import React, { Suspense } from "react";
import { useRecoilValue } from "recoil";
import { nameState } from "../../atoms/name";
import Aside from "../../components/aside/Aside.component";
import Client from "../../components/client/Client.component";
import HeaderDashboard from "../../components/header/HeaderDashboard.component";
import { MAINITEM } from "../../components/items/mainitem";
import MainItem from "../../components/items/MainItems.component";
import DashboardTemplate from "./DashboardTemplate";

export const Dashboard = () => {
  return (
    <DashboardTemplate>
      <div className="grid mx-4 w-full mt-10 md:mt-16 gap-4 grid-cols-1 md:grid-cols-4">
        {MAINITEM.map((i: any) => (
          <MainItem link={i.link} name={i.name} number={i.number} />
        ))}
      </div>
      <div className="w-full overflow-auto h-4/6 overflow-y-hidden">
        <Client />
      </div>
    </DashboardTemplate>
  );
};
