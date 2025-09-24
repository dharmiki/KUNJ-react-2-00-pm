 import { createSlice } from "@reduxjs/toolkit"
export const slic=createSlice({
    name : "Counter",
    initialState:{cou:0},
    reducers:{
        incre:(state,actions)=>{
            state.cou = state.cou + 1
        },

        decre:(state,actions)=>{
            if(state.cou <= 0)
            {
                alert("cant work")
                return
            }
            state.cou = state.cou -1
        }
    }   
})

export const {incre , decre}=slic.actions
export default slic.reducer