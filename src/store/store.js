import { combineReducers, createStore, applyMiddleware } from "redux";
import { ADD_POST, DELETE_SERIAL_BY_ID } from "./actionsTypes";
import { initialPostsValue, postsReducer } from "./features/postsSlice";
import { initialSerialsValue, serialsReducer } from "./features/serialsSlice";

import thunk from "redux-thunk"


const initialState = {
	serials: initialSerialsValue,
	posts: initialPostsValue,
}

const store = createStore(combineReducers({
	serials: serialsReducer,
	posts: postsReducer
}), initialState, applyMiddleware(thunk));

export default store;