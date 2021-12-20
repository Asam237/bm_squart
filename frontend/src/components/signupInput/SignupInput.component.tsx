import React from "react";
import { Formik, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import { registerService } from "../../services/auth.service";
import { MyInput } from "../myInput/MyInput.component";
import * as Yup from "yup";
import { useRecoilState } from "recoil";
import { nameState } from "../../atoms/name";

export const SignupInput = (props: any) => {
  let [name, setName]: any = useRecoilState(nameState);
  const history = useHistory();
  const initialValues = {
    username: "",
    fullName: "",
    mobile: "",
    adress: "",
    password: "",
  };
  let submit = async (value: any) => {
    (await registerService(
      value.username,
      value.fullName,
      value.mobile,
      value.adress,
      value.password
    )) && (await history.push("/dashboard"));
    setName(() => (name = value.username));
  };

  return (
    <div className="container pt-14 px-4 md:px-0 md:py-10 max-w-max mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          username: Yup.string().required("username is required"),
          fullName: Yup.string().required("firstname is required"),
          mobile: Yup.string().required("phone is required"),
          adress: Yup.string().required("adress is required"),
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
              onChangeText={handleChange("username")}
              myInputText="text"
              title="Utilisateur"
            />
            <ErrorMessage
              name="username"
              component="div"
              className="text-red-600 text-sm"
            />
            <MyInput
              onChangeText={handleChange("mobile")}
              myInputText="text"
              title="Phone"
            />
            <ErrorMessage
              name="mobile"
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
              style={{ fontFamily: " 'Poppins', sans-serif" }}
              className="hover:bg-blue-900 border-2 font-extrabold border-gray-300 hover:text-gray-300 bg-gray-800 w-full mt-4 text-sm text-white p-3 rounded-md"
            >
              S'inscrire
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};
