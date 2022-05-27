import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "..";

export const UseCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
