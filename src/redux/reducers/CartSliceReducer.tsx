import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
    CartProductInterface,
} from "../../typescript/data";

interface InitialStateType {
    cartProducts: CartProductInterface[];
    // isMobileCartOpened: boolean;
    isDesktopCartOpened: boolean;
}
const initialState: InitialStateType = {
    cartProducts: [],
    // isMobileCartOpened: false,
    isDesktopCartOpened: false,
};

const CartSlice = createSlice({
    name: "cartSlice",
    initialState,
    reducers: {
        // mobileCartToggleReducer: (state, action: PayloadAction<boolean>) => {
        //     state.isMobileCartOpened = action.payload;
        // },
        desktopCartToggleReducer: (state, action: PayloadAction<boolean>) => {
            state.isDesktopCartOpened = action.payload;
        },
        addToCart: (state, action: PayloadAction<CartProductInterface>) => {
            if (
                state.cartProducts.find(
                    (eachProduct) => eachProduct.productId === action.payload.productId
                )
            )
                return;
            // console.log("action.payload", action.payload);
            const newProduct = { ...action.payload, productQuantity: 1 };
            state.cartProducts = [...state.cartProducts, newProduct];
        },
        cartIncrement: (state, action: PayloadAction<number>) => {
            const IndexOfItemNeedToBeIncremented = state.cartProducts.findIndex(
                (eachItem) => eachItem.productId === action.payload
            );
            if (IndexOfItemNeedToBeIncremented === -1) return;
            const previousItem = state.cartProducts[IndexOfItemNeedToBeIncremented];
            const updatedItem = {
                ...previousItem,
                productQuantity: previousItem.productQuantity + 1,
            };
            state.cartProducts.splice(IndexOfItemNeedToBeIncremented, 1, updatedItem);
        },
        cartDecrement: (state, action: PayloadAction<number>) => {
            const IndexOfItemNeedToBeIncremented = state.cartProducts.findIndex(
                (eachItem) => eachItem.productId === action.payload
            );
            if (IndexOfItemNeedToBeIncremented === -1) return;
            const previousItem = state.cartProducts[IndexOfItemNeedToBeIncremented];
            const updatedItem = {
                ...previousItem,
                productQuantity: previousItem.productQuantity - 1,
            };
            state.cartProducts.splice(IndexOfItemNeedToBeIncremented, 1, updatedItem);
        },
        removeCartItem: (state, action: PayloadAction<number>) => {
            const itemIndex = state.cartProducts.findIndex(
                (each) => each.productId === action.payload
            );
            state.cartProducts.splice(itemIndex, 1);
        },
    },
});

export default CartSlice.reducer;
export const {
    addToCart,
    cartDecrement,
    cartIncrement,
    removeCartItem,
    // mobileCartToggleReducer,
    desktopCartToggleReducer,
} = CartSlice.actions;
