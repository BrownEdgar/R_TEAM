// 1. "https://dummyjson.com/products" ից axios-ը օգտագործելով, 
//ստանալ տվյալները և պահել state-ի մեջ(state-ը պետք է լինի հավաքած useReducer-ով)
import axios from 'axios'
import React, { useReducer } from 'react'
import { AXIOS_SUCCESS } from './actionTypes'
import { initialState, postReducer } from './postReducer'

export default function Post() {
    const [state, dispatch] = useReducer(postReducer, initialState)

    const getAxios = () => {
        dispatch({type: 'AXIOS_START'})
        axios("https://dummyjson.com/products")
           .then(data => {
						 dispatch({ type: AXIOS_SUCCESS, payload: data.data.products })
           })
           .catch(err => {
             dispatch({ type: "AXIOS_FAILURE"})
           })
    }

  return (
    <div className='Post_Axios'>
        <h1>Post</h1>
			{JSON.stringify(state.post,null, 1)}
        <button onClick={getAxios}>{state.loading ? "wait" : "Axios the Post"} </button>
        
    </div>
  )
}



