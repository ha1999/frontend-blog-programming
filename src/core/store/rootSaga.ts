import { all } from 'redux-saga/effects'
import {commonSaga} from './common/saga'
import {authSaga} from './auth/saga'
import {blogSaga} from './blog/blog.saga'

export default function* rootSaga() {
  yield all([
    ...commonSaga,
    ...authSaga,
    ...blogSaga
  ])
}
