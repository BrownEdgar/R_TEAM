import { ADD_POST } from "../actionsTypes";
import getAll from "./postApi";


export const initialPostsValue = []

export function postsReducer(state = [], action) {

	if (action.type === ADD_POST) {
		const isExist = state.find(post => post.id === action.payload.id)
		if (isExist) {
			return state;
		}
		return action.payload.posts
	}
	return state;
}

function addPost(posts) {
	return {
		type: ADD_POST,
		payload: {
			posts
		}
	}
}

export function loadAsyncData() {
	return async function (dispatch) {
		const allPosts = await getAll();
		dispatch(addPost(allPosts))
	}
}