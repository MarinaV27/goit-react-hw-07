import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    name: ''
}

const filtersSlice = createSlice({
    name: 'filters',
    initialState,
    reducers:{}
})


export default filtersSlice.reducer