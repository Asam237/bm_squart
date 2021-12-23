import { ErrorMessage, Formik } from "formik";
import React, { useState } from "react";
import Title from "../../components/title/Title.component";
import DashboardTemplate from "../dashboard/DashboardTemplate";
import Error from "../../components/modals/Error.modal";
import * as Yup from "yup";
import { MyInput } from "../../components/myInput/MyInput.component";
import { useRecoilValue } from "recoil";
import { categoryState } from "../../atoms/name";
import { addSale } from "../../services/sale.service";

const AddSale = (props: any) => {
  let [show, setShow]: any = useState(false);
  let token = useRecoilValue(categoryState);
  console.log("Token::::::", token);
  const initialValues = {
    name: "",
    numero: "",
    product: "",
    price: 0,
  };
  let submit = async (value: any) => {
    await addSale(value.name, value.numero, value.price, "7623");
  };

  return (
    <DashboardTemplate>
      <Title title="Add Sale" />
      <div className="container py-10 px-4 ">
        <Error show={show} onClose={() => setShow(false)} />
        <Formik
          initialValues={initialValues}
          validationSchema={Yup.object().shape({
            name: Yup.string().required("name is required"),
            numero: Yup.string().required("numero is required"),
            product: Yup.string().required("product is required"),
            price: Yup.string().required("price is required"),
          })}
          onSubmit={(value: any) => {
            submit(value);
          }}
        >
          {({ handleChange, handleSubmit }) => (
            <div className="flex flex-col">
              <MyInput
                onChangeText={handleChange("name")}
                myInputText="text"
                title="name"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-600 text-sm"
              />
              <MyInput
                onChangeText={handleChange("numero")}
                myInputText="text"
                title="numero"
              />
              <ErrorMessage
                name="numero"
                component="div"
                className="text-red-600 text-sm"
              />
              <MyInput
                onChangeText={handleChange("product")}
                myInputText="text"
                title="product"
              />
              <ErrorMessage
                name="product"
                component="div"
                className="text-red-600 text-sm"
              />
              <MyInput
                onChangeText={handleChange("price")}
                myInputText="text"
                title="price"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-600 text-sm"
              />
              <button
                type="submit"
                onClick={() => handleSubmit()}
                // onClick={() => history.push("/dashboard")}
                style={{ fontFamily: " 'Poppins', sans-serif" }}
                className="hover:bg-blue-900 border-2 font-extrabold border-gray-300 hover:text-gray-300 bg-gray-800 w-full mt-4 text-sm text-white p-3 rounded-md md:w-1/6"
              >
                add
              </button>
            </div>
          )}
        </Formik>
      </div>
    </DashboardTemplate>
  );
};

export default AddSale;
