import axios from 'axios'
import React from 'react'
import { useReducer } from 'react'
import { initialState, productReducer } from './productReducer'
import { AXIOS_FAILURE, AXIOS_START, AXIOS_SUCCESS } from './actionTypes'

import "./App.scss"

export default function App() {
  const [state,dispatch] = useReducer(productReducer,initialState)

      const getProduct = () => {
          dispatch({type: AXIOS_START})
          axios.get("https://dummyjson.com/products/2")
          .then(res => {
              if (res.status === 200) {
                  return res.data
              }else{
                  throw new Error("invalid URL")
              }
          })
          .then(product => {
              dispatch({type: AXIOS_SUCCESS, payload:product})
          })
          .catch(err => {
              dispatch({type: AXIOS_FAILURE})
          })
      }
  return (
    <div className="Product">
        <div className='Product-Content'>
            <h3><span> Title: </span> {state.product.title}</h3>
            <h3><span> Description:</span> {state.product.description}</h3>
            <h3><span> Rating:</span> {state.product.rating}</h3>
            <h3><span> Price:</span> $ {state.product.price}</h3>
            <p><span> Brand:</span> {state.product.brand}</p>
            <img src={state.product.thumbnail} alt="" />
        <button onClick={getProduct}>{state.loading? "wait" : "getProduct"}</button>
        </div>
    </div>
  )
}
