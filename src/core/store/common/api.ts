import httpApi from "../../api/http"

export const getListTags = async(): Promise<string[]> => {
    const {data} =  await httpApi.get('tags/all')
    return data
}