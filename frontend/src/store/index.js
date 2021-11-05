import { configureStore } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

const authInitialState = {
    isLoggedIn: false,
    loggedUser: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: authInitialState,
    reducers: {
        logIn: (state) => {
            state.isLoggedIn = true;
        },
        logOut: (state) => {
            state.isLoggedIn = false;
        },
        setLoggedUser: (state, {payload}) => {
            state.loggedUser = payload;
        }
    }
})

export const {logIn, logOut, setLoggedUser} = authSlice.actions;

export const store = configureStore({
  reducer: {auth: authSlice.reducer},
})