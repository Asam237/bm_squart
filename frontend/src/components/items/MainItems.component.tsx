import React from "react";

const MainItem = (props: any) => {
  return (
    <div className="section__item px-4 cursor-pointer rounded-md flex bg-gray-700 hover:bg-gray-800 justify-between items-center h-32 w-11/12">
      <a href={props.link}>
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
      </a>
    </div>
  );
};

export default MainItem;
