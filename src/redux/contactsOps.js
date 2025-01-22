import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



axios.defaults.baseURL = 'https://67913471af8442fd73796799.mockapi.io/';


export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('contacts');
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
});

export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`contacts/${id}`); 
        return data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message)
    }
})