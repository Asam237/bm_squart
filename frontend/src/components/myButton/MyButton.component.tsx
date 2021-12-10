import React from "react";

export const MyButton = (props: any, context: any) => {
    return (
        <li style={{ fontFamily: " 'Varela Round', sans-serif" }} className="hidden  mt-3 md:mt-0 md:mr-4 md:inline-block">
            <button className="uppercase hover:bg-blue-900 hover:text-gray-300 border-gray-300 bg-blue-300 border-2 rounded-sm text-gray-700 px-4 py-2 text-sm font-extrabold" onClick={() => context.history.push(props.myLink)} >{props.title}</button>
        </li>
    )
}