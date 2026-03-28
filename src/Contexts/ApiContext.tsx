import { createContext, useEffect, useState, type ReactNode } from "react"
import {jwtDecode} from 'jwt-decode'
import type { User } from "../Types/User"


export interface ApiContextProps{
    userData:User|null,
    saveData:()=>void,
    email:string,
    saveEmail:(e:string)=>void
}
interface ApiContextProviderProps{
    children:ReactNode
}
export const ApiContext = createContext<ApiContextProps|null>(null)

export default function ApiContextProvider({children}:ApiContextProviderProps){
    const [email,setEmail] = useState<string>('');
    const saveEmail = (newEmail:string)=>{
        setEmail(newEmail)
    }
    const [userData,setUserData] = useState<User|null>(null)
    const saveData = ()=>{
        const encoded = localStorage.getItem('userToken');
        if(encoded){
            const decoded = jwtDecode<User>(encoded);
            setUserData(decoded);
        }
    }
    useEffect(()=>{
        if(localStorage.getItem('userToken')){
            saveData();
        }
    },[])
    return (<ApiContext.Provider value={{userData,saveData,email,saveEmail}}>{children}</ApiContext.Provider>)
    
}