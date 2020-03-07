import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Form, Field, withFormik } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import { AxiosWithAuth } from "../utils/AxiosWithAuth";

const Button = styled.button`
    box-shadow: 0px 1px 0px 0px #f0f7fa;
    background: linear-gradient(
        180deg,
        rgba(183, 156, 237, 1) 0%,
        rgba(116, 99, 185, 1) 60%
    );
    background-color: rgb(183, 156, 237);
    border-radius: 6px;
    border: 1px solid #7161ef;
    display: inline-block;
    cursor: pointer;
    color: #ffffff;
    font-family: Arial;
    font-size: 15px;
    font-weight: bold;
    padding: 6px 24px;
    text-decoration: none;
    text-shadow: 0px -1px 0px #5b6178;

    &:hover {
        background: linear-gradient(
            180deg,
            rgba(116, 99, 185, 1) 0%,
            rgba(183, 156, 237, 1) 60%
        );
        background-color: rgb(183, 156, 237);
    }
`;

const ClientLoginForm = ({ values, errors, touched, status }) => {
    const [login, setLogin] = useState([]);
    useEffect(() => {
        console.log("status has changed", status);
        status && setLogin(login => [...login, status]);
    }, [status]);
    return (
        <section className="clientlogin">
            <Form>
                <label htmlFor="client-username">Username: </label>
                <Field id="username" type="text" name="username" />
                {touched.username && errors.username && (
                    <p className="errors">{errors.username}</p>
                )}
                <br />
                <label htmlFor="client-password">Password: </label>
                <Field id="password" type="password" name="password" />
                {errors.password && touched.password && (
                    <div>{errors.password}</div>
                )}
                <br />
                <Button type="submit">Log In</Button>
                <br />
                <h2>Don't have an account?</h2>
                <NavLink to="/clientsignup">
                    <Button>Sign Up For Anytime Fitness</Button>
                </NavLink>
            </Form>
            {login.map(user => console.log("client login", user))}
        </section>
    );
};

const FormikLoginForm = withFormik({
    mapPropsToValues() {
        return {
            username: "",
            password: ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Please enter username"),
        password: Yup.string().required("Please enter password")
    }),
    handleSubmit(values, { resetForm, setStatus }) {
        console.log("submitting login", values);
        AxiosWithAuth()
            .post("/api/auth/login", values)
            .then(res => {
                console.log("success", res);
                setStatus(res.data);
                resetForm();
            })
            .catch(err => console.log(err.response));
    }
})(ClientLoginForm);
export default FormikLoginForm;
