import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    totalPrice: 0,
    items: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addProduct(state, action) {
            const isAvailable = state.items.find(item => item.id === action.payload.id && item.type === action.payload.type && item.size === action.payload.size)
            if (isAvailable) {
                isAvailable.count++
            }
            else
                state.items.push({ ...action.payload, count: 1 })

            state.totalPrice += action.payload.price
        },
        cutProduct(state, action) {
            const isAvailable = state.items.find(item => item.id === action.payload.id && item.type === action.payload.type && item.size === action.payload.size)

            if (isAvailable) {
                isAvailable.count--
                state.totalPrice -= action.payload.price
            }
        },
        deleteItem(state, action) {
            const isAvailable = state.items.find(item => item.id === action.payload.id && item.type === action.payload.type && item.size === action.payload.size)

            state.items = state.items.filter(item => item !== isAvailable)
            state.totalPrice -= action.payload.price
        },
        clearItems(state) {
            state.items = []
            state.totalPrice = 0
            console.log(state)
        }
    },
})

export const { addProduct, cutProduct, clearItems, deleteItem } = cartSlice.actions

export default cartSlice.reducer
