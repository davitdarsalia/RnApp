import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootStateType } from '../config'

export const useCustomDispatch = () => useDispatch<AppDispatch>()
export const useCustomSelector: TypedUseSelectorHook<RootStateType> = useSelector
