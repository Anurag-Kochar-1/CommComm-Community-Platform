import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice"
import communityDataReducer from "./slices/communityDataSlice"
import postsDataReducer from "./slices/postsDataSlice"


const store = configureStore({
    reducer: {
        modal: modalReducer,
        communityData: communityDataReducer,
        postsData : postsDataReducer
    }
})

export default store