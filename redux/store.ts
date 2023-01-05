import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice"
import communityDataReducer from "./slices/communityDataSlice"


const store = configureStore({
    reducer: {
        modal: modalReducer,
        communityData: communityDataReducer
    }
})

export default store