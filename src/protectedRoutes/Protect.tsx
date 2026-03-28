import React, { useContext } from 'react'
import { ApiContext } from '../Contexts/ApiContext'
import { Navigate } from 'react-router-dom';

export default function Protect(props) {
  const context = useContext(ApiContext);
  if(context?.userData || localStorage.getItem('userToken')){
    return props.children
  }
  else{
    return <Navigate to='/'/>
  }
}
