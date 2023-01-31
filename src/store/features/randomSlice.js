const { createSlice } = require("@reduxjs/toolkit");

export const randomSlice = createSlice({
	name: "random",
	initialState: {data: []},
	reducers: {
		fillArray: ( state ,action) => {
			return {
				data: generator(action.payload.count),
				status: "success"
			}
		}
	}
})


const generator = (count) => {
	const arr = [];
	for( let i = 0; i < count; i++ ) {
	 arr[i] = Math.floor(Math.random() * 200)
	}
	return arr
}

export default randomSlice.reducer;
export const {fillArray} = randomSlice.actions;