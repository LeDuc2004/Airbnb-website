import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const userSlide = createSlice({
    name: "upImg",
    initialState: { status: "idle", listuser: [] },
    extraReducers: (builder) => {
      builder
        .addCase(fetchUsers.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
          state.listuser = action.payload;
          state.status = "idle";
        })
        .addCase(fetchSp.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchSp.fulfilled, (state, action) => {
          state.sp = action.payload;
          state.status = "idle";
        })
  
    },
  });

  export const fetchUsers = createAsyncThunk("todos/fetchUsers", async () => {
    const res = await fetch("https://api-airbnb-users.onrender.com/listuser");
    let data = await res.json();
    return data;
  });
  export const fetchSp = createAsyncThunk("todos/fetchSp", async (option) => {
    const res = await fetch(`https://test-api-air.onrender.com/${option}`);
    let data = await res.json();
    return data;
  });