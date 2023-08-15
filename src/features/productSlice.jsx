import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    products: []
}

export const GetProduct = createAsyncThunk("product/getProduct", async (_, thunkAPI) => {
    try {
        const response= await axios.get('http://localhost:5000/products');
        return response.data;
    } catch (error) {
        if (error.message) {
            const message = error.response.data.msg;
            return thunkAPI.rejectWithValue(message);
        }        
    }
})