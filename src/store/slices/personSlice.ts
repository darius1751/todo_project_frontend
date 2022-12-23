import { createSlice } from "@reduxjs/toolkit";
import { Person } from "../../models";
export const initialPerson:Person = {
    email:'',
    name:'',
    phone:''

}
export type PersonSlice = {
    person:Person
}
export const personSlice = createSlice({
    name:'person',
    initialState:{
        person: initialPerson
    },
    reducers:{
        login: (state, action) => {
            state.person = action.payload;
            
            
        },
        logout:(state) => {
            state.person = initialPerson;
        }
    }
})
export const {login}  = personSlice.actions;