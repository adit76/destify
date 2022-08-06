import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { fetchRoomDetails } from "./roomAPI";

export interface CounterState {
  roomDetails: any;
  status: string | null;
}

const initialState: CounterState = {
  roomDetails: {},
  status: null,
};

export const getRoomDetails = createAsyncThunk(
  "room/getRoomDetails",
  async (id: string) => {
    const response = await fetchRoomDetails(id);
    return response;
  }
);

export const roomSlice = createSlice({
  name: "rooms",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoomDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getRoomDetails.fulfilled, (state, action) => {
        state.roomDetails = action.payload;
        state.status = "success";
      })
      .addCase(getRoomDetails.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const selectRoom = (state: RootState) => state.rooms;

export default roomSlice.reducer;
