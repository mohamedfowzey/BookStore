import { Box, Divider, Skeleton, Typography } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { BG_COLORS, TEXT_COLORS } from "../../../../Constants/COLORS";
import { useEffect, useState } from "react";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import axios from "axios";
import { ALL_BOOKS } from "../../../../Constants/END_POINTS";
import type { Book } from "../../../../Types/book";

export default function BooksSlider() {
  const [allBooks, setAllBooks] = useState<Book[] | undefined>(undefined);
  const loading = allBooks == undefined;
  useEffect(() => {
    const getAllBooks = async () => {
      
      const response = await axios.get(ALL_BOOKS, {
        headers: {
          Authorization: "bearer " + localStorage.getItem("userToken"),
        },
      });
      setAllBooks(response.data.data);
    };
    getAllBooks();
  }, []);
  return (
    <Box
      sx={{
        backgroundColor: BG_COLORS.PrimaryLight,
        pt: 5,
        pb:4,
        textAlign: "center",
      }}
    >
      <Typography variant="caption" sx={{ color: TEXT_COLORS.Caption }}>
        Some quality items
      </Typography>
      <Typography
        variant="h2"
        sx={{ color: TEXT_COLORS.Primary, position: "relative",mb:4 }}
      >
        {" "}
        <Divider
          sx={{
            position: "absolute",
            width: "100%",
            top: "50%",
            left: 0,
            zIndex: -1,
          }}
        />
        <span
          style={{
            backgroundColor: BG_COLORS.PrimaryLight,
            position: "relative",
          }}
        >
          {" "}
          New Release Books{" "}
        </span>
      </Typography>
      <Box sx={{pb:0}}>
      <Swiper
      breakpoints={{
        800:{
          slidesPerView:4
        },
          600:{
          slidesPerView:3
        },
          400:{
          slidesPerView:2
        }


      }}
      style={{paddingBottom:'56px'}}
      className="books-slider"
        slidesPerView={1}
        spaceBetween={12}
        pagination={{
            clickable:true,
            
        }}
        navigation={true
          
        }
        keyboard={true}
        modules={[Navigation, Pagination, Keyboard]}
        loop
      >
        {loading? 
                  (<>
                    <SwiperSlide><Skeleton variant="rectangular" width={210} height={400} /> </SwiperSlide>
                    <SwiperSlide><Skeleton variant="rectangular" width={210} height={400} /> </SwiperSlide>
                    <SwiperSlide><Skeleton variant="rectangular" width={210} height={400} /> </SwiperSlide>
                    <SwiperSlide><Skeleton variant="rectangular" width={210} height={400} /> </SwiperSlide>
                    </>
                )
                  :
        allBooks?.map(
            (book)=>
        <SwiperSlide>
          <Box sx={{p:3,backgroundColor:'white'}}>
             
            <img src={book.image} alt="" style={{height:350}}/>
          </Box>
          <Typography variant="h6" sx={{color:TEXT_COLORS.Primary,mt:2 }}>{book.name}</Typography>
          <Typography variant="caption" sx={{color:TEXT_COLORS.Caption}}>{book.author}</Typography>
          <Typography variant="body2" sx={{color:TEXT_COLORS.Important}}>${book.price}</Typography>
        </SwiperSlide>
        )}
        <Divider/>
      </Swiper>
      </Box>
    </Box>
  );
}
