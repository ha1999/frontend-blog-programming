import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'
import { ResponseGetBlog, FilterBlog, GetBlogData, CurrentBlog } from './blog.interface'
type InitialState = {
    listBlog: ResponseGetBlog[]
    take: number
    filter: FilterBlog
    count: number
    currentBlog: CurrentBlog
}

const initialState: InitialState = {
    listBlog: [],
    count: 0,
    take: 10,
    filter: {
        email: '',
        tags: ''
    },
    currentBlog: {
        blog: null,
        user: null,
        detail: {
            view: 0,
            heart: 0,
            book_mark: 0
        }
    }
}

const BlogSlice = createSlice({
    name: 'BlogSlice',
    initialState,
    reducers: {
        setListBlog(state, action: PayloadAction<GetBlogData>) {
            state.listBlog = action.payload.listBlog
            state.count = action.payload.count
        },
        setDetailBlog(state, action: PayloadAction<CurrentBlog>) {
            state.currentBlog = action.payload
        },
        actionHeartBlog(state, action: PayloadAction<number>) {
            state.currentBlog.detail.heart += action.payload
        },
        actionSaveBlog(state, action: PayloadAction<number>) {
            state.currentBlog.detail.book_mark += action.payload
        },
        clearListBlog(state) {
            state.listBlog = []
            state.count = 0
        },
        removeBlogCurrent(state) {
            state.currentBlog = {
                blog: null,
                user: null,
                detail: {
                    view: 0,
                    heart: 0,
                    book_mark: 0
                }
            }
        }
    }

})

export const {
    setListBlog,
    setDetailBlog,
    actionHeartBlog,
    actionSaveBlog,
    clearListBlog,
    removeBlogCurrent
} = BlogSlice.actions


export const getFilterBlog = (state: RootState) => state.blog.filter

export const getTakePage = (state: RootState) => state.blog.take

export const getListBlogs = (state: RootState) => state.blog.listBlog

export const getBlogCurrent = (state: RootState) => state.blog.currentBlog

export const getDetailInfoBlog = (state: RootState) => state.blog.currentBlog.detail

export const getCountBlog = (state: RootState) => state.blog.count

export default BlogSlice.reducer