export interface ResponseGetBlog {
    id: number
    title: string
    email: string
    img: string
    overview: string
    tags: string
    updatedAt: string
    url: string
}

export interface DetailBlog extends ResponseGetBlog {
    content: string
    save: number
}

export interface ResponseGetDetailBlog{
    blog: DetailBlog,
    user: User,
    detail: DetailInfoBlog
}



export interface GetBlogData{
    listBlog: ResponseGetBlog[]
    count: number
}

export interface FilterBlog {
    email: string
    tags: string
}

export interface DataGetBlog extends FilterBlog {
    take: number
}

export interface FiterDataBlog extends DataGetBlog {
    page: number
}

export interface DataGetDetailBlog {
    auth: string
    title: string
}

export interface User {
    email: string
    name: string
    avatar: string
    role: string
    location: string
    work: string
    slogan: string
    createdAt: string
}

export interface DetailInfoBlog{
    heart: number
    view: number
    book_mark: number
}

export interface CurrentBlog {
    blog:  DetailBlog | null
    user: User | null
    detail: DetailInfoBlog
}