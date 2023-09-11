import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    countryData: []
}


export const countrySlice = createSlice({
    name: 'country',
    initialState,
    reducers: {
        setCountryData: (state, action) => {
            state.countryData = action.payload
        },
    },
})

export const { setCountryData } = countrySlice.actions

export default countrySlice.reducer