import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    cars: [ "Model S", "Model 3", "Model X", "Model Y" ] 
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {}
});

export const selectCars = state => state.car.cars       // we'll get "Model S", "Model 3", "Model X", "Model Y"

export default carSlice.reducer