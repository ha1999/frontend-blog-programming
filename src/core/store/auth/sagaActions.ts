
export const sagaActions = {
    LOG_IN: 'LOG_IN',
    LOG_OUT: 'LOG_OUT',
    CHECK_LOG_IN: 'CHECK_LOG_IN'
};

export interface LoginAction{
    type: 'LOG_IN',
    payload: string
}