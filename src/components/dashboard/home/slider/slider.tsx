import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import './slider.scss'
// Import Swiper styles
import 'swiper/swiper-bundle.css';
import { Box, Button, Grid,  Typography } from '@mui/material';
import {   TEXT_COLORS } from '../../../../Constants/COLORS';
import book from '../../../../assets/book.png';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';


export default function Slider() {

  return (<>
     
    <Swiper
      className='hero-slider'
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={{nextEl:'.hero-slider-next',prevEl:'.hero-slider-prev'}}
        pagination={{clickable:true}}
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        loop
    >
  <ArrowCircleRightOutlinedIcon className='hero-slider-next' sx={{
    position:'absolute',
    top:'50%',
    right:'12px',
    fontSize:'34px',
    zIndex:1,
    color:TEXT_COLORS.Important,
    transition:'all .3s ease ',
     '&:hover':{
      backgroundColor:'white',
      borderRadius:'50%',
      cursor:'pointer'
     }
    }} />
      <ArrowCircleLeftOutlinedIcon className='hero-slider-prev' sx={{position:'absolute',top:'50%',left:'12px',fontSize:'34px',zIndex:1,color:TEXT_COLORS.Important,
    transition:'all .3s ease ',
     '&:hover':{
      backgroundColor:'white',
      borderRadius:'50%',
      cursor:'pointer'
     }}} /> 
      <SwiperSlide>
        <Grid container sx={{height:'100%'}} alignItems={'center'}>
          <Grid size={{sm:12,md:6}} sx={{order:{sm:2,md:1}}}>
            <Box sx={{paddingLeft:8,textAlign:'start'}}>
              <Typography variant='h2' sx={{mb:4}} color={TEXT_COLORS.Primary}>ipsum dolor si</Typography>
              <Typography variant='h6' sx={{mb:4}} color={TEXT_COLORS.Primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</Typography>
              <Button endIcon={<EastOutlinedIcon/>} variant='outlined' sx={{ color:TEXT_COLORS.Primary}}> learn more</Button>
            </Box>
          </Grid>
          <Grid sx={{px:6,py:3,order:{sm:1,md:2}}} alignSelf={'stretch'} size={{sm:12,md:6}}>
            <img src={book} />
          </Grid>
        </Grid>



      </SwiperSlide>
      <SwiperSlide>
        <Grid container sx={{height:'100%'}} alignItems={'center'}>
          <Grid size={{sm:12,md:6}}>
            <Box sx={{paddingLeft:8,textAlign:'start'}}>
              <Typography variant='h2' sx={{mb:4}} color={TEXT_COLORS.Primary}>ipsum dolor si</Typography>
              <Typography variant='h6' sx={{mb:4}} color={TEXT_COLORS.Primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</Typography>
              <Button endIcon={<EastOutlinedIcon/>} variant='outlined' sx={{ color:TEXT_COLORS.Primary}}> learn more</Button>
            </Box>
          </Grid>
          <Grid sx={{px:6,py:3}} alignSelf={'stretch'} size={{sm:12,md:6}}>
            <img src={book} alt="" />
          </Grid>
        </Grid>



      </SwiperSlide>
      <SwiperSlide>
        <Grid container sx={{height:'100%'}} alignItems={'center'}>
          <Grid size={{sm:12,md:6}}>
            <Box sx={{paddingLeft:8,textAlign:'start'}}>
              <Typography variant='h2' sx={{mb:4}} color={TEXT_COLORS.Primary}>ipsum dolor si</Typography>
              <Typography variant='h6' sx={{mb:4}} color={TEXT_COLORS.Primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</Typography>
              <Button endIcon={<EastOutlinedIcon/>} variant='outlined' sx={{ color:TEXT_COLORS.Primary}}> learn more</Button>
            </Box>
          </Grid>
          <Grid sx={{px:6,py:3}} alignSelf={'stretch'} size={{sm:12,md:6}}>
            <img src={book} alt="" />
          </Grid>
        </Grid>



      </SwiperSlide>
      <SwiperSlide>
        <Grid container sx={{height:'100%'}} alignItems={'center'}>
          <Grid size={{sm:12,md:6}}>
            <Box sx={{paddingLeft:8,textAlign:'start'}}>
              <Typography variant='h2' sx={{mb:4}} color={TEXT_COLORS.Primary}>ipsum dolor si</Typography>
              <Typography variant='h6' sx={{mb:4}} color={TEXT_COLORS.Primary}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.</Typography>
              <Button endIcon={<EastOutlinedIcon/>} variant='outlined' sx={{ color:TEXT_COLORS.Primary}}> learn more</Button>
            </Box>
          </Grid>
          <Grid sx={{px:6,py:3}} alignSelf={'stretch'} size={{sm:12,md:6}}>
            <img src={book} alt="" />
          </Grid>
        </Grid>



      </SwiperSlide>
      
    
    </Swiper>
    
    </>
  );
};