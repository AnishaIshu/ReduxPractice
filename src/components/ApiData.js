import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {userAPI} from './userId'


const fetchUserById = createAsyncThunk(
   'https://fakestoreapi.com/carts' ,
   async (userId: number, thunkAPI) => {
   const response = await userAPI.fetchById(userAPI)
   return response.data
   }  
)