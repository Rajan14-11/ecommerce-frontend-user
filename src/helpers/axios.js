import axios from "axios"
import { authConstants } from "../actions/constants"
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

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    console.log(error.response);
    const status = error.response ? error.response.status : 500;
    if (status && status === 500) {
      localStorage.clear();
      store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }
    return Promise.reject(error);
  }
);

export default instance