import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {RootState} from '../rootReducer'
type InitialState = {
    count: number
}

const initialState: InitialState = {
    count: 0
}

const FakeSlices = createSlice({
    name: 'FakeSlices',
    initialState,
    reducers: {
        addToCount(state, action: PayloadAction<number>){
            state.count += action.payload
        },
        subOfCount(state, action: PayloadAction<number>){
            state.count -= action.payload
        }
    }
})

export const {
    addToCount,
    subOfCount
} = FakeSlices.actions

export const getCount = (state: RootState) => state.fake.count

export default FakeSlices.reducer