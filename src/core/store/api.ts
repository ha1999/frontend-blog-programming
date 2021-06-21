import axios from 'axios'

export interface User {
    id: number
    name: string
    username: string
    email: string
    phone: string
    website: string
}

export async function getDataTodo(): Promise<User[]>{
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
    return data
}