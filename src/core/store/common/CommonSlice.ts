import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'

import {InitialState, Coords} from './types'

const initialState: InitialState = {
    coords: {
        lat: 0,
        lng: 0
    },
    listTags: [],
    loading: false
}

const CommonSlice = createSlice({
    name: 'CreateSlice',
    initialState,
    reducers: {
        updateCoords(state, action: PayloadAction<Coords>){
            state.coords = action.payload
        },
        setListTags(state, action: PayloadAction<string[]>){
            state.listTags = action.payload
        },
        clearTags(state){
            state.listTags = []
        },
        setLoading(state, action: PayloadAction<boolean>){
            state.loading = action.payload
        }
    }

})



export const {updateCoords, setListTags, clearTags, setLoading} = CommonSlice.actions

export const getCoords = (state: RootState) => state.common.coords;
export const getTags = (state: RootState) => state.common.listTags;
export const getSystemTags = (state: RootState) => state.common.listTags
export const getLoading = (state: RootState) => state.common.loading

export default CommonSlice.reducer