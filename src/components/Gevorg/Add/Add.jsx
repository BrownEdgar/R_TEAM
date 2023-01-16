import React, { useState } from 'react'
import { Icon } from 'react-icons-kit'
import {eyeOff} from 'react-icons-kit/feather/eyeOff'
import {eye} from 'react-icons-kit/feather/eye'
import { Formik, Form ,Field ,ErrorMessage} from "formik"
import * as yup from "yup"
import './Add.css'
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

export default function Add() {
    const [type,setType] = useState('password')
    const [icon, setIcon] = useState(eyeOff)

    const handleToggle = () => {
        if(type=== "password"){
            setIcon(eye)
            setType('text')
        }else{
            setIcon(eyeOff)
            setType('password')
        }
    }
   
    const onSubmit = values => {
        console.log(values)
    }

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
         <label htmlFor='username'>Username</label>
         <Field type="text"id="username"name="username"/>
         <ErrorMessage name="username" component={"span"}/>
       </div>
       <div>
         <label htmlFor='password'>Password</label>
         <Field type={type} id="password"  name="password" />
         <span onClick={handleToggle}><Icon icon={icon} size={25}/></span>
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
