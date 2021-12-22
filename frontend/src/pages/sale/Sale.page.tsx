import React from "react";
import Client from "../../components/client/Client.component";
import Title from "../../components/title/Title.component";
import DashboardTemplate from "../dashboard/DashboardTemplate";

const Sale = () => {
  return (
    <DashboardTemplate>
      <div className="w-full overflow-auto h-4/6 overflow-y-hidden">
        <Title title="Sales" link="/dashboard/add-sale" />
        <Client />
      </div>
    </DashboardTemplate>
  );
};

export default Sale;
