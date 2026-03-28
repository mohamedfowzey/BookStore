import { Box, Button, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { TEXT_COLORS } from "../../../Constants/COLORS";
import { useForm } from "react-hook-form";
import axios from "axios";
import { FORGET_PASSWORD } from "../../../Constants/END_POINTS";
import { useNavigate } from "react-router-dom";
import { ApiContext } from "../../../Contexts/ApiContext";
interface ForgetPassword {
  email: string;
}
export default function ForgetPassword() {
    const [loading,setLoading] = useState<boolean>(false);
    const navigate = useNavigate();
    const context =useContext(ApiContext)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ForgetPassword>();
  const onsubmit = async (data: ForgetPassword) => {
    setLoading(true)
    console.log(data);
    context?.saveEmail( data.email )
    try{
    const res = await axios.post(FORGET_PASSWORD, data);
    console.log(res);
    setLoading(false);
    navigate('/reset-password')
}
    catch(e){
        console.log(e);
        setLoading(false)
        
    }
  };
  return (
    <>
      <Box sx={{ mb: 5 }}>
        <Typography variant="caption" sx={{ color: TEXT_COLORS.Caption }}>
          Welcome back
        </Typography>
        <Typography variant="h5">Forgot your password !!</Typography>
      </Box>
      <Box component="form" onSubmit={handleSubmit(onsubmit)}>
        <TextField
        sx={{mb:3}}
          {...register("email", {
            required: "email is required",
            pattern: {
              value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
              message: "invalid email",
            },
          })}
          type="text"
          label="email"
          variant="outlined"
          fullWidth
          error={!!errors.email}
          helperText={errors?.email?.message}
        />
        <Button
          fullWidth
          variant="outlined"
          sx={{
            my: 1,
            borderBlockColor: TEXT_COLORS.Primary,
            outlineColor: TEXT_COLORS.Primary,
            color: TEXT_COLORS.Primary,
          }}
          type="submit"
          loading={loading} 
          loadingIndicator='loading...'
        >
          send
        </Button>
      </Box>
    </>
  );
}
