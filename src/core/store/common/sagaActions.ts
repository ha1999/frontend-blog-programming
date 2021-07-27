import { Coords } from "./types";

export const sagaActions = {
    UPDATE_COORDS: 'UPDATE_COORDS',
    GET_LIST_TAGS: 'GET_LIST_TAGS',
    CLEAR_TAGS: 'CLEAR_TAGS',
    CHANGE_LOADING: 'CHANGE_LOADING'
};

export interface ChangeCoords {
    type: 'UPDATE_COORDS',
    payload: Coords
}

export interface ChangeLoading {
    type: 'CHANGE_LOADING',
    payload: boolean
}
