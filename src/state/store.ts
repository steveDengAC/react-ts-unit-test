import { configureStore } from "@reduxjs/toolkit";
import * as BankSlice from "./bank"

export const store = configureStore({
    reducer: {
        Bank: BankSlice.reducer
    }
})