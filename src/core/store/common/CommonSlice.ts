import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'

import {InitialState, Coords} from './types'

const initialState: InitialState = {
    coords: {
        lat: 0,
        lng: 0
    }
}

const CommonSlice = createSlice({
    name: 'CreateSlice',
    initialState,
    reducers: {
        updateCoords(state, action: PayloadAction<Coords>){
            state.coords = action.payload
        }
    }

})



export const {updateCoords} = CommonSlice.actions

export const getCoords = (state: RootState) => state.common.coords;


export default CommonSlice.reducer