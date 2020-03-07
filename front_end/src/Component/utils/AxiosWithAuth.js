import axios from "axios";
export function getToken(){
    return localStorage.getItem("token")
}
export const AxiosWithAuth=()=>{
    // const token= localStorage.getItem("token");

    return axios.create(
        {
            baseURL: "https://lambda-anywhere-fitness.herokuapp.com/",
            headers:{
                "Content-Type": 'application/json',
                "Authorization": getToken(),
            },
        }
    );
}