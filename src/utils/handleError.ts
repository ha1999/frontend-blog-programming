import ToastifyBase from "./toastify"

export const handlerError = (error: any) => {
    if(error.response){
        console.log(error.response)
        ToastifyBase.error(error.response.data.message)
    }
    else {
        ToastifyBase.error('Error server')
    }
}



