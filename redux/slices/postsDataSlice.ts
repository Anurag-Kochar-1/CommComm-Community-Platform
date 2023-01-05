import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allPostsData: [],
    currentCommunityPostsData: [],

};


const postsDataSlice = createSlice({
    name: "postsData",
    initialState,
    reducers: {
        setCurrentCommunityPostsData : (state, action) => {
            state.currentCommunityPostsData = action.payload
        }
    }
})

export const {setCurrentCommunityPostsData} = postsDataSlice.actions
export default postsDataSlice.reducer