import { FiterDataBlog, DataGetDetailBlog  } from "./blog.interface";

export const BLOG_GET_PAGE = 'BLOG_GET_PAGE'

export const GET_DETAIL_BLOG = 'GET_DETAIL_BLOG'

export const HEART_TO_BLOG = 'HEART_TO_BLOG'

export const USER_SAVE_BLOG = 'USER_SAVE_BLOG'

export const GET_BLOG_OF_TAG = 'GET_BLOG_OF_TAG'

export const CLEAR_LIST_BLOG = 'CLEAR_LIST_BLOG'

export const USER_SEARCH_BLOG = 'USER_SEARCH_BLOG'

export const GET_BLOG_OF_USER = 'GET_BLOG_OF_USER'

export interface ActionGetBlog{
    type: 'BLOG_GET_PAGE',
    payload: FiterDataBlog
}

export interface ActionGetDetailBlog{
    type: 'GET_DETAIL_BLOG',
    payload: DataGetDetailBlog
}

export interface HeartToBlog {
    type: 'HEART_TO_BLOG',
    payload: number

}

export interface DataSaveBlog {
    type: 'USER_SAVE_BLOG',
    payload: number
}

export interface DataGetTag {
    page: number
    take: number
    tag: string
}

export interface DataSearch {
    search: string
    page: number
    sort: 'desc' | 'asc'
}

export interface DataTagOfBog {
    type: 'GET_BLOG_OF_TAG',
    payload: DataGetTag
}

export interface ActionDataSearch{
    type: 'USER_SEARCH_BLOG',
    payload: DataSearch
}

export interface ActionDataGetBlogUser{
    type: 'GET_BLOG_OF_USER',
    payload: {
        email: string
        page: number
    }
}
