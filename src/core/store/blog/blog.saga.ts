import {put, takeLatest, call} from 'redux-saga/effects'
import { handlerError } from '../../../utils/handleError'
import {
    ActionGetBlog, 
    BLOG_GET_PAGE, 
    ActionGetDetailBlog,
    GET_DETAIL_BLOG
} from './blog.action'
import { getPageBlog, getDetailBlog } from './blog.api'
import { ResponseGetDetailBlog, GetBlogData} from './blog.interface'
import { setDetailBlog, setListBlog } from './blog.slice'

function* getPageBlogSaga(filter: ActionGetBlog){
    const {page, tags, take, email } = filter.payload
    try {
        const data: GetBlogData  =yield call(getPageBlog,page, {tags, take,email})
        yield put(setListBlog(data))
    } catch (error) {
        handlerError(error)
    }
}

function* getDetailBlogSaga(action: ActionGetDetailBlog){
    const {auth, title} = action.payload
    try {
        const blogDetail: ResponseGetDetailBlog = yield call(getDetailBlog,{ auth, title})
        yield put(setDetailBlog(blogDetail))
    } catch (error) {
        handlerError(error)
    }
}

export const blogSaga = [
    takeLatest(BLOG_GET_PAGE, getPageBlogSaga),
    takeLatest(GET_DETAIL_BLOG, getDetailBlogSaga)

]