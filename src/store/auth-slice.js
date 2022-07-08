import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: { isLoggedIn: false, loggedInUser: null },
    reducers: {
        login(state, action) {
            state.isLoggedIn = true;
            state.loggedInUser = action.payload;
        },
        logout(state) {
            state.isLoggedIn = false;
            state.loggedInUser = null;
        },
    }
});

export const authActions = authSlice.actions;
export default authSlice;