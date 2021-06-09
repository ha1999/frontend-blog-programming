export const sagaActions = {
    CHANGE_NAME: "CHANGE_NAME",
    CLEAR_NAME: "CLEAR_NAME"
}

export interface ChangeName {
    type: string,
    payload: string
}

  