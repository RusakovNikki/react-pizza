import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: 0,
    sort: {
        name: "популярности",
        sortProperty: "rating",
        order: "desc",
    }
}

export const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategodyId(state, action) {
            state.category = action.payload
        },
        setSortByType(state, action) {
            state.sort = action.payload
        }
    },
})

export const { setCategodyId, setSortByType } = filterSlice.actions

export default filterSlice.reducer