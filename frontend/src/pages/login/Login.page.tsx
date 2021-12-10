import React, { useState } from "react";
import myPicture from "../../assets/img/logpng.jpg";
import { LoginInput } from "../../components/loginInput/LoginInput.component";

document.title = "Connexion  |   BM²";

export const Login = (props: any) => {
  let login = "login";

  return (
    <div className="site h-screen flex flex-col md:flex-row">
      <div className="site__login-infos w-full md:w-2/5">
        <LoginInput changeBySign={login} />
      </div>
      <div className="site__login-picture md:w-3/5 hidden md:flex bg-gray-800">
        <img className="w-full h-full" src={myPicture} alt="" />
      </div>
    </div>
  );
};
