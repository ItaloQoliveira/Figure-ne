import { configureStore } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  isLoggedIn: false,
  loggedUser: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
    },
    setLoggedUser: (state, { payload }) => {
      state.loggedUser = payload;
    },
  },
});

const figureInitialState = {
  chosedFigure: "",
};

export const figureSlice = createSlice({
  name: "figure",
  initialState: figureInitialState,
  reducers: {
    choseFigure: (state, { payload }) => {
      state.chosedFigure = payload;
    },
  },
});

export const { logIn, logOut, setLoggedUser } = authSlice.actions;

export const { choseFigure } = figureSlice.actions;

export const store = configureStore({
  reducer: { auth: authSlice.reducer, figure: figureSlice.reducer },
});
