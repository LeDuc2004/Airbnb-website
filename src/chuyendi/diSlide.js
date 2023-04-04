import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const diSlide = createSlice({
    name: "di",
    initialState: { status: "", listphong: { listphong:[] }  },
    extraReducers: (builder) => {
      builder
        .addCase(fetchDi.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchDi.fulfilled, (state, action) => {
          console.log(action.payload);
          state.listphong = action.payload;
          state.status = "idle";
        })
        .addCase(fetchAddDi.fulfilled, (state, action) => {
            console.log(action.payload);
            state.listphong.listphong.unshift(action.payload.listphong[action.payload.listphong.length - 1])
          })
          .addCase(fetchDeleteDi.fulfilled, (state, action) => {
            state.listphong = action.payload;
            state.status = "idle";
            
          })

  
    },
  });

  export const fetchDi = createAsyncThunk("di/fetchDi", async (id) => {
    const res = await fetch(`https://api-airbnb-users.onrender.com/chuyendi/${id}`);
    let data = await res.json();
    return data;
  });

  export const fetchAddDi = createAsyncThunk("di/fetchAddDi", async (sp) => {


    const res = await fetch(`https://api-airbnb-users.onrender.com/chuyendi/${localStorage.getItem("ldsjfldlsf...")}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sp),
      });


    return sp;
  });
  export const fetchDeleteDi = createAsyncThunk("di/fetchDeleteDi", async (sp) => {


    const res = await fetch(`https://api-airbnb-users.onrender.com/chuyendi/${localStorage.getItem("ldsjfldlsf...")}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sp),
      });


    return sp;
  });

