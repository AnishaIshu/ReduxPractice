import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";

export const fetchProducts =  createAsyncThunk("fetchProducts",async() => {
  const res = await fetch('https://fakestoreapi.com/carts');
  const final= await res.json()
  return final;
})

const Product=createSlice({
    name: "Products",
    initialState: {
        data:null,
        isLoader: false,
        isError: false,
    },
    extraReducers:builder => {
      builder.addCase(fetchProducts.pending, (state, action) => {
        state.isLoader = true;
      }) 
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoader = false;
        state.data = action.payload;
      })
      builder.addCase(fetchProducts.rejected, (state, action) => {
        state.isLoader = false;
        state.isError = true;
      })
    },
})

export default Product.reducer;