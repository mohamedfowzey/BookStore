import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { BG_COLORS, TEXT_COLORS } from '../../../Constants/COLORS'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { ApiContext } from '../../../Contexts/ApiContext';
import axios from 'axios';
import { RESET_PASSWORD } from '../../../Constants/END_POINTS';
import { useNavigate } from 'react-router-dom';
interface ResetPasswordData{
    email:string|undefined,
    otp:string,
    password:string,
}
export default function ResetPassword() {
    const {register,handleSubmit,formState:{errors}} = useForm<ResetPasswordData>()
    const [loading,setLoading] = useState<boolean>(false)
    const context = useContext(ApiContext)
    const navigate = useNavigate();
    
    const onsubmit = async (data:ResetPasswordData)=>{
        data.email=context?.email
        setLoading(true)
        console.log(data);
        if(data.email!=''){
        try{
            const response = await axios.post(RESET_PASSWORD,data);
            console.log(response);
            setLoading(false);
            navigate('/login')
        }
        catch(e){
            console.log(e);
            setLoading(false)
        }}
        else{
            navigate('/forget-password')
        }
    }
    const [showPassword, setShowPassword] = React.useState(false);
      const handleClickShowPassword = () => setShowPassword((show) => !show);
      useEffect(()=>{if(!context?.email){navigate('/forget-password')}})
  return (
    <>
      <Box sx={{mb:5}}> 
        <Typography variant='caption' sx={{color:TEXT_COLORS.Caption}}>Welcome back!</Typography>
      <Typography variant='h5'>reset password</Typography>
      </Box>
      <Box component='form' onSubmit={handleSubmit(onsubmit)}>
        {/* <TextField
        {...register('email',{required:"email is required",pattern:{value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,message:'invalid email'}})}
          type='text'
          label='email'
          variant='outlined'
          fullWidth  
          error={!!errors.email}
          helperText={errors?.email?.message}
        /> */}
        <TextField
        {...register('otp',{required:'otp is required',maxLength:{value:6,message:"otp should be 6 digits"},minLength:{value:6,message:'otp should be 6 digits'}})}
        type='number'
        label='OTP'
        variant='outlined'
        fullWidth
        error={!!errors.otp}
        helperText={errors?.otp?.message}
        />
        <FormControl  error={!!errors.password} fullWidth sx={{ mt: 3 }} variant="outlined">
          <InputLabel htmlFor="password">new Password</InputLabel>
          <OutlinedInput
          {...register('password',{required:'password is required !!',minLength:{value:8,message:'password can not be les than 8 chars'},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])\S+$/,message:'Sorry, the password must contain at least one uppercase letter, one lowercase letter, one number, one special character'}})}
          
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
            label='new password'
          />
            <Typography variant='caption' color='error'>{errors?.password?.message}</Typography>

        </FormControl>
       <Button fullWidth variant='contained' sx={{backgroundColor:BG_COLORS.Primary, mt:3} } loading={loading} loadingIndicator='loading...' type='submit'>reset password</Button>
      </Box>

    </>
  )
}
