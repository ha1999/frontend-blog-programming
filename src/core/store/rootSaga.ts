import { all } from 'redux-saga/effects'
import {usersSaga} from './users/saga'
import {fakeSaga} from './fake/saga'
import {commonSaga} from './common/saga'
import {authSaga} from './auth/saga'
export default function* rootSaga() {
  yield all([
    ...fakeSaga,
    ...usersSaga,
    ...commonSaga,
    ...authSaga
  ])
}
