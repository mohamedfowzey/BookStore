import  { useContext, type JSX } from 'react'
import { ApiContext } from '../Contexts/ApiContext'
import { Navigate } from 'react-router-dom';

export default function Protect({children}:{children:JSX.Element}) {
  const context = useContext(ApiContext);
  if(context?.userData || localStorage.getItem('userToken')){
    return children
  }
  else{
    return <Navigate to='/'/>
  }
}
