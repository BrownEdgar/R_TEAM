import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import "./App.css"

const validationSchema = yup.object({
	username: yup
	.string()
	.min(3, "too short, needed min 3 symbols")
	.max(12, "too much symbols, less then 12")
	.required("required!"),
	password: yup
	.string()
	.required("required!")
	.matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, "Minimum eight characters, at least one uppercase letter, one lowercase letter and one number:"),
	message: yup.string().required()
})

const initialValues = {
	username: "",
	password: "",
	message: "",
}

export default function App() {
	const onSubmit = values => {
		console.log("form data:", values)
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
					<label htmlFor="username">UserName</label>
					<Field type="text" id="username" name='username'/>
					<ErrorMessage name='username' component={"p"}/>
				</div>
				<div>
					<label htmlFor="password">Password</label>
					<Field type="text" id="password" name='password' />
					<ErrorMessage name="password">
						{errMsg => <div className="errors">{errMsg}</div>}
					</ErrorMessage>
				</div>

				<div>
					<Field as="textarea" name="message" />
				</div>
				<div>
					<input
						type="submit"
						id="submit"
						name='submit'
						value="Register"
					/>
				</div>
			</Form>
		</Formik>
	)
}
