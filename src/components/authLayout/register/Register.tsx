import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, Stack, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { REGISTER } from '../../../Constants/END_POINTS';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BG_COLORS, TEXT_COLORS } from '../../../Constants/COLORS';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface RegisterData{
    first_name:string,
    last_name:string,
    email:string,
    password:string
    role:'customer'|'admin'
}

export default function Register() {
    const {register,handleSubmit,formState:{errors}} = useForm<RegisterData>();
     const [loading,setLoading] = useState(false)
  const onsubmit =async (data:RegisterData)=>{
    setLoading(true)
    console.log(data);
    try{
    const response = await axios.post(REGISTER,data,{headers:{
        'language':'en'
    }});
    console.log(response);
    
    setLoading(false);
    navigete('/')
    }
    catch(e){
        console.log(e);
        
        setLoading(false)
    }
    
    
  }
  const navigete = useNavigate();
    const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  return (
    <>
         <Box sx={{mb:5}}> 
        <Typography variant='caption' sx={{color:TEXT_COLORS.Caption}}>create new account</Typography>
      <Typography variant='h5'>Register</Typography>
      </Box>
      <Box component='form' onSubmit={handleSubmit(onsubmit)}>
        <Stack direction={'row'} gap={2} sx={{my:3}}>
            <TextField
        {...register('first_name',{required:"firstname is required",})}
          type='text'
          label='firstname'
          variant='outlined'
          fullWidth  
          error={!!errors['first_name']}
          helperText={errors['first_name']?.message}
        />
        <TextField
        {...register('last_name',{required:"lastname is required"})}
          type='text'
          label='lastname'
          variant='outlined'
          fullWidth  
          error={!!errors['last_name']}
          helperText={errors['last_name']?.message}
        />
        </Stack>
        <TextField
        {...register('email',{required:"email is required",pattern:{value:/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,message:'invalid email'}})}
          type='text'
          label='email'
          variant='outlined'
          fullWidth  
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <FormControl  error={!!errors.password} fullWidth sx={{ my: 3 }} variant="outlined">
          <InputLabel htmlFor="password">Password</InputLabel>
          <OutlinedInput
          {...register('password',{required:'password is required !!',minLength:{value:8,message:'password can not be les than 8 chars'},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,message:"password must contain uppercase and lowercase letter(s) and digit(s) and special chareacters(@$%&?*!)"}})}
          
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
        <FormControl fullWidth>
        <InputLabel id="role">Role</InputLabel>

        <Select {...register('role',{required:'must selelct the role'})} labelId='role' label='role' variant='outlined' aria-placeholder='role' value={'Customer'} >
            <MenuItem  value='Customer'>customer</MenuItem>
        </Select>
        </FormControl>

       <Button fullWidth variant='contained' sx={{backgroundColor:BG_COLORS.Primary, mt:3} } loading={loading} loadingIndicator='loading...' type='submit'>register</Button>
       <Button fullWidth variant='outlined' sx={{my:1,borderBlockColor:TEXT_COLORS.Primary ,outlineColor:TEXT_COLORS.Primary,color:TEXT_COLORS.Primary}} onClick={()=>{navigete('/')}}>login</Button>
      </Box>

    </>
  )
}