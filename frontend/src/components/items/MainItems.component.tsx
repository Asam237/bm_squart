import React from "react";

const MainItem = (props: any) => {
  return (
    <div className="section__item px-4 rounded-md flex bg-gray-600 justify-between items-center h-32 w-full">
      <div className="flex flex-col">
        <p
          style={{
            fontFamily: " 'Poppins', sans-serif ",
            fontSize: 15,
          }}
          className="text-gray-200 font-semibold pt-2"
        >
          {props.name}
        </p>
      </div>
      <p
        style={{
          fontFamily: " 'Poppins', sans-serif ",
          fontSize: 15,
        }}
        className="text-gray-200 font-semibold pt-2"
      >
        {props.number}
      </p>
    </div>
  );
};

export default MainItem;
