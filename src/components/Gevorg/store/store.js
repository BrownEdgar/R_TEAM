import { combineReducers, createStore } from 'redux'
import { ADD_POST, CHANGE_NAME, CLEAR_DATA, DELETE_SERIAL_BY_ID } from '../actionsTypes';

// const initalState = {
//   data: [1,2,3,4,5,6,7,8,9],
//   name: "React-Redux",
//   date: new Date()
// }

const initalState = {
  serials: [
    {
      id: 1,
      title: "firends",
      rating: "9.8",
      actors: ["Courtney Cox", "Jenifer Aniston","Lisa Kudrow"],
      poster: "https://wallpapercave.com/wp/wp3256631.jpg"
    },
    {
      id: 2,
      title: "Prison Break",
      ratings: "9.7",
      actors: ['Wentworth Miller', 'Dominic Purcell', 'Robert Knepper', 'Sarah Wayne Callies', 'William Fichtner'],
      poster: "https://wallpapercave.com/wp/wp3988846.jpg"
    }
  ],
  posts: [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
  ]
}

function serialsReducer(state=[],action) {
  if(action.type = DELETE_SERIAL_BY_ID){
    const newSerials = state.filter(serial => serial.id !== action.payload)
    return newSerials
  }
  return state
}

function postsReducer(state=[],action) {
  if(action.type === ADD_POST){
    const isExist = state.find(post => post.id === action.payload.id)
    if(isExist){
      return state;
    }
    return [...state, action.payload]
  }
  return state
}


const store = createStore(combineReducers({
  serials: serialsReducer,
  posts: postsReducer
}),initalState)

export default store
