import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    category: 0,
    sort: {
        name: "популярности",
        sortProperty: "rating",
        order: "desc",
    },
    page: 1,
    searchText: ''
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
        },
        setParams(state, action) {
            state.category = Number(action.payload.sortByCategory)
            state.sort = action.payload.sort
            state.page = Number(action.payload.countPages)
        },
        setDefaultParams(state) {
            state.category = initialState.category
            state.sort = initialState.sort
            state.page = initialState.page
        },
        setSearchText(state, action) {
            state.searchText = action.payload
        }
    },
})

export const { setCategodyId, setSortByType, onChangePages, setParams, setDefaultParams, setSearchText } = filterSlice.actions

export default filterSlice.reducer
