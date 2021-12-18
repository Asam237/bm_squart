import React from "react";

const AsideItems = (props: any) => {
  return (
    <div className="aside__one-item pt-4">
      <a
        className="text-gray-200 font-bold cursor-pointer uppercase hover:underline text-sm"
        href={props.linj}
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
