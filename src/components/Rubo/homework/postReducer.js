export const initialState = {
    loading: false,
    error: false,
    post: {},
    count: 0 
}

export const postReducer = (state,action) => {
    switch (action.type) {
        case "FETCH_START": 
        return {
            loading: true,
            error: false,
            post:{}
        }
        case "FETCH_SUCCESS":
        return {
            loading: false,
            error: false,
            post: action.payload
        }
        case "FETCH_FAILURE":
        return {
            loading: false,
            error: true,
            post:{}
        }
        case "COUNT_PLUS":{
            return {count: state.count +1}    
        }
        case "COUNT_MINUS":{
            return {count: state.count -1}
        }
        case "COUNT_RESET":{
            return {count: 0}   
        }
        case "COUNT_SPECIFIC_NUMBER":{
            return {count: state.count +5}   
        }
        default: return state
    }
}