// import React, { useState, useRef} from 'react'
// import "./App.scss"

// export default function App() {
//     const [data, sedData] = useState({
//         login: "",
//         password: "",
//         agree: false
//     })
//     const login = useRef(null)
//     const pass = useRef(null)


//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(login.current.value)
//         console.log(pass.current.value)
//         sedData({
//             login: login.current.value,
//             password: pass.current.value,
//         })
//         e.target.reset()
//     }
//     const handleChange = (e) =>{
//         console.log(e.target.name);

//         sedData({...data, [e.target.name]: e.target.value })
//     }

//   return (
//     <div>
//         <h2>{JSON.stringify(data)}</h2>
//         <form onSubmit={handleSubmit} className='Form'>
//             <input type="text" required id="login" name ="login" value={login.password} onChange={handleChange} ref={login} />
//             <input type="password" required id="password" name ="password" value={data.password} onChange={handleChange} ref={pass} />
//             <input type="checkbox" name='agree' onChange={handleChange}/>
//             <input type="submit" value="Add" />
//         </form>
//     </div>
//   )
// }


// import React , { useState } from 'react'

// export default function App() {
//     const [option, setOption] = useState("")

//     const handleChange = (e) => {
//         setOption(e.target.value)
//     }

//     const renderData = () => {
//         switch (option) {
//             case "a": return <h1>Varinat A</h1>
//             case "b": return <p>Varinat B</p>
//             case "c": return <h2>Varinat C</h2>
//            default: <div>null</div>
//         }
//     }
//   return (
//     <div>
//         <form>
//             <select name="type" onChange={handleChange}>
//                 <option value="a">a</option>
//                 <option value="b">b</option>
//                 <option value="c">c</option>
//             </select>
//         </form>
//         {renderData()}
//     </div>
//   )
// }



import React, { useEffect, useState } from 'react'
import "./App.scss"

export default function App() {

	const [formsData, setFormsData] = useState( {
		email: "",
		password: "",
		emailDirty: false,
		passwordDirty: false,
		emailError: 'Email не может быть пустым',
		passwordError: 'Password не может быть пустым',
		formValid:false
	})


  useEffect( () => {
    if(emailError || passwordError){
      setFormValid(false)
    }else{
      setFormValid(true)
    }
  },[emailError, passwordError])

  const emailHandler = (e) => {
    e.preventDefault()
    setMail(e.target.value)
    const re =/[a-z]/g

    if(!re.test(String(e.target.value))){
			console.log("ok")
      setEmailError('Некорректный mail')
    } else{
      setEmailError("")
			setFormValid(false)
    }
  }

  const passwordHandler = (e) => {
		console.log(e.target.value)
    setPassword(e.target.value)
    if(e.target.value < 3 || e.target.value > 8){
      setPasswordError("Пароль должен быть длинее 3 и меньше 8")
      if(!e.target.value){
        setPasswordError('Password не может быть пустым')
      }
    }else{
			setPasswordError("")
      setEmailError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break;
      case "password":
        setPasswordDirty(true)
        break;
      default: 
    }
  }

	const handleSubmit = (e) => { 
		e.preventDefault()
	 }
  return (
    <div className='app'>
      <div className='form-div'>
        <form className='Form' onSubmit={handleSubmit}>
          <h1>Регистрация</h1>
          <label htmlFor="name">Mail</label>
          {(emailDirty && emailError) && <div style={{color:"red"}}>{emailError}</div>}
          <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" type="text" placeholder="Enter your mail"/>
          {(passwordDirty && passwordError) && <div style={{color:"red"}}>{passwordError}</div>}
          <label htmlFor="mail">Password</label>
          <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)}  name='password' type="password" placeholder="Enter your password"/>
          <button disabled={!formValid} type='submit'>Login</button>
        </form>
      </div>
    </div>
  )
}
