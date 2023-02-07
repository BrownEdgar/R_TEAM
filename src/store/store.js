import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./features/postsSlice";
import randomSlice from "./features/randomSlice";
import serialsSlice from "./features/serialsSlice";
import usersSlice from "./features/usersSlice";


const store = configureStore({
	reducer: {
		posts: postsSlice,
		serials: serialsSlice,
		users: usersSlice,
		randomNumbers: randomSlice
	}
})



export default store;