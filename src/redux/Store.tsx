import { configureStore } from "@reduxjs/toolkit";
import loginRegisterSlice from "./reducers/LoginRegisterSlice";

export const Store = configureStore({
    reducer: {
        loginRegister: loginRegisterSlice,
    },
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;