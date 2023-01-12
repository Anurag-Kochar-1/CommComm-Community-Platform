import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    currentUserData: {},
    allUsersData: [] 
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentUserData: (state, action) => {
            state.currentUserData = action.payload
        },

        setAllUsersData: (state, action) => {
            state.allUsersData = action.payload
        }
    }
})


export const {setCurrentUserData, setAllUsersData} = userSlice.actions

export default userSlice.reducer