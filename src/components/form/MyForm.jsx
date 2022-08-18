import "./myForm.scss";
import { Formik, Form, Field, useField } from "formik";
import * as Yup from "yup";
import useMarvelService from "../../services/MarvelService";
import { useState } from "react";
import { Link } from "react-router-dom";
import Preloader from "../preloader/Preloader";

const MyInput = ({ label, request, ...props }) => {
    const { loader, error } = useMarvelService();
    const [field, meta] = useField(props);

    const requiredFieldError =
        meta.error &&
        meta.touched &&
        !loader &&
        JSON.stringify(request) &&
        !error ? (
            <div className='error'>{meta.error}</div>
        ) : null;

    const noCharError =
        field.value &&
        !loader &&
        !error &&
        !request &&
        meta.touched &&
        JSON.stringify(request) ? (
            <div className='error'>Character not found</div>
        ) : null;

    const successMessage = request &&
        request.length > 0 &&
        !loader &&
        !error && (
            <div className='input__wrapper'>
                <label className='success'>
                    There is! Visit {request[0].name} page?
                </label>
                <Link
                    to={`/${request[0].id}`}
                    className='button button__secondary'>
                    <div style={{ display: "block" }} className='inner'>
                        hero page
                    </div>
                </Link>
            </div>
        );
    return (
        <>
            <label id={props.id}>{label}</label>
            <div className='input__wrapper'>
                <input {...field} {...props}></input>
                <button type='submit' className='button button__main'>
                    <div className='inner'>Find</div>
                </button>
            </div>

            {noCharError}
            {requiredFieldError}
            {successMessage}
        </>
    );
};

const MyForm = () => {
    const [request, setRequest] = useState(null);
    const { loader, error, getAllChars } = useMarvelService();

    const updateChar = (name) => {
        getAllChars(name).then((data) => data.length !== 0 && setRequest(data));
        setRequest(null);
    };

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
                }}>
                <Form className='form'>
                    {loader ? (
                        <Preloader />
                    ) : (
                        <MyInput
                            type='text'
                            request={request}
                            name='name'
                            id='name'
                            label='Or find a character by name:'
                            placeholder='Enter the name'
                        />
                    )}
                </Form>
            </Formik>
        </>
    );
};

export default MyForm;
