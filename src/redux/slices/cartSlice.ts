import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { getCartFromLS } from "../../utils/getCartFromLS"

export type CartItem = {
    imageUrl: string
    title: string
    type: string
    size: number
    price: number
    count: number
    id: number
}

interface CartSliceState {
    totalPrice: number
    items: CartItem[]
}

const initialState: CartSliceState = {
    totalPrice: getCartFromLS().sum,
    items: getCartFromLS().data,
}

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProduct(state, action: PayloadAction<CartItem>) {
            const isAvailable = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.type === action.payload.type &&
                    item.size === action.payload.size
            )
            if (isAvailable) {
                isAvailable.count++
            } else state.items.push({ ...action.payload, count: 1 })

            state.totalPrice += action.payload.price
        },
        cutProduct(state, action: PayloadAction<CartItem>) {
            const isAvailable = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.type === action.payload.type &&
                    item.size === action.payload.size
            )

            if (isAvailable) {
                isAvailable.count--
                state.totalPrice -= action.payload.price
            }
        },
        deleteItem(state, action: PayloadAction<CartItem>) {
            const isAvailable = state.items.find(
                (item) =>
                    item.id === action.payload.id &&
                    item.type === action.payload.type &&
                    item.size === action.payload.size
            )

            state.items = state.items.filter((item) => item !== isAvailable)
            state.totalPrice -= action.payload.price * action.payload.count
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
        },
    },
})

export const { addProduct, cutProduct, clearItems, deleteItem } =
    cartSlice.actions

export default cartSlice.reducer
