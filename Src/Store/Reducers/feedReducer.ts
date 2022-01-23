import {FeedInitialState} from './../Types/InitialStates';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';

const initialState: FeedInitialState = {
    hotels: {
        message: '',
        allHotels: [],
    },
    loading: false,
    error: null,
};

export const feedSlice = createSlice({
    name: 'feed',
    initialState,
    reducers: {
        fetchHotelsRequest(state) {
            state.loading = true;
        },
        fetchHotelsSuccess(state, action: PayloadAction<HotelResponseTypes>) {
            state.loading = false;
            state.error = '';
            state.hotels = action.payload;
        },
        fetchHotelsError(state, action: PayloadAction<string>) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export default feedSlice.reducer;
