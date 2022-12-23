import { ADD_FIVE, ADD_ONE, REMOVE_ONE } from "./actionTypes"

export const initialState = {
    num: 0
}

export const postReducer =(state, action) => {
    switch (action.type) {
        case ADD_ONE:
            return {
                num : state.num += 1
            }
        case REMOVE_ONE:
            return {
                num : state.num -= 1
            }
        case ADD_FIVE:
            return {
                num : state.num += 5
            }
        default: return state
    }
}
