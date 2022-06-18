import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "..";

export const CustomSelector: TypedUseSelectorHook<RootState> = useSelector;
