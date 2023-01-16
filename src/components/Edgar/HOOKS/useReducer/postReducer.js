import { FETCH_FAILURE, FETCH_START, FETCH_SUCCESS } from "./actionTypes"

export const initialState = {
	loading: false,
	error: false,
	post: {}
}

export const postReducer = (state, action) => {
	switch (action.type) {
		case FETCH_START:
		return {
			loading: true,
			error: false,
			post: {}
		}
		case FETCH_SUCCESS:
			return {
				loading: false,
				error: false,
				post: action.payload
		}
		case FETCH_FAILURE:
			return {
				loading: false,
				error: true,
				post: {}
		}
		default: return state

	}
}