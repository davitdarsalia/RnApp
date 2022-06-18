import { useDispatch } from "react-redux";
import { AppDispatch } from "../index";

export const customDispatch: () => AppDispatch = useDispatch;
