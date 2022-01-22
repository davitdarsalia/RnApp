import {TypedUseSelectorHook, useSelector} from 'react-redux';

import {RootStateType} from '..';

export const UseTypeSelector: TypedUseSelectorHook<RootStateType> = useSelector;
