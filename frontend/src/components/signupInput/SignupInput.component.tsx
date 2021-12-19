import { Formik, ErrorMessage } from "formik";
import React from "react";
import { useHistory } from "react-router-dom";
import { registerService } from "../../services/auth.service";
import { MyInput } from "../myInput/MyInput.component";
import * as Yup from "yup";
import { useRecoilState } from "recoil";
import { nameState } from "../../atoms/name";

export const SignupInput = (props: any) => {
  const history = useHistory();
  let [name, setName]: any = useRecoilState(nameState);
  let initialValues = {
    username: "",
    firstName: "",
    lastName: "",
    mobile: "",
    adress: "",
    password: "",
  };
  let submit = async (value: any) => {
    (await registerService(
      value.username,
      value.firstName,
      value.lastName,
      value.mobile,
      value.adress,
      value.password
    )) && history.push("/dashboard");
    setName(() => (name = value.email));
  };

  return (
    <div className="container pt-20 px-4 md:px-0 md:py-16 max-w-max mx-auto">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          email: Yup.string().required("Username is required"),
          firstName: Yup.string().required("FirstName is required"),
          lastName: Yup.string().required("LastName is required"),
          mobile: Yup.string().required("Phone is required"),
          adress: Yup.string().required("Adress is required"),
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
              onChangeText={handleChange("firstName")}
              myInputText="text"
              title="First name"
            />
            <ErrorMessage
              name="firstName"
              component="div"
              className="text-red-600 text-sm"
            />
            <MyInput
              onChangeText={handleChange("lastName")}
              myInputText="text"
              title="Last Name"
            />
            <ErrorMessage
              name="lastName"
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
              onChangeText={handleChange("adress")}
              myInputText="text"
              title="Adress"
            />
            <ErrorMessage
              name="adress"
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
              S'inscrire
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};
