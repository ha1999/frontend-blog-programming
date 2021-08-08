import {put, takeLatest, call} from 'redux-saga/effects'
import { handlerError } from '../../../utils/handleError'
import ToastifyBase from '../../../utils/toastify'
import { setLoading } from '../common/CommonSlice'
import {
    ActionGetBlog, 
    BLOG_GET_PAGE, 
    ActionGetDetailBlog,
    GET_DETAIL_BLOG,
    HeartToBlog,
    HEART_TO_BLOG,
    DataSaveBlog,
    USER_SAVE_BLOG,
    DataTagOfBog,
    GET_BLOG_OF_TAG,
    CLEAR_LIST_BLOG,
    ActionDataSearch,
    USER_SEARCH_BLOG
} from './blog.action'
import { getPageBlog, getDetailBlog, heartToBlog, userSaveToBog, getBlogOfTag, userSearchBlog } from './blog.api'
import { ResponseGetDetailBlog, GetBlogData} from './blog.interface'
import { actionHeartBlog, actionSaveBlog, setDetailBlog, setListBlog, clearListBlog } from './blog.slice'

function* getPageBlogSaga(filter: ActionGetBlog){
    yield put(setLoading(true))
    const {page, tags, take, email } = filter.payload
    try {
        const data: GetBlogData  =yield call(getPageBlog,page, {tags, take,email})
        yield put(setListBlog(data))
    } catch (error) {
        handlerError(error)
    } finally {
        yield put(setLoading(false))
    }
}

function* getDetailBlogSaga(action: ActionGetDetailBlog){
    yield put(setLoading(true))
    const {auth, title} = action.payload
    try {
        const blogDetail: ResponseGetDetailBlog = yield call(getDetailBlog,{ auth, title})
        yield put(setDetailBlog(blogDetail))
    } catch (error) {
        handlerError(error)
    } finally {
        yield put(setLoading(false))
    }
}

function* heartToBlogSaga(action: HeartToBlog){
    try {
        yield call(heartToBlog, action.payload)
        yield put(actionHeartBlog(1))
        ToastifyBase.success('Thank you!')
    } catch (error) {
        handlerError(error)
    }
}

function* userSaveBlogSaga(action: DataSaveBlog){
    try {
        yield call(userSaveToBog, action.payload)
        yield put(actionSaveBlog(1))
        ToastifyBase.success('Thank you! You saved this blog!')
    } catch (error) {
        handlerError(error)
    }
}

function* listBlogOfTagSaga(action: DataTagOfBog){
    yield put(setLoading(true))
    try {
        const data: GetBlogData  = yield call(getBlogOfTag, action.payload)
        yield put(setListBlog(data))
    } catch (error) {
        handlerError(error)
    } finally {
        yield put(setLoading(false))
    }
}

function* getUserSearchBlogSaga(action: ActionDataSearch){
    yield put(setLoading(true))
    try {
        const data: GetBlogData  = yield call(userSearchBlog, action.payload)
        yield put(setListBlog(data))
    } catch (error) {
        handlerError(error)
    } finally {
        yield put(setLoading(false))
    }
}

function* clearListBlogSaga(){
    yield put(clearListBlog())
}

export const blogSaga = [
    takeLatest(BLOG_GET_PAGE, getPageBlogSaga),
    takeLatest(GET_DETAIL_BLOG, getDetailBlogSaga),
    takeLatest(HEART_TO_BLOG, heartToBlogSaga),
    takeLatest(USER_SAVE_BLOG,userSaveBlogSaga),
    takeLatest(GET_BLOG_OF_TAG, listBlogOfTagSaga),
    takeLatest(CLEAR_LIST_BLOG, clearListBlogSaga),
    takeLatest(USER_SEARCH_BLOG, getUserSearchBlogSaga)
]
