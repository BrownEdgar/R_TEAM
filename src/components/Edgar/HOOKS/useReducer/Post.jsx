
import React, { useReducer } from 'react'
import { initialState, postReducer } from './postReducer'

import "./Post.css"
import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS } from './actionTypes'

const Post = () => {
	const [state, dispatch] = useReducer(postReducer, initialState)
	console.log(state)
  const handleFetch = () => {
		dispatch({ type: FETCH_START})
    fetch("https://jsonplaceholder.typicode.com/posts/56")
      .then(res => {
				if (res.status === 200) {
					return res.json()
				}else{
					throw new Error("Asda")
				}
			})
      .then(data => {
				dispatch({ type: FETCH_SUCCESS, payload: data })
      })
      .catch(err => {
				dispatch({ type: FETCH_FAILURE })
      })
  }
  return (
    <div className='Post'>
      <div className='Post-Header'>
        <h1>Post</h1>
				{state.post?.id && <p>Post N <span className='Post-Id'>{state.post?.id}</span></p>}
      </div>
      <div className="Post-Content">
        <p className='Post-Title'>{state.post?.title}</p>
      </div>
      <div className="Post-Error">
        <span className='Post-Error'>{state.error ? "Fetch faild" : ""} </span>
      </div>
      <div className="Post-Footer">
        <button onClick={handleFetch} >
          {state.loading ? "Wait" : "Fetch the Post"}
        </button>
      </div>
    </div>
  )
}


export default Post