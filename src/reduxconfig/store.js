import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "./DataSlice"
import reducer from "./DataSlice";

const store = configureStore({reducer : {
    user:DataReducer
}})

export default store;