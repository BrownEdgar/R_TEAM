import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPosts } from '../Redux_4_homework_Arpi/store/features/postSlice'
import { asyncComments } from '../Redux_4_homework_Arpi/store/features/commentsSlice'
import { asyncAlbums } from './store/features/albumsSlice'
import { asyncPhotos } from './store/photosSlice'
import { asyncTodos } from './store/features/todosSlice'
import { asyncUsers } from './store/usersSlice'



export default function App() {
    // console.log(posts)
    const data = useSelector(state => state)
    
	const dispatch = useDispatch()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const number = {
            count: e.target[1].value
        }
        
        const value = e.target[0].value
        if(value === "posts"){
            dispatch(asyncPosts(number))
        }if(value === "comments"){
            dispatch(asyncComments(number))
        }if(value === "albums"){
            dispatch(asyncAlbums(number))
        }if(value === "photos"){
            dispatch(asyncPhotos(number))
        }if(value === "todos"){
            dispatch(asyncTodos(number))
        }if(value === "users"){
            dispatch(asyncUsers(number))
        }
    }

  return (
    <div>
        <div>
        <form  onSubmit={handleSubmit} id="form">
            <select name="" id="">
                <option value="posts">Posts</option>
                <option value="comments">Comments</option>
                <option value="albums">Albums</option>
                <option value="photos">Photos</option>
                <option value="todos">Todos</option>
                <option value="users">Users</option>
            </select>
            <input type="number" />
            <input type="submit" />
        </form>
        </div>
        {/* <div className="container">
            {data.map(elem => {
                return <div>
                    <h1>{elem.id}</h1>
                </div>
            })

        }

        </div> */}
    </div>
  )
}
