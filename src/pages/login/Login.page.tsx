import React from "react";
import { MyInput } from "../../components/myInput/MyInput.component";
import { MyText } from "../../components/myText/MyText.component";
import myPicture from "../../assets/img/logpng.jpg";
import { useHistory } from "react-router-dom";
import { LoginInput } from "../../components/loginInput/LoginInput.component";

document.title = "Connexion  |   BM²";

export const Login = () => {
  const history = useHistory();
  return (
    <div className="site h-screen flex flex-col md:flex-row">
      <div className="site__login-infos w-full md:w-2/5">
        <LoginInput />
      </div>
      <div className="site__login-picture md:w-3/5 hidden md:flex bg-gray-800">
        <img className="w-full h-full" src={myPicture} alt="" />
      </div>
    </div>
  );
};
