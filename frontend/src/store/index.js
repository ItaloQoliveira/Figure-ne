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
  searchedData: [],
};

export const figureSlice = createSlice({
  name: "figure",
  initialState: figureInitialState,
  reducers: {
    choseFigure: (state, { payload }) => {
      state.chosedFigure = payload;
    },
    setSearchedData: (state, {payload}) => {
      state.searchedData = [...payload];
    }
  },
});

export const { logIn, logOut, setLoggedUser } = authSlice.actions;

export const { choseFigure, setSearchedData } = figureSlice.actions;

export const store = configureStore({
  reducer: { auth: authSlice.reducer, figure: figureSlice.reducer },
});
