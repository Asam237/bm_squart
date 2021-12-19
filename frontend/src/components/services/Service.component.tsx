import React from "react";
import { ITEMS } from "../../assets/items";
import { MyText } from "../myText/MyText.component";
import servicepicture from "../../assets/img/service.png";

export const Service = (props: any) => {
  return (
    <div id="aboutus" className="site__service py-8 md:py-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {ITEMS.map((item: any) => (
            <div className="site__service-item">
              <div className="border-2 w-20 h-20 mx-auto flex mb-4 justify-center items-center p-2 border-gray-900 rounded-full">
                <img src={item.image} className="w-12 mx-auto  h-12" />
              </div>
              <MyText
                textUppercase="uppercase"
                myTextColor="text-gray-800"
                myText={item.title}
                myTextAlign="text-center"
                variant="title"
              />
              <div className="site__banner-subTitle max-w-2xl">
                <MyText
                  myTextAlign="text-center"
                  myTextColor="text-gray-600"
                  lineHeight="leading-10"
                  paddingVertical="py-2"
                  myText={item.description}
                  variant="subTitle"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
