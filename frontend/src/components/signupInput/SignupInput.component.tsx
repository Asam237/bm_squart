import { Formik, ErrorMessage } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { loginService } from "../../services/auth.service";
import { MyInput } from "../myInput/MyInput.component";
import * as Yup from "yup";

export const SignupInput = (props: any) => {
  const history = useHistory();
  const initialValues = {
    email: "",
    password: "",
  };
  let submit = async (value: any) => {
    if ((await loginService(value.email, value.password)) != {}) {
      console.log("Different de lobject");
    } else {
      await loginService(value.email, value.password);
    }
  };

  return (
    <div className="container pt-20 px-4 md:px-0 md:py-16 max-w-max mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          email: Yup.string().required("Email is required"),
          password: Yup.string().required("Password is required"),
        })}
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
              Inscrivez-vous a BM<span>&#178;</span>
            </p>
            <p
              className="text-sm pb-5"
              style={{ fontFamily: " 'Poppins', sans-serif" }}
            >
              Ou{" "}
              <a
                onClick={props.login}
                className="hover:underline cursor-pointer text-green-700"
              >
                {" "}
                Connecter votre compte pour démarrer une formation{" "}
              </a>
            </p>

            <MyInput
              onChangeText={handleChange("email")}
              myInputText="text"
              title="Utilisateur"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-600 text-sm"
            />
            <MyInput
              onChangeText={handleChange("email")}
              myInputText="text"
              title="Adresse Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-600 text-sm"
            />
            <MyInput
              onChangeText={handleChange("password")}
              myInputText="password"
              title="Mot de passe"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-600 text-sm"
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
