import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"



export const fetchAllItem=createAsyncThunk(
    "ItemsSlice/fetchAllItem",
    async (type)=>{
       const response=await fetch(`https://63b6c0f21907f863aa00ad0e.mockapi.io/item${type ?`?title=${type}` :" "}`)
       const data=await response.json()
       return data
    }
)

const initialState={
   items:[],
   status:"LOADING",
}

const ItemsSlice=createSlice({
    initialState,
    name:"ItemsSlice",
    reducers:{

    },
    extraReducers:{
        [fetchAllItem.pending]:(state)=>{
            state.status="LOADING"
         },
         [fetchAllItem.fulfilled]:(state,{payload})=>{
             state.items=payload
             state.status="SUCCESS"
         },
         [fetchAllItem.rejected]:(state)=>{
             state.status="Error"
          },
    }
    

})



export default ItemsSlice.reducer