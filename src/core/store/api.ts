import httpApi from "../api/http"

export interface User {
    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
}

export async function getDataTodo(): Promise<User[]>{
    const {data} = await httpApi.get('https://jsonplaceholder.typicode.com/users')
    return data
}