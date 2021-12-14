import React from "react";
import { MyInput } from "../myInput/MyInput.component";
import { useHistory } from "react-router-dom";
import { Home } from "../../pages/home/Home.page";
import { Formik } from "formik";

export const LoginInput = (props: any) => {
  const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
  };
  let submit = (values: any): any => {
    if (values.email === "test@test.com" && values.password === "123456") {
      console.log(values);
      history.push("/");
    } else {
      console.log("informations non valide !", values);
    }
  };
  return (
    <div className="container pt-20 px-4 md:px-0 md:py-16 max-w-max mx-auto">
      <Formik
        initialValues={initialValues}
        onSubmit={(value: any) => {
          submit(value);
        }}
      >
        {({ handleChange, handleSubmit }) => (
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
              <a
                href={props.changeBySign}
                className="hover:underline text-green-700"
              >
                {" "}
                Créer votre compte pour démarrer une formation{" "}
              </a>
            </p>
            <MyInput
              onChangeText={handleChange("email")}
              myInputText="text"
              title="Adresse Email"
            />
            <MyInput
              onChangeText={handleChange("password")}
              myInputText="password"
              title="Mot de passe"
            />
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
              onClick={() => handleSubmit()}
              // onClick={() => history.push("/dashboard")}
              style={{ fontFamily: " 'Poppins', sans-serif" }}
              className="hover:bg-blue-900 border-2 font-extrabold border-gray-300 hover:text-gray-300 bg-gray-800 w-full mt-4 text-sm text-white p-3 rounded-md"
            >
              Se connecter
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};
