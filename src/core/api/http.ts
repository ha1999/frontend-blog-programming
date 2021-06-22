import {instanceAxios} from './axios'

class Http {
    get(url: string, config?: Object) {
        return instanceAxios.get(url, config)
    }
    post(url: string, data?: Object, config?: Object){
        return instanceAxios.post(url, data, config)
    }
    put(url: string, data?: Object, config?: Object) {
        return instanceAxios.put(url, data, config)
    }
    delete(url: string, config: Object){
        return instanceAxios.delete(url, config)
    }
}

const httpApi = new Http()

Object.freeze(httpApi)

export default httpApi