import {UseCustomDispatch} from '../Hooks/CustomDispatch';
import {FeedActions} from '../Types/FeedTypes';

export const FetchHotels = () => {
    /* Any Type Should Be Changed */
    return (UseCustomDispatch: any) => {
        UseCustomDispatch({
            type: FeedActions.FETCH_HOTEL_SUCCESS,
            payload: 'Ddd',
        });
    };
};
