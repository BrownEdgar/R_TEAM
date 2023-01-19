import { getData } from "./helpers/getApi";

export const initialState = {
	data: {
		todos: [],
		users: [],
	},
	status: ""
}

export const ADD_TODO = "ADD_TODO"

export function blogReducer(state, action) {
	switch (action.type) {
		case ADD_TODO:
			return {
				data: {
					...state,
					todos: action.payload
				}
				
	
			}

		default: return state

	}
}


