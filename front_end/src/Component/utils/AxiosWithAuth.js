import axios from "axios";
export function getToken(){

    return localStorage.getItem("token")

}
console.log(getToken())
export const AxiosWithAuth=()=>{
    // const token= localStorage.getItem("token");

    return axios.create(
        {
            baseURL: 'https://anywherefitnessbuildweek.herokuapp.com/',
            headers:{
                "Content-Type": 'application/json',
                "authorization": getToken(),
            },
        }
    );
}