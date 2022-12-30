import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const fetchPizzas = createAsyncThunk(
    "pizza/fetchPizzas",
    async (URL: string, thunkAPI) => {
        const { data } = await axios.get<Pizza[]>(URL)

        return data
    }
)

enum Status {
    LOADING = "loading",
    SUCCESS = "success",
    ERROR = "error",
}

type Pizza = {
    id: number
    title: string
    price: number
    imageUrl: string
    size: number[]
    type: number[]
}

interface PizzaSliceState {
    items: Pizza[]
    status: Status
}

const initialState: PizzaSliceState = {
    items: [],
    status: Status.LOADING,
}

export const pizzaSlice = createSlice({
    name: "pizza",
    initialState,
    reducers: {
        setItems(state, action) {
            state.items = action.payload
        },
    },

    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state, action) => {
            console.log("Запрос данных...")
            state.items = []
            state.status = Status.LOADING
        })

        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.items = action.payload
            console.log("Ок")
        })

        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = Status.ERROR
            state.items = []
        })
    },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
