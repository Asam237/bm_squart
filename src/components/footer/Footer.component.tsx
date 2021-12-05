import React from "react";
import { SOCIALS } from "../../assets/socials";
import { MyText } from "../myText/MyText.component";

export const Footer = (props: any) => {
  return (
    <div className="site__footer border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row px-4 md:px-0 pt-4 md:pt items-center md:justify-start md:justify-between">
          <MyText
            myTextAlign="text-center"
            myTextColor="text-gray-900"
            lineHeight="leading-10"
            paddingVertical="py-6"
            myText={props.title}
            variant="title"
          />
          <ul className="flex w-full md:w-1/5 flex-col md:flex-row items-center justify-between">
            {SOCIALS.map((item: any) => (
              <li key={item.id}>
                <a
                  style={{
                    fontFamily: " 'Poppins', sans-serif ",
                    fontSize: 14,
                  }}
                  className="text-gray-600"
                  href={item.link}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="site__footer">
            <p
              style={{
                fontFamily: " 'Poppins', sans-serif ",
                fontSize: 14,
              }}
              className="text-gray-800"
            >
              © 2021 BM Square, All Rights Reserved.
            </p>
            <p
              style={{
                fontFamily: " 'Poppins', sans-serif ",
                fontSize: 14,
              }}
              className="text-gray-800"
            >
              Made by Asam.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
