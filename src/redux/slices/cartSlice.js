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
            const findItem = state.items.find(item => item.id === action.payload.id)

            if (findItem) {
                findItem.count++
                findItem.size.push(action.payload.size[0])
                findItem.type.push(action.payload.type[0])
            }
            else state.items.push({ ...action.payload, count: 1 })
            state.totalPrice += action.payload.price
        },
        removeProduct(state, action) {
            // state.totalPrice -= action.payload.price
            // state.items = state.items.filter(obj => obj.id !== action.payload)
        },
        clearItems(state) {
            state = initialState
        }
    },
})

export const { addProduct, removeProduct, clearItems } = cartSlice.actions

export default cartSlice.reducer
