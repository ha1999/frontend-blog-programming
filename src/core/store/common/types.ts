export type InitialState = {
    coords: Coords
    listTags: string[]
    loading: boolean
}

export interface Coords {
    lat: number
    lng: number
}