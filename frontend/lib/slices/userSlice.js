import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  _id: null,
  email: null,
  firstName: null,
  lastName: null,
  color: null,
  authProvider: null,
  clerkId: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      const {
        _id,
        email,
        firstName,
        lastName,
        color,
        authProvider,
        clerkId,
      } = action.payload;

      state._id = _id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.color = color;
      state.authProvider = authProvider;
      state.clerkId = clerkId;
    },

    clearUser(state) {
      Object.assign(state, initialState); // resets everything
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
