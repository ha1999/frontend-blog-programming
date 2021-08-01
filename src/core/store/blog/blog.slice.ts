import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { RootState } from '../rootReducer'
import {ResponseGetBlog, FilterBlog, GetBlogData, CurrentBlog} from './blog.interface'
type InitialState = {
    listBlog: ResponseGetBlog []
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
        user: null
    }
}

const BlogSlice = createSlice({
    name: 'BlogSlice',
    initialState,
    reducers: {
        setListBlog(state, action: PayloadAction<GetBlogData>){
            state.listBlog  = action.payload.listBlog
            state.count = action.payload.count
        },
        setDetailBlog(state, action: PayloadAction<CurrentBlog>){
            state.currentBlog = action.payload
        }
    }

})

export const {
    setListBlog,
    setDetailBlog
} = BlogSlice.actions


export const getFilterBlog = (state: RootState) => state.blog.filter

export const getTakePage = (state: RootState) => state.blog.take

export const getListBlogs = (state: RootState) => state.blog.listBlog

export const getBlogCurrent  = (state: RootState) => state.blog.currentBlog

export default BlogSlice.reducer