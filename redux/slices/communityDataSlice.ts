import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allCommunitiesData: [],
    currentCommunityData: [],
    communityPosts:[],
    communitySettings: [],
    communityEvents: [],
    communityTextChannels: [],
    
};

const communityDataSlice = createSlice({
    name: "communityData",
    initialState ,
    reducers: {
        setCurrentCommunityData: (state, action) => {
            state.currentCommunityData = action.payload
        }
    }
})


export const {setCurrentCommunityData} = communityDataSlice.actions

export default communityDataSlice.reducer