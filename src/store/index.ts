import { configureStore } from "@reduxjs/toolkit";
import { personSlice } from "./slices/personSlice";
import { Person } from "../models";
export type PersonStore = {
    personStore:{
        person:Person
    };
    
}
export const store = configureStore({
    reducer:{
        personStore: personSlice.reducer
    }
})