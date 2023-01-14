import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    allCommunitiesData: [],
    currentCommunityData: [],
    communityPosts: [],
    communitySettings: [],
    communityEvents: [],
    communityTextChannels: [],

    suggestedCommunities: [],
    trendingCommunities: [],

    communityTracksData: [],
    communityTrackPathsData: []


};

const communityDataSlice = createSlice({
    name: "communityData",
    initialState,
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

        setCommunityTracksData: (state, action) => {
            state.communityTracksData = action.payload
        },

        setCommunityTrackPathsData: (state, action) => {
            state.communityTrackPathsData = action.payload
        },





    }
})


export const { setCurrentCommunityData, 
    setSuggestedCommunities, 
    setTrendingCommunities,
    setCommunityTracksData,
    setCommunityTrackPathsData

} = communityDataSlice.actions

export default communityDataSlice.reducer