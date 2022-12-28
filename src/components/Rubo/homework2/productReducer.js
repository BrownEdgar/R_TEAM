export const initialState = {
    loading: false,
    error: false,
    product:{}
} 

export const productReducer = (state,action) => {
    switch (action.type) {
        case "AXIOS_START" : 
        return {
            loading: true,
            error:false,
            product: {}
        }
        case "AXIOS_SUCCESS" : 
        return {
            loading:false,
            error: false,
            product: action.payload
        }
        case "AXIOS_FAILURE": 
        return {
            loading:false,
            error:true,
            product:{}
        }
    
        default: return state
    }
}