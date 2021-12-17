import React, { useState } from "react";
import myPicture from "../../assets/img/logpng.jpg";
import { LoginInput } from "../../components/loginInput/LoginInput.component";
import { SignupInput } from "../../components/signupInput/SignupInput.component";
import { useHistory } from "react-router-dom";

document.title = "Connexion  |   BM²";

export const Login = (props: any) => {
  let [login, setLogin]: any = useState(true);
  const history = useHistory();

  const changeBySign = () => {
    if (login === true) {
      return <LoginInput signup={() => setLogin((login = false))} />;
    } else {
      return <SignupInput login={() => setLogin((login = true))} />;
    }
  };

  return (
    <div className="site h-screen flex flex-col md:flex-row">
      <div className="site__login-infos w-full md:w-2/5">
        {/* <LoginInput signup={changeByClick} /> */}
        {changeBySign()}
      </div>
      <div className="site__login-picture md:w-3/5 hidden md:flex bg-gray-800">
        <img className="w-full h-full" src={myPicture} alt="" />
      </div>
    </div>
  );
};
