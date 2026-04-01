import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { Box, Button, Grid,  Skeleton,  Typography } from '@mui/material';
import {   BG_COLORS, TEXT_COLORS } from '../../../../Constants/COLORS';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import ArrowCircleLeftOutlinedIcon from '@mui/icons-material/ArrowCircleLeftOutlined';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';
import { useEffect, useState } from 'react';
import type { Book } from '../../../../Types/book';
import axios from 'axios';
import { ALL_BOOKS } from '../../../../Constants/END_POINTS';
import fallbackImage from '../../../../assets/hero-img.jpg'
export default function FeaturedBooksSlider() {
    const [allBooks, setAllBooks] = useState<Book[] | undefined>(undefined);
    const loading = allBooks == undefined;
      // const Slides = [];
      useEffect(() => {
        
        const getAllBooks = async () => {

          try{
          const response = await axios.get(ALL_BOOKS+'?page=2', {
            headers: {
              Authorization: "bearer " + localStorage.getItem("userToken"),
            },
          });
          setAllBooks(response.data.data);
        }
      
        catch(e){
          console.log(e);
        };}
        getAllBooks();
      }, []);
  return (
    <Swiper
    style={{backgroundColor:BG_COLORS.SecondaryLight}}
   
      className='featured-slider'
      slidesPerView={1}
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
     {loading? 
          (<>
            <SwiperSlide><Skeleton variant="rectangular"  sx={{m:'auto',width:'100%',height:'500px'}}/> </SwiperSlide>
            </>
        )
          :
     allBooks?.map((book:Book)=>
      <SwiperSlide>
        <Grid container sx={{height:'100%',py:6,pl:{lg:20,md:8,xs:2},pr:0}} alignItems={'center'} justifyContent={'center'}>
            <Grid  alignSelf={'stretch'} size={{sm:12,md:6}} sx={{width:{md:'fit-content',xs:'100%'}}}>
            <Box sx={{}}><img src={book.image.startsWith('http')?book.image:fallbackImage} style={{height:'500px',width:'300px',maxWidth:'100%',objectFit:'fill',margin:'auto'}}/></Box>
          </Grid>
          <Grid size={{sm:12,md:6}}>
            <Box sx={{px:8,textAlign:'start','& *':{width:'fit-content'},mx:'auto',width:'fit-content'}}>
              <Typography variant='h4' sx={{mb:4}} color={TEXT_COLORS.Primary}>Featured Book</Typography>
              <Typography variant='body1' sx={{mb:2,position:'relative',pt:0.25,':before':{
                content:'""',
                display:'block',
                position:'absolute',
                bottom:'100%',
                width:'80px',
                height:'1px',
                backgroundColor:TEXT_COLORS.Important

              }}} color={TEXT_COLORS.Caption} >by {book.author}</Typography>
              <Typography variant='h6' color={TEXT_COLORS.Primary}>{book.name}</Typography>
              <Typography variant='body2' sx={{my:2}} color={TEXT_COLORS.Caption}>{book.description}</Typography>
              <Typography variant='h5' color={TEXT_COLORS.Important}>${book.price}</Typography>
              <Button endIcon={<EastOutlinedIcon/>} variant='outlined' sx={{ color:TEXT_COLORS.Primary,borderColor:TEXT_COLORS.Primary, mt:10}}> learn more</Button>
            </Box>
          </Grid>
          
        </Grid>



      </SwiperSlide>
      )}
      </Swiper>
  )
}
