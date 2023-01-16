export const initialState = {
    loading: false,
    error: false,
    post: {}
}

export const postReducer = (state, action) => {
    switch (action.type) {
        case 'AXIOS_START':
            return {
                loading: true,
                error: false,
                post: {}
            }
        case "AXIOS_SUCCESS":
            return {
                loading: false,
                error: false,
                post: action.payload
                }
        case "AXIOS_FAILURE":
            return {
                loading: false,
                error: true,
                post: {}
            }
        default: return state
    }
}