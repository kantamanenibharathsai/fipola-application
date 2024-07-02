import { configureStore } from "@reduxjs/toolkit";
import CartSliceReducer from "./reducers/CartSliceReducer";
import loginRegisterSlice from "./reducers/LoginRegisterSlice";

export const Store = configureStore({
    reducer: {
        loginRegister: loginRegisterSlice,
        cart: CartSliceReducer,
    },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;