import httpApi from "../../api/http"
import { AuthResult, Profile } from "./auth.interface"

export async function login(token: string): Promise<AuthResult>{
    const {data} =  await httpApi.post('auth/google-login-user', {token})
    return data
}

export async function logout(): Promise<void>{
    await httpApi.post('auth/logout')
}

export async function checkLogin(): Promise<AuthResult>{
    const {data} =  await httpApi.post('auth/check-login')
    return data
}

export async function getProfile(): Promise<Profile>{
    const {data} =  await httpApi.get('users/profile')
    return data
}