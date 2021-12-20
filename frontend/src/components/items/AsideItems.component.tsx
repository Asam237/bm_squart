import React from "react";

const AsideItems = (props: any) => {
  return (
    <div className="aside__one-item pt-4 flex items-center">
      <img src={props.image} alt="" className="w-4 h-4 mr-3" />
      <a
        className="text-gray-200 font-bold cursor-pointer uppercase hover:underline text-sm"
        href={props.link}
        style={{
          fontFamily: " 'Poppins', sans-serif ",
          fontSize: 16,
        }}
      >
        {props.name}
      </a>
    </div>
  );
};
export default AsideItems;
