import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const hireSlide = createSlice({
  name: "hire",
  initialState: { status: "", listHire: {
    "id": 0,
    "listHire": []} },
  extraReducers: (builder) => {
    builder
      .addCase(fetchHire.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchHire.fulfilled, (state, action) => {
        console.log(action.payload);
        state.listHire = action.payload;
        state.status = "hire";
      })
      .addCase(fetchDeleteHire.fulfilled, (state, action) => {
        state.listHire = action.payload;
        state.status = "hire";
        
      })
      

  },
});

export const fetchHire = createAsyncThunk("hire/fetchHire", async () => {
  const res = await fetch(
    `https://api-listhire.onrender.com/listHire/${localStorage.getItem("ldsjfldlsf...")}`
  );
  let data = await res.json();
  console.log(data);
  return data;
});

export const fetchAddHire = createAsyncThunk("hire/fetchAddHire", async (sp) => {
  console.log(sp);
  const res = await fetch(
    `https://api-listhire.onrender.com/listHire/${localStorage.getItem("ldsjfldlsf...")}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sp),
    }
  );

  return sp;
});
export const fetchDeleteHire = createAsyncThunk("hire/fetchDeleteHire", async (sp) => {
  console.log(sp);
  const res = await fetch(`https://api-listhire.onrender.com/listHire/${localStorage.getItem("ldsjfldlsf...")}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(sp),
  });

  return sp;
});


