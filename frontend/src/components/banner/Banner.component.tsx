import React, { useEffect, useState } from "react";
import { LANGUAGES } from "../../constants/languages";
import { MyText } from "../myText/MyText.component";
import { useRecoilState, useRecoilValue } from "recoil";
import { useHistory } from "react-router-dom";
import { introState } from "../../atom/intro";
import { url } from "inspector";

export const Banner = (props: any) => {
  let introParagraphe: any = useRecoilValue(introState);
  const history = useHistory();

  return (
    <div className="site__banner bg-gray-900" style={{ height: "60vh" }}>
      <div className="container h-full mx-auto">
        <div className="flex flex-col px-4 md:px-0 pt-4 md:pt items-center justify-center h-full">
          <MyText
            textUppercase="uppercase"
            myTextColor="text-gray-200"
            myText={`${LANGUAGES.home.name} ²`}
            variant="title"
          />
          <div className="site__banner-subTitle max-w-2xl">
            <MyText
              myTextAlign="text-center"
              myTextColor="text-gray-200"
              lineHeight="leading-10"
              paddingVertical="py-6"
              myText="Notre force passe par notre expérience et par l'écoute de nos clients avec qui nos spécialistes construisent chacune des étapes de leurs projets d'implémentation avec pour seul objectif : la réussite."
              variant="subTitle"
            />
          </div>
          <button
            onClick={() => history.push("/login")}
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className="uppercase hover:bg-blue-900 hover:text-gray-300 border-gray-300 bg-blue-300 border-2 rounded-sm text-gray-700 px-6 py-3 text-sm font-extrabold"
          >
            COMMENCER MAINTENANT
          </button>
        </div>
      </div>
    </div>
  );
};
