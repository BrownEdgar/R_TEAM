import React, { useReducer } from 'react'
import { ADD_FIVE, ADD_ONE, REMOVE_ONE } from './actionTypes'
import { initialState, postReducer } from './postReducer'

import "./App.scss"

export default function App() {
    const [state, dispatch] = useReducer(postReducer, initialState)

    const handleClickPlus = () => {
        dispatch({type: ADD_ONE})
    }

    const handleClickMinus = () => {
        dispatch({type: REMOVE_ONE})
    }

    const handleClickAddFive = () => {
        dispatch({type: ADD_FIVE})
    }



  return (
    <div >
        <h1>{state.num}</h1>
        <div className='HEAD_DIV'>
        <button onClick={handleClickPlus}>
            +
        </button>
        <button onClick={handleClickMinus}>
            -
        </button>
        <button onClick={handleClickAddFive}>
            +5
        </button>
        </div>
    </div>
  )
}
