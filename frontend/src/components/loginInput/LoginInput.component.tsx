import React, { useState } from "react";
import { MyInput } from "../myInput/MyInput.component";
import { useHistory } from "react-router-dom";
import { ErrorMessage, Formik } from "formik";
import * as Yup from "yup";
import { loginService } from "../../services/auth.service";
import { useRecoilState } from "recoil";
import { categoryState, clientIdState, nameState } from "../../atoms/name";
import Error from "../modals/Error.modal";

export const LoginInput = (props: any) => {
  let [name, setName]: any = useRecoilState(nameState);
  let [categoryToken, setCategoryToken]: any = useRecoilState(categoryState);
  let [clientId, setClientId]: any = useRecoilState(clientIdState);
  let [show, setShow]: any = useState(false);
  const history = useHistory();
  const initialValues = {
    username: "",
    password: "",
  };
  let submit = async (value: any) => {
    const result = await loginService(value.username, value.password);
    if (typeof result === "object") {
      console.log("result:::::", result);
      result && history.push("/dashboard");
      setName(() => (name = value.username));
      setCategoryToken(() => (categoryToken = result.token));
      setClientId(() => (clientId = result.user._id));
      console.log("result:::::id", clientId);
    } else {
      setShow(() => (show = true));
    }
  };

  return (
    <div className="container pt-20 px-4 md:px-0 md:py-16 max-w-max mx-auto">
      <Error show={show} onClose={() => setShow(false)} />
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("username is required"),
          password: Yup.string().required("password is required"),
        })}
        onSubmit={(value: any) => {
          submit(value);
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <div className="flex flex-col justify-center items-start ">
            <p
              style={{ fontFamily: " 'Poppins', sans-serif" }}
              className="font-extrabold text-xl md:text-3xl pb-2 md:pb-4"
            >
              Connectez-vous a BM<span>&#178;</span>
            </p>
            <p
              className="text-sm pb-5"
              style={{ fontFamily: " 'Poppins', sans-serif" }}
            >
              Ou{" "}
              <a
                onClick={props.signup}
                className="hover:underline cursor-pointer text-green-700"
              >
                {" "}
                Créer votre compte pour démarrer une formation{" "}
              </a>
            </p>
            <MyInput
              onChangeText={handleChange("username")}
              myInputText="text"
              title="username"
            />
            <ErrorMessage
              name="username"
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
                  className="text-sm font-medium text-gray-898"
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
              type="submit"
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
