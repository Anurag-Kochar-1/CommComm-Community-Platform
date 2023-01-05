import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    isCreateOptionsModalOpen: false
}

const modalSlice =  createSlice({
    name: "modal",
    initialState,
    reducers: {
        setIsCreateOptionsModalOpen : (state, action) => {
            state.isCreateOptionsModalOpen = action.payload
        }
    }
})

export const {setIsCreateOptionsModalOpen} = modalSlice.actions
export default modalSlice.reducer