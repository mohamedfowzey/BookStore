import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, Link, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { BG_COLORS, TEXT_COLORS } from '../../../Constants/COLORS';
import {  Navigate, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { LOGIN } from '../../../Constants/END_POINTS';
import { ApiContext } from '../../../Contexts/ApiContext';
interface LoginData{
  email:string,
  password:string
}
export default function Login() {
  
    const context = useContext(ApiContext)
  const [loading,setLoading] = useState(false)
  const {register,handleSubmit,formState:{errors}} = useForm<LoginData>()
  const navigete = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);

 
  const onsubmit =async (data:LoginData)=>{
    setLoading(true)
    console.log(data);
    const response = await axios.post(LOGIN,data);
    const userToken = (response.data.data.accessToken);
    localStorage.setItem('userToken',userToken);
    context?.saveData()
    setLoading(false);
    navigete('/dashboard')
    
    
  }
  
  const handleClickShowPassword = () => setShowPassword((show) => !show);
   if(localStorage.getItem('userToken')){
    return <Navigate to = '/dashboard'/>
  }
  return (
    <>
      <Box sx={{mb:5}}> 
        <Typography variant='caption' sx={{color:TEXT_COLORS.Caption}}>Welcome back!</Typography>
      <Typography variant='h5'>Login to your account</Typography>
      </Box>
      <Box component='form' onSubmit={handleSubmit(onsubmit)}>
        <TextField
        {...register('email',{required:"email is required",pattern:{value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,message:'invalid email'}})}
          type='text'
          label='email'
          variant='outlined'
          fullWidth  
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControl  error={!!errors.password} fullWidth sx={{ mt: 3 }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
          {...register('password',{required:'password is required !!',minLength:{value:8,message:'password can not be les than 8 chars'}})}
          
          id='password'
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  edge="start"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='password'
          />
            <Typography variant='caption' color='error'>{errors?.password?.message}</Typography>

        </FormControl>
        <Link component={'span'} onClick={()=>{navigete('/forget-password')}} variant='caption' sx={{color:TEXT_COLORS.Important,p:0,textAlign:'end',cursor:'pointer',marginLeft:'auto',display:'block'}}>forget password?</Link>
       <Button fullWidth variant='contained' sx={{backgroundColor:BG_COLORS.Primary, mt:3} } loading={loading} loadingIndicator='loading...' type='submit'>login</Button>
       <Button fullWidth variant='outlined' sx={{my:1,borderBlockColor:TEXT_COLORS.Primary ,outlineColor:TEXT_COLORS.Primary,color:TEXT_COLORS.Primary}} onClick={()=>{navigete('/register')}}>register</Button>
      </Box>

    </>
  )
}
