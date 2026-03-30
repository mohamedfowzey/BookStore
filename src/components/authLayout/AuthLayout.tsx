import { Box, CssBaseline, Grid } from '@mui/material'
import heroImg from '../../assets/hero-img.jpg'
import logo from '../../assets/Logo (Stroke).png'
import {  Outlet } from 'react-router-dom'

export default function AuthLayout() {
  
  return (
  <>
  {/* <ThemeProvider ></ThemeProvider> */}
  <CssBaseline/>
    <Grid container alignItems="center" flexDirection='row' sx={{height:'100vh'}}>
      <Grid size={{sm:12,md:6}} order={{sm:2,md:0} } alignSelf='stretch' sx={{display:{xs:'none',sm:'block'}}}>
        <img src={heroImg} style = {{height:'100vh',width:'100%'}}/>
      </Grid>
      <Grid size={{sm:12,md:6}} order={{sm:2,md:0}} alignSelf='stretch'>
        <Box display={'flex'} flexDirection={'column'}  alignItems={'center'} sx={{height:'100vh',pt:7}}>
        <img src={logo}/>
         <Box sx={{pt:6,width:'70%'}}>
          <Outlet></Outlet>
        </Box>
        </Box>
       

      </Grid>
    </Grid>
  </>
  )
}
