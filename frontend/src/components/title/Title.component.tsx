import React from "react";

const Title = (props: any) => {
  if (typeof props.link === "undefined") {
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
  } else {
    return (
      <div className="flex flex-col md:flex-row">
        <p
          style={{
            fontFamily: " 'Poppins', sans-serif ",
          }}
          className="mx-4 p-4 text-center text-gray-200 rounded-md font-semibold mt-10 bg-gray-800 w-full md:w-9/12"
        >
          {props.title}
        </p>
        <a
          href={props.link}
          style={{
            fontFamily: " 'Poppins', sans-serif ",
          }}
          className="mx-4 p-4 text-center text-gray-200 rounded-md font-semibold mt-10 bg-gray-800 w-full md:w-3/12"
        >
          add
        </a>
      </div>
    );
  }
};

export default Title;
