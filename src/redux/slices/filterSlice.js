import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: 0,
    sort: {
        name: "популярности",
        sortProperty: "rating",
        order: "desc",
    },
    page: 1
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
        },
        onChangePages(state, action) {
            state.page = action.payload
        }
    },
})

export const { setCategodyId, setSortByType, onChangePages } = filterSlice.actions

export default filterSlice.reducer