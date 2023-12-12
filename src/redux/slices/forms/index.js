import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todos",
  initialState: {
    hospitalName: "",
    province: "",
    city: "",
    floorsUnder: "",
    floorsOn: "",
    createdDate: null,
    designedDate: null,
    serviceDate: null,
    latitude: "35.715298",
    longitude: "51.404343",
    bedsNumber: "",
    impactFactor: "",
    unitPrice: "",
    soilType: "",
    address: "",
    
    floorsNo: "",
  },
  reducers: {
    form: (state , action) => {
      const { key, value } = action.payload;
      state[key] = value;
    },
    floorsNoSetter: (state, action) => {
      state.floorsNo = action.payload;
    },
  },
});

// this is for dispatch
export const { floorsNoSetter, form } = todoSlice.actions;

// this is for configureStore
export default todoSlice.reducer;
