import { combineReducers, createStore } from "redux";
import { initialPostsValue, postsReducer } from "./features/postsSlice";
import { initialSerialsValue, serialsReducer } from "./features/serialsSlice";

const initialState = {
	serials: initialSerialsValue,
	posts: initialPostsValue,
}

const store = createStore(combineReducers({
	serials: serialsReducer,
	posts: postsReducer
}), initialState);

export default store;