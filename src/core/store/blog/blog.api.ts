import httpApi from "../../api/http"
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