import { all } from 'redux-saga/effects'
import {commonSaga} from './common/saga'
import {authSaga} from './auth/saga'
export default function* rootSaga() {
  yield all([
    ...commonSaga,
    ...authSaga
  ])
}
