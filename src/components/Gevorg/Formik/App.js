import React, { useState } from 'react'
// import { BrowserRouter as Router } from 'react-router-dom'
import { Formik, Form ,Field ,ErrorMessage} from "formik"
import "./App.css"
import * as yup from "yup"


// Ստեղծում եք էջ, որտեղ մարդը Ֆորմային միջոցով գրանցվումա էջում գրելով email, password,username  տվյալները, 
// դրանք պահում ենք State-ի մեջ, հետո սարգում եք առանձին users  էջ, 
// որտեղ երբ մտնեմ կցուցադրվի բոլոր ռեգիստրացիա անցած user-ը
const validationSchema = yup.object({
  username: yup
  .string()
  .min(3, 'Минмум 3 символы')
  .max(12,'Не менее 12 символ')
  .required('Required'),
  password: yup
  .string()
  .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, 'Минимум восемь символов, минимум одна буква и одна цифра:')
  .required('Required'),
  email: yup
  .string()
  .matches(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Минимум восемь символов и цифра и @mail ')
  .required("Required"),
  message: yup.string().required("Required")
})
const initialValues = {
  username: "",
  password: "",
  email: "",
  message: ""
}
export default function App() {
  const [data, setData] = useState({
    username: '',
    email: '',
    password: ''
  })

  const onSubmit = values => {
    console.log(values)
  }

return(
  <Formik 
   initialValues={initialValues}
   validationSchema={validationSchema}
   onSubmit={onSubmit}
   validateOnChange={false}
   validateOnBlur={true}
  >
    <Form>
      <div>
        <label htmlFor='username'>Username</label>
        <Field type="text"id="username"name="username"/>
        <ErrorMessage name="username" component={"span"}/>
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <Field type="text" id="password"  name="password" />
        <ErrorMessage name="password" component={"span"}/>
      </div>
      <div>
        <label htmlFor='email'>Email</label>
        <Field type="text" id="email"  name="email" />
        <ErrorMessage name="email" component={"span"}/>
      </div>
      <div>
        <Field as="textarea" name="message"/>
      </div>
      <div>
        <input
          type="submit"
          id="submit" 
          name="submit" 
          value="Registration"
        />
      </div>
    </Form>
  </Formik>
)}

