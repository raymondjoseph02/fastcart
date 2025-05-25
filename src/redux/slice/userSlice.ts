import { createSlice } from "@reduxjs/toolkit";
interface UserState {
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  } | null;
  isAuthenticated: boolean;
}
const initialState: UserState = {
  user: null,
  isAuthenticated: false,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});
export const userReducer = userSlice.reducer;
// export const {} = userSlice.actions;
