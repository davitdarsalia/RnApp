import axios from 'axios';
import {AppDispatch} from '..';

import {feedSlice} from '../Reducers/feedReducer';

export const FetchHotels =
    (signal: AbortSignal) => async (dispatch: AppDispatch) => {
        try {
            dispatch(feedSlice.actions.fetchHotelsRequest());
            const response = await axios.get<HotelResponseTypes>(
                'https://hackathon-2022.herokuapp.com/api/product/allhotels',
                {signal: signal},
            );
            dispatch(feedSlice.actions.fetchHotelsSuccess(response.data));
        } catch (e: any) {
            dispatch(feedSlice.actions.fetchHotelsError(e));
        }
    };
