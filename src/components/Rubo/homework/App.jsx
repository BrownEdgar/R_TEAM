import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react'

import { initialState } from './postReducer'
import { postReducer } from "./postReducer";
import { FETCH_START } from "./actionTypes";
import { FETCH_SUCCESS } from "./actionTypes";
import { FETCH_FAILURE } from "./actionTypes";
import { COUNT_PLUS } from "./actionTypes";
import { COUNT_MINUS } from "./actionTypes";
import { COUNT_RESET } from "./actionTypes"; 
import { COUNT_SPECIFIC_NUMBER } from "./actionTypes"

import "./App.scss"

export default function App() {
  const [state,dispatch] = useReducer(postReducer,initialState)

  const handleClick = () =>{
    setTimeout(() =>{
			dispatch({ type: COUNT_PLUS })

    },2000)
  }
  const handleFetch = () => {
    dispatch({type: FETCH_START})
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => {
      if (res.status === 200 ) {
        return res.json()
      }else{
        throw new Error("invalid URL")
      }
    })
    .then(data => {
      dispatch({type: FETCH_SUCCESS, payload: data})
    })
    .catch(err => {
      dispatch({type: FETCH_FAILURE})
    })
  }

  return (
    <div className='Post'>
        <div className="Post-Header">
            <h1>Post</h1>
        </div>
        <div className="Post-Content">
            <p className='Post-title'>{state.post?.title}</p>
        </div>
        <div className="Post-Error">
            <span className='Post-Error'>{state.error ? "error" : ""}</span>
        </div>
        <div className="Post-Footer">
       
            <h2>Num:{state.count}</h2>
            <button onClick={() => dispatch({type: COUNT_PLUS})}>plus</button>
            <button onClick={() => dispatch({type: COUNT_MINUS})}>minus</button>
            <button onClick={() => dispatch({type: COUNT_RESET})}>reset</button>
            <button onClick={() => dispatch({type: COUNT_SPECIFIC_NUMBER})}>specific</button>
            <button onClick={handleClick}>plus one</button>
            <button onClick={handleFetch}>{state.loading ? "wait": "Fetch the post"}</button>
        </div>
    </div>
  )
}
