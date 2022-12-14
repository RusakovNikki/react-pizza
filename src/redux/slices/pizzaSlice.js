import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchPizzas = createAsyncThunk(
    'pizza/fetchPizzas',
    async (URL, thunkAPI) => {
        const { data } = await axios.get(URL)

        return data
    }
)


const initialState = {
    items: [],
    status: 'loading'
}

export const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        }
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            console.log('Запрос данных...');
            state.items = []
            state.status = 'loading'
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
            console.log('Ок');
        },
        [fetchPizzas.rejected]: (state) => {
            state.status = 'error'
            state.items = []
        }
    },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
