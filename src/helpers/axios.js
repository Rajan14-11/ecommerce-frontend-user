import axios from "axios"
import store from "../store/store"
import { api } from "../urlConfig"

const token = window.localStorage.getItem('token')

const instance = axios.create({
    baseURL:api,
    headers:{
        'auth-token': token ? token : ''
    }
})

instance.interceptors.request.use((req)=>{
    const {auth} = store.getState()
    if(auth.token){
         req.headers.authToken = `Bearer ${auth.token}`;
    }
    return req
})

export default instance