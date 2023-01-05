import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice"
import communityDataReducer from "./slices/communityDataSlice"
import postsDataReducer from "./slices/postsDataSlice"
import bottomBarReducer from "./slices/bottomBarSlice"


const store = configureStore({
    reducer: {
        modal: modalReducer,
        communityData: communityDataReducer,
        postsData : postsDataReducer,
        bottomBar: bottomBarReducer
    }
})

export default store