import { configureStore } from "@reduxjs/toolkit";
import testSlice from "../../store/features/testSlice";
import albumsSlice from "./features/albumsSlice";
import commentsSlice from "./features/commentsSlice";
import postsSlice from "./features/postSlice";
import todosSlice from "./features/todosSlice";
import photosSlice from "./photosSlice";
import usersSlice from "./usersSlice";

const store = configureStore({
	reducer: {
		posts: postsSlice,
        comments: commentsSlice,
        albums: albumsSlice,
        photos: photosSlice,
        todos: todosSlice,
        users: usersSlice,
				test: testSlice
	}
})



export default store;
