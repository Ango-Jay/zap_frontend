import { zapApi } from "./base"

export const SIGN_UP_USER = async(data:{
    firstName:string,
    lastName:string,
    email:string,
    password:string
})=>{
return await zapApi.post("/auth/signup", data);
};

export const LOGIN_USER = async(data:{
    email:string,
    password:string
})=>{
return await zapApi.post("/auth/login", data);
};