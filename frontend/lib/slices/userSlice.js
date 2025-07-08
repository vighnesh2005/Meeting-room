import { createSlice } from "@reduxjs/toolkit";

// ✅ Load from localStorage (if present)
const storedUser =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("user") || "null")
    : null;

const initialState = storedUser || {
  _id: null,
  email: null,
  firstName: null,
  lastName: null,
  color: null,
  authProvider: null,
  clerkId: null,
  image: null,
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
        image,
      } = action.payload;

      // ✅ update state
      state._id = _id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.color = color;
      state.authProvider = authProvider;
      state.clerkId = clerkId;
      state.image = image || null;

      // ✅ store in localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("user", JSON.stringify(state));
      }
    },

    clearUser(state) {
      state._id = null;
      state.email = null;
      state.firstName = null;
      state.lastName = null;
      state.color = null;
      state.authProvider = null;
      state.clerkId = null;
      state.image = null;

      // ✅ clear from localStorage
      if (typeof window !== "undefined") {
        localStorage.removeItem("user");
      }
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
