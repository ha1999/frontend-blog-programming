import { toast } from 'react-toastify';

class Toastify {
    info(info: string){
        toast.info(info)
    }
    success(title: string){
        toast.success(title)
    }
    warn(content: string){
        toast.warn(content)
    }
    error(error: string){
        toast.error(error)
    }
    dark(title: string){
        toast.dark(title)
    }
}

const ToastifyBase = new Toastify()

Object.freeze(ToastifyBase)

export default ToastifyBase
