/**
 * Reducer of file-text uploaded
 * @author Denys Ostroverkh
 * @published Nov 17, 2024
 * @modified Nov 17, 2024
 */

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FileState {
  data: object | null;
} //State type

const initialState: FileState = {
  data: null,
}; //State value

//Reducre of Mask
const fileSlice = createSlice({
  name: "file",
  initialState,
  reducers: {
    setFile: (state, action: PayloadAction<object>) => {
      state.data = action.payload;
    },
    clearFile: (state) => {
      state.data = null;
    },
  },
});

export const { setFile, clearFile } = fileSlice.actions;
export default fileSlice.reducer;
