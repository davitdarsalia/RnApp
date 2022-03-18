import {PayloadAction} from '@reduxjs/toolkit';

interface initialStateProps {
   state: any;
}

const initialState: initialStateProps = {
   state: 0,
};

export const AuthReducer = (
   state = initialState,
   action: PayloadAction<any>,
): initialStateProps => {
   switch (action.type) {
      default:
         return {
            ...state,
         };
   }
};
