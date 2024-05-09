import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../rootReducer";
import { store } from "../store";
import { useDispatch } from "react-redux";

type AppState = {
  count: number;
};

const defaultValue: AppState = { count: 0 };

const appSlice = createSlice({
  name: "app",
  initialState: defaultValue,
  reducers: {
    add: (state, action: PayloadAction<void>) => {
      state.count = state.count + 1;
    },
    reset: (state, action: PayloadAction<number>) => {
      state.count = action.payload;
    },
    extraReducers: (builder) => {},
  },
});

export const { add, reset } = appSlice.actions;
export const appSelector = (state: RootState) => state.app;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default appSlice.reducer;
