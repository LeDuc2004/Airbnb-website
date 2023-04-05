import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const ttuserSlide = createSlice({
    name: "ttuser",
    initialState: { status: "", ttusers: []  },
    extraReducers: (builder) => {
      builder
        .addCase(fetchTodos.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchTodos.fulfilled, (state, action) => {
          state.khungcanh = action.payload;
          state.status = "idle";
        })
  
    },
  });

  export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
    const res = await fetch("https://test-api-air.onrender.com/khungcanh");
    let data = await res.json();
    return data;
  });
  export const fetchOption = createAsyncThunk("todos/fetchTodos", async (option) => {
    const res = await fetch(`https://test-api-air.onrender.com/${option}`);
    let data = await res.json();
    return data;
  });