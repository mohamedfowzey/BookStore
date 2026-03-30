import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, Typography } from '@mui/material'
import axios from 'axios';
import { useState } from 'react'
import { useForm } from 'react-hook-form';
import { BG_COLORS } from '../../../Constants/COLORS';
import { useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { CHANGE_PASSWORD } from '../../../Constants/END_POINTS';
interface ChangePassData{
    password:string,
    password_new:string
}
export default function ChangePassword() {
  console.log('change-password');
  const [showOldPassword, setShowOldPassword] = useState(false);
  const handleClickShowOldPassword = () => setShowOldPassword((show) => !show);
    const [showNewPassword, setShowNewPassword] = useState(false);
  const handleClickShowNewPassword = () => setShowNewPassword((show) => !show);
    const {register,handleSubmit,formState:{errors}} = useForm<ChangePassData>();
     const [loading,setLoading] = useState(false);
       const navigete = useNavigate();

  const onsubmit =async (data:ChangePassData)=>{
    setLoading(true)
    console.log(data);
    try{
    const response = await axios.post(CHANGE_PASSWORD,data,{headers:{Authorization:`bearer ${localStorage.getItem('userToken')}`}});
    console.log(response);
    setLoading(false);
    navigete('/dashboard')
    }
    catch(e){
        alert(e.message);
        
        setLoading(false)
    }
    
    
  }
    
    
  return (
<Box component='form' onSubmit={handleSubmit(onsubmit)}>
    <FormControl  error={!!errors.password} fullWidth sx={{mt:3 }} variant="outlined">
          <InputLabel htmlFor="password">old Password</InputLabel>
          <OutlinedInput
          {...register('password',{required:'password is required !!',minLength:{value:8,message:'password can not be les than 8 chars'},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,message:"password must contain uppercase and lowercase letter(s) and digit(s) and special chareacters(@$%&?*!)"}})}
          
          id='password'
            type={showOldPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowOldPassword}
                  edge="start"
                >
                  {showOldPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='old password'
          />
            <Typography variant='caption' color='error'>{errors?.password?.message}</Typography>

        </FormControl>
    <FormControl  error={!!errors.password_new} fullWidth sx={{ my: 3 }} variant="outlined">
          <InputLabel htmlFor="new password">new Password</InputLabel>
          <OutlinedInput
          {...register('password_new',{required:'new password is required !!',minLength:{value:8,message:'new password can not be les than 8 chars'},pattern:{value:/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,message:"new password must contain uppercase and lowercase letter(s) and digit(s) and special chareacters(@$%&?*!)"}})}
          
          id='new password'
            type={showNewPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowNewPassword}
                  edge="start"
                >
                  {showNewPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label='new password'
          />
            <Typography variant='caption' color='error'>{errors?.password_new?.message}</Typography>

        </FormControl>
               <Button fullWidth variant='contained' sx={{backgroundColor:BG_COLORS.Primary, mt:3} } loading={loading} loadingIndicator='loading...' type='submit'>login</Button>

</Box>    
  )
}
