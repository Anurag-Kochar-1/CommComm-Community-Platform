import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allCommunitiesData: [],
    currentCommunityData: [],
    communityPosts:[],
    communitySettings: [],
    communityEvents: [],
    communityTextChannels: [],

    suggestedCommunities: [],
    trendingCommunities: []

    
};

const communityDataSlice = createSlice({
    name: "communityData",
    initialState ,
    reducers: {
        setCurrentCommunityData: (state, action) => {
            state.currentCommunityData = action.payload
        },


        setSuggestedCommunities: (state, action) => {
            state.suggestedCommunities = action.payload
        },

        setTrendingCommunities: (state, action) => {
            state.trendingCommunities = action.payload
        },



        
    }
})


export const {setCurrentCommunityData, setSuggestedCommunities, setTrendingCommunities} = communityDataSlice.actions

export default communityDataSlice.reducer