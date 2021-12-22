import React from "react";

const Title = (props: any) => {
  return (
    <p
      style={{
        fontFamily: " 'Poppins', sans-serif ",
      }}
      className="mx-4 p-4 text-center text-gray-200 rounded-md font-semibold mt-10 bg-gray-800"
    >
      {props.title}
    </p>
  );
};

export default Title;
