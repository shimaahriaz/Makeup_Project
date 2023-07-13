import { configureStore } from "@reduxjs/toolkit";
import cartSlice from './Slice/Cart'

export const store= configureStore({
   reducer: {
    cart: cartSlice,
   }
   
});
