import httpApi from "../../api/http"
import { DataGetTag, DataSearch } from "./blog.action"
import { 
    DataGetBlog, 
    DataGetDetailBlog, 
    GetBlogData,
    ResponseGetDetailBlog
} from "./blog.interface"

export const getPageBlog = async (page: number, {email, take, tags}: DataGetBlog):Promise<GetBlogData> => {
    const url = `blogs/${page}?email=${email}&take=${take}&tags=${tags}`
    const {data} = await httpApi.get(url)
    return data
}

export const getDetailBlog = async ({title, auth}: DataGetDetailBlog): Promise<ResponseGetDetailBlog>  => {
    const {data} = await httpApi.get(`blogs/blog-detail/${auth}/${title}`)
    return data
}

export const heartToBlog = async (blogId: number): Promise<void>  => {
    await httpApi.post(`blog-detail-info/heart/${blogId}`)
}

export const userSaveToBog = async (blogId: number): Promise<void>  => {
    await httpApi.post(`blog-detail-info/save/${blogId}`)
}

export const getBlogOfTag = async (dataGet: DataGetTag):Promise<GetBlogData> =>{
    const {data} = await httpApi.get(`blogs/t/${dataGet.tag}/${dataGet.page}?take=${dataGet.take}`)
    return data
}

export const userSearchBlog = async (dataGet: DataSearch) :Promise<GetBlogData>  => {
    const query = `search=${dataGet.search}&page=${dataGet.page}&sort=${dataGet.sort}`
    const {data} = await httpApi.get(`blogs/search/full-text?${query}`)
    return data
}

