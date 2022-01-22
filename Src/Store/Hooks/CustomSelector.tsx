import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '../Reducers/RootReducer';

export const UseTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
