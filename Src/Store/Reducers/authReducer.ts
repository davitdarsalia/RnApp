import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {registrationType} from '../../Types/GlobalInterfaces';
const initialState = {
    loginData: null,
    registerData: null,
    token: null,
    message: '',
    errorMessage: '',
    loading: false,
};

const url = `https://hackathon-2022.herokuapp.com/api/user/register`;

export const registrationAction = createAsyncThunk(
    'auth/registration',
    async ({fullName, email, password, checked}: registrationType) => {
        const result = await axios.post(url, {
            fullName,
            email,
            password,
            checked,
        });

        console.log(result);
    },
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(registrationAction.pending, (state) => {
                state.loading = true;
            })
            .addCase(registrationAction.fulfilled, (state, action: any) => {
                state.loading = false;
                state.message = action.payload;
            })
            .addCase(registrationAction.rejected, (state, action: any) => {
                state.loading = false;
                state.errorMessage = action.payload;
            });
    },
});

export default authSlice.reducer;
