export const sagaActions = {
  ADD_TO_COUNT: 'ADD_TO_COUNT',
  SUB_OF_COUNT: 'SUB_OF_COUNT',
};

export interface AddtoCount {
    type: string,
    payload: number
}
