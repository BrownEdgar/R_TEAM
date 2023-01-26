import { ADD_POST } from "../actionsTypes";
import { getAsyncPost } from "./postApi";

export const initialPostsValue = [
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

export function postsReducer(state = [], action) {

	if (action.type === ADD_POST) {
		const isExist = state.find(post => post.id === action.payload.id)
		if (isExist) {
			return state;
		}
		return [...state, action.payload]
	}
	return state;
}

//action creater
export function addPost(post) {
	return {
		type: ADD_POST,
		payload: post
	}
}


export function loadAsyncData() {
	return async function (dispatch) {
			const asyncPost = await getAsyncPost();
		dispatch(addPost(asyncPost));
	}
}