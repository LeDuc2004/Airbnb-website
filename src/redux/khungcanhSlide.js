import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const khungcanhSlide = createSlice({
  name: "item",
  initialState: { status: "", khungcanh: [], sell: [] },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.khungcanh = action.payload;
        state.status = "idle";
      })
      .addCase(fetchSell.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchSell.fulfilled, (state, action) => {
        let timsp = action.payload.data.find(
          (item) => item.id == action.payload.arr[0]
        );
        state.sell = timsp;
        state.status = "dachon";
      })
      .addCase(boqua.fulfilled, (state, action) => {
        state.khungcanh = action.payload;
        state.status = "idle";
      });
  },
});

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await fetch("https://levanduc2052004.onrender.com/khungcanh");
  let data = await res.json();
  return data;
});
export const fetchOption = createAsyncThunk(
  "todos/fetchTodos",
  async (option) => {
    const res = await fetch(`https://levanduc2052004.onrender.com/${option}`);
    let data = await res.json();
    return data;
  }
);
export const fetchSell = createAsyncThunk("todos/fetchSell", async (arr) => {
  const res = await fetch(`https://levanduc2052004.onrender.com/${arr[1]}`);
  let data = await res.json();
  let obj = {
    data,
    arr,
  };
  return obj;
});
export const boqua = createAsyncThunk("hire/boqua", async (idsp) => {
  const res = await fetch(
    `https://levanduc2052004.onrender.com/${idsp.option}/${idsp.idsp}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(),
    }
  );
});
