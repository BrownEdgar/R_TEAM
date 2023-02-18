import {ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import * as yup from "yup"

import "./Login.scss"

const validationSchema = yup.object({
  username: yup
  .string()
  .min(4, "Username too shotr, please enter minimum 4 symbol")
  .max(10, "username too long, please enter maximum 10 symbol")
  .required("Required"),
  email: yup
  .string()
  .matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, "You have entered an invalid email address!")
  .required("Required"),
  password: yup
  .string()
  .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Minimum eight characters, at least one letter, one number and one special character:")
  .required('Required')
})
const  initialValues = {
  username: "",
  email: "",
  password: ""
}

export default function Login({onSubmit}) {
 

  return (
    <Formik
      initialValues = {initialValues}
      onSubmit = {onSubmit} 
      validationSchema ={validationSchema}
      validateOnChange ={false}
      validateOnBlur ={true}
      >
       <div className="login_box">
        <Form action="" >
          <div>
            <label>Enret your username </label>
            <Field type="text" name='username' />
            <ErrorMessage name='username' component={"span"}/>
          </div>
          <div>
            <label>Enret your email </label>
            <Field type="text" name='email' />
            <ErrorMessage name='email' component={"span"}/>

          </div>
          <div>  
            <label>Enret your password </label>
            <Field type="password" name='password' />
            <ErrorMessage name='password' component={"span"}/>
          </div>
            <button type='submit'>Edd user</button>
        </Form>
      </div> 
    </Formik>
  )
}
