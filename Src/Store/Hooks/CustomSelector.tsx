import {TypedUseSelectorHook, useSelector} from 'react-redux';
import {RootState} from '..';

export const UseTypeSelector: TypedUseSelectorHook<RootState> = useSelector;
