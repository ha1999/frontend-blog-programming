import ToastifyBase from "./toastify"

export const handlerError = (error: any) => {
    if(error.response){
        const status = error.response.status as number
        console.log(error.response, 'status')
        if(status === 401)ToastifyBase.warn('You have not login! \\n Please sigin with google')
        if(status === 403) window.location.href = window.location.hostname
        // if(status === 404) window.location.href = window.location.origin + '/not-found'
        else ToastifyBase.error(error.response.data.message)
    }
    else {
        ToastifyBase.error('Error server')
    }
}



