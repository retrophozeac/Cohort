import axios from "axios";
import { useEffect, useState } from "react"

export const useBlogs =()=>{
    const [loading, setLoading] = useState(true);
    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        axios.get(`http://127.0.0.1:8787/api/v1/blog/bulk`,
            {headers:{
                Authorization:localStorage.getItem("token")
            }}
        )
            .then(response=>{
                setBlogs(response.data);
                setLoading(false);
            })
    })
    return{
        loading,
        blogs
    }
}