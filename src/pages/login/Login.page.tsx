import React from "react";
import { MyInput } from "../../components/myInput/MyInput.component";
import { MyText } from "../../components/myText/MyText.component";
import myPicture from "../../assets/img/logpng.jpg";
import { useHistory } from "react-router-dom";

document.title = "Connexion  |   BM²";

export const Login = () => {
  const history = useHistory();
  return (
    <div className="site h-screen flex flex-col md:flex-row">
      <div className="site__login-infos w-full md:w-2/5">
        <div className="container pt-20 px-4 md:px-0 md:py-16 max-w-max mx-auto">
          <div className="flex flex-col justify-center items-start ">
            <p
              style={{ fontFamily: " 'Poppins', sans-serif" }}
              className="font-extrabold text-xl md:text-3xl w-10/12 pb-2 md:pb-4"
            >
              Connectez-vous a BM<span>&#178;</span>
            </p>
            <p
              className="text-sm pb-5"
              style={{ fontFamily: " 'Poppins', sans-serif" }}
            >
              Ou{" "}
              <a href="#" className="hover:underline text-green-700">
                {" "}
                Créer votre compte pour démarrer une formation{" "}
              </a>
            </p>
            <MyInput myInputText="text" title="Adresse Email" />
            <MyInput myInputText="password" title="Mot de passe" />
            <div className="site__login-remember py-3 flex flex-col md:flex-row items-start md:items-center justify-start md:justify-between w-full">
              <div className="flex items-center">
                <input
                  type="radio"
                  className="form-radio mr-1"
                  name=""
                  value=""
                />
                <p
                  style={{ fontFamily: " 'Poppins', sans-serif" }}
                  className="text-sm font-medium text-gray-900"
                >
                  Se souvenir
                </p>
              </div>
              <a
                href="#"
                style={{ fontFamily: " 'Poppins', sans-serif" }}
                className="text-sm text-green-700 font-semibold hover:text-green-900 hover:underline"
              >
                Mot de passe oublié?{" "}
              </a>
            </div>
            <button
              onClick={() => history.push("/dashboard")}
              style={{ fontFamily: " 'Poppins', sans-serif" }}
              className="hover:bg-blue-900 border-2 font-extrabold border-gray-300 hover:text-gray-300 bg-gray-800 w-full mt-4 text-sm text-white p-3 rounded-md"
            >
              Se connecter
            </button>
          </div>
        </div>
      </div>
      <div className="site__login-picture md:w-3/5 hidden md:flex bg-gray-800">
        <img className="w-full h-full" src={myPicture} alt="" />
      </div>
    </div>
  );
};
