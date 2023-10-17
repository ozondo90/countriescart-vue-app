import axios from "axios";

const cliHttp = axios.create(
  {
    baseURL : "http://localhost:3000",
    headers : {
      Accept : "application/json",
      "Content-Type": "application/json"
    }

  }
)

export const useAxios = ()=>{
  const get = (url : string)=>{
    return cliHttp.get(url)
  };
  
  const post = (url : string , data :{})=>{
    return cliHttp.post(url , data)
  };

  return {
    get, post
  };

}
