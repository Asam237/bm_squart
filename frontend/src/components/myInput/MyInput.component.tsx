import React from "react";

export const MyInput = (props: any) => {
    return (
        <div className="py-2 w-full">
            <p
                style={{
                    fontFamily: " 'Varela Round', sans-serif"
                }}
                className="text-sm font-bold">{props.title}</p>
            <input type={props.myInputText} className="input rounded-md input__field w-full p-2 mt-2" style={{ borderWidth: '1px' }} />
        </div>
    )
}