import { configureStore } from "@reduxjs/toolkit";
import CarSlice from "./slice/CarSlice";
import ItemsSlice from "./slice/ItemsSlice";
import TabSlice from "./slice/TabSlice";

export const store=configureStore({
    reducer:{
        tab:TabSlice,
        car:CarSlice,
        item:ItemsSlice,
    }
})