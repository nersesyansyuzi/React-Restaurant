import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchItem = createAsyncThunk(
  "item/fetchItem",
  async (type) => {
    const response = await fetch(`https://63b33d37ea89e3e3db41890f.mockapi.io/items/item?category=${type}`)
    const data = await response.json()
    return data
  }

)



const initialState = {
  item: [],
  active: "BREAKFAST",
  status: "LOADING"
}


const TabSlice = createSlice({
  initialState,
  name: "TabSlice",
  reducers: {
    setActive: (state, { payload }) => {
      state.active = payload
    }
  },
  extraReducers: {
    [fetchItem.pending]: (state) => {
        state.status="LOADING"
    },
    [fetchItem.fulfilled]: (state, { payload }) => {
      state.item = payload
      state.status = "SUCCESS"
    }
  }
})

export const { setActive } = TabSlice.actions

export default TabSlice.reducer