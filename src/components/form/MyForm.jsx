import "./myForm.scss";

import { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import * as Yup from "yup";
import { Formik, Form, useField } from "formik";

import useMarvelService from "../../services/MarvelService";

import Preloader from "../preloader/Preloader";
import MyInput from "./myInput/MyInput";

const MyForm = () => {
  const [request, setRequest] = useState(null);
  const { loader, getAllChars } = useMarvelService();

  const updateChar = useCallback((name) => {
    getAllChars(name).then((data) => data.length !== 0 && setRequest(data));
    setRequest(null);
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Must be required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          updateChar(values.name);
          setSubmitting(false);
        }}
      >
        <Form className="form">
          {loader ? (
            <Preloader />
          ) : (
            <MyInput
              label="Or find a character by name:"
              request={request}
              id="name"
              type="text"
              name="name"
              placeholder="Enter the name"
            />
          )}
        </Form>
      </Formik>
    </>
  );
};

export default MyForm;
