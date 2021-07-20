import { Coords } from "./types";

export const sagaActions = {
    UPDATE_COORDS: 'UPDATE_COORDS',
};

export interface ChangeCoords {
    type: string,
    payload: Coords
}