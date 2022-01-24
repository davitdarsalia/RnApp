import axios from 'axios';
import {AppDispatch} from '..';

import {feedSlice} from '../Reducers/feedReducer';

export const FetchHotels = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(feedSlice.actions.fetchHotelsRequest());
        const response = await axios.get<HotelResponseTypes>(
            'https://hackathon-2022.herokuapp.com/api/product/allhotels',
        );
        setTimeout(() => {
            dispatch(feedSlice.actions.fetchHotelsSuccess(response.data));
        }, 50);
    } catch (e) {
        dispatch(feedSlice.actions.fetchHotelsError(e));
    }
};
