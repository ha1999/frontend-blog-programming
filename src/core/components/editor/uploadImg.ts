import ToastifyBase from "../../../utils/toastify"
import httpApi from "../../api/http"

interface BlobInfo {
    id: () => string;
    name: () => string;
    filename: () => string;
    blob: () => Blob;
    base64: () => string;
    blobUri: () => string;
    uri: () => string | undefined;
}

interface UploadFailureOptions {
    remove?: boolean;
}

export const uploadImg = async (blodInfo: BlobInfo, success: (url: string) => void, failure: (err: string, options?: UploadFailureOptions | undefined) => void) => {
    const formData = new FormData()
    formData.append('file', blodInfo.blob())
    try {
        const {data} = await httpApi.post('file', formData)
        success(data)
    } catch (error) {
      ToastifyBase.error('123456765432')
        setTimeout(()=> {
          failure(`Error upload file: ${error.message}`, {
            remove: true
          })
        }, 2000)
    }
  }