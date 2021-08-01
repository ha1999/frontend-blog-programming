import { FiterDataBlog, DataGetDetailBlog  } from "./blog.interface";

export const BLOG_GET_PAGE = 'BLOG_GET_PAGE'

export const GET_DETAIL_BLOG = 'GET_DETAIL_BLOG'

export interface ActionGetBlog{
    type: 'BLOG_GET_PAGE',
    payload: FiterDataBlog
}

export interface ActionGetDetailBlog{
    type: 'GET_DETAIL_BLOG',
    payload: DataGetDetailBlog
}