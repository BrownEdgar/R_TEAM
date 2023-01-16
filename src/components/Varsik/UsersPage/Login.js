import React, { useState } from 'react'
import { ErrorMessage, Formik, Form, Field } from 'formik'
import * as yup from 'yup'

import './Login.css'
import User from './User'

const validationSchema = yup.object({
    username: yup.string()
    .min(5, "username is short")
    .required("required!"),
    password: yup
    .string()
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Minimum eight characters, at least one letter, one number")
    .required("required!"),
    email: yup
    .string()
    .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "You have entered an invalid email address!")
    .required("required!")
})

const initialValues = {
    username: "",
    password: "",
    email: ""
}

export default function Login() {
    const [data, setData] = useState()

    const onSubmit = values => {
        setData(values)
    }
    console.log([data]);

    

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
            validateOnChange={false}
            validateOnBlur={true}
        >
            <Form>
                <div>
                    <label htmlFor="username">UserName</label>
                    <Field type="text" id="username" name="username" />
                    <ErrorMessage name="username" component={"span"} />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <Field type="password" id="password" name="password" />
                    <ErrorMessage name="password" component={"span"} />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field type="email" id="email" name="email" />
                    <ErrorMessage name="email" component={"span"} />
                </div>
                <div>
                    <input type="submit" id="submit" name="submit" value="Log In" />
                </div>   
            </Form>
          
        </Formik>
    )
}
