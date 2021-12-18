import React from "react";
import { ASIDEITEMS } from "../items/asideitem";
import AsideItems from "../items/AsideItems.component";

const Aside = () => {
  return (
    <aside className="site__aside hidden md:flex w-80 h-screen bg-gray-900 items-center p-10 flex-col ">
      <img src="" className="w-32 h-32 bg-gray-300 rounded-full" />
      <h1
        style={{
          fontFamily: " 'Poppins', sans-serif ",
          fontSize: 15,
        }}
        className="text-gray-200 font-semibold pt-2"
      >
        Abba Sali
      </h1>
      <h1
        style={{
          fontFamily: " 'Poppins', sans-serif ",
          fontSize: 12,
        }}
        className="text-gray-200 font-normal"
      >
        (customer)
      </h1>
      <div className="site__aside__items pt-6">
        <ul>
          <li>
            {ASIDEITEMS.map((i: any) => (
              <AsideItems name={i.name} link={i.link} />
            ))}
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Aside;
