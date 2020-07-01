import axios from 'axios'
export const userList=()=>(dipatch)=>{
    return (
        axios.get("https://jsonplaceholder.typicode.com/users")
        ).then(res=>dipatch({
            type:"GET",
            payload:res.data
        }))

}