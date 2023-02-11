import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./features/postsSlice";
import serialsSlice from "./features/serialsSlice";
import testSlice from "./features/testSlice";
import usersSlice from "./features/usersSlice";


const store = configureStore({
	reducer: {
		posts: postsSlice,
		serials: serialsSlice,
		users: usersSlice,
		test: testSlice
	}
})



export default store;