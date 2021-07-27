import { handlerError } from '../../../utils/handleError'
import ToastifyBase from '../../../utils/toastify'
import httpApi from '../http'
interface BlogCreate {
    img: File | null | undefined
    title: string
    overview: string
    tags: string[]
    content: string
}
export const createBlog = async (blog: BlogCreate, callback: (loading: boolean) => void) => {
    const validateBlog = Object.values(blog).some(value => !Boolean(value))
    if(validateBlog) ToastifyBase.warn('You have to fill all infomation for your blog')
    else {
        try {
            callback(true)
            const formData = new FormData()
            if(blog.img)formData.append('img', blog.img, blog.img.name)
            formData.append('title', blog.title)
            formData.append('overview', blog.overview)
            formData.append('tags', blog.tags.join(' '))
            formData.append('content', blog.content)
            await httpApi.post('blogs', formData)
            
        } catch (error) {
            handlerError(error)
        }
        finally {
            callback(false)
        }
    }

}