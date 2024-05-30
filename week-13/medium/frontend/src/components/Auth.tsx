import axios from "axios"
import { SignupInput } from "gauravmasand447"
import { ChangeEvent, useState } from "react" 
import { Link, useNavigate } from "react-router-dom"
import { send } from "vite"
export const Auth =({type} :{type:"signup"|"signin"})=>{
    const navigate = useNavigate();
    const [postInputs,setPostInputs] = useState<SignupInput>({
        name:"",
        email:"",
        password:""
    })

    async function sendRequest(){
        try{
            const response = await axios.post(`http://127.0.0.1:8787/api/v1/user/${type=== "signup"?"signup":"signin"}`,postInputs);
            const data = response.data;
            const jwt = data.jwt;
            localStorage.setItem("token",jwt);
            navigate("/blogs");
        } catch(e){
            alert("Error while signing up")
        }
    }

    return <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
            <div>
                <div>
                    <div className="text-3xl font-extrabold">
                    {type ==="signin"?"Log in to your account":"Create an account"}
                    </div>
                    <div className="text-slate-400">
                    {type ==="signin"?"Don't have an account?":"Already have an account?"} 
                        <Link className="pl-2 underline" to={type=== "signin"?"/signup":"/signin"} >{type=== "signin"?"Sign up":"Login"}</Link>
                    </div>
                </div>
                <div className="pt-8">
                    {type==="signup"?<LabelledInput label="Name" placeholder="Gaurav Masand" onChange={(e)=>{
                        setPostInputs(c =>({
                            ...c,
                            name:e.target.value
                        }))
                    }}/>:null}
                    <LabelledInput label="Email" placeholder="gsm@gmail.com" onChange={(e)=>{
                        setPostInputs(c =>({
                            ...c,
                            email:e.target.value
                        }))
                    }}/>
                    <LabelledInput type={"password"} label="Password" placeholder="abcd" onChange={(e)=>{
                        setPostInputs(c =>({
                            ...c,
                            password:e.target.value
                        }))
                    }}/>
                    <button onClick={sendRequest} type="button" className="my-4 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg
                     text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type ==="signin"?"Sign in":"Sign up"}</button>

                </div>
            </div>
        </div>
    </div>
}
interface LabelledInputType{
    label:string;
    placeholder:string;
    onChange:(e: ChangeEvent<HTMLInputElement>)=>void;
    type?:string;
}

function LabelledInput ({label,placeholder,onChange,type}:LabelledInputType){
    return(
        <div>
            <div className="pt-2">
            <label className="block mb-2 text-sm font-bold  text-gray-900 dark:text-white">{label}</label>
            <input onChange={onChange} placeholder={placeholder} type={type||"text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg 
            focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            required />
        </div>
        </div>
    )
}