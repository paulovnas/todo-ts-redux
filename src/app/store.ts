import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../slices/TaskSlice";

export const store = configureStore({
	reducer: {
		tasksWatch: tasksReducer,
	},
});