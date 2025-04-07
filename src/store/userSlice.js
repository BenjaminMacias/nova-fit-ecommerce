import { createSlice } from "@reduxjs/toolkit";

// Revisa si ya hay un usuario guardado en localStorage
const savedUser = JSON.parse(localStorage.getItem("novaUser"));

const initialState = {
  user: savedUser || null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
      localStorage.setItem("novaUser", JSON.stringify(action.payload));
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("novaUser");
    },
  },
});

export const { setUser, logout } = userSlice.actions;
export default userSlice.reducer;
