import { Swiper, SwiperSlide } from "swiper/react";
import Slider from "./slider/slider";
import { Keyboard, Navigation, Pagination } from "swiper/modules";
import { Box, Stack } from "@mui/system";
import book from "../../../assets/hero-img.jpg";
import { Button, Skeleton, Typography } from "@mui/material";
import { TEXT_COLORS } from "../../../Constants/COLORS";
import { useEffect, useState } from "react";
import axios from "axios";
import { ALL_GATEGORIES } from "../../../Constants/END_POINTS";

import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import BooksSlider from "./booksSlider/BooksSlider";
import FeaturedBooksSlider from "./FeaturedBooksSlider/FeaturedBooksSlider";
import StaticPart from "./staticPart";
interface Category {
  _id: string;
  title: string;
  books: { image: string; name: string }[];
}

export default function Home() {
  const [Categories, SetGategories] = useState<Category[] | undefined>(
    undefined,
  );
  const loading = Categories == undefined;

  
  useEffect(() => {
    
  const getCategories = async () => {
    try {
      const response = await axios.get(ALL_GATEGORIES, {
        headers: {
          Authorization: `bearer ${localStorage.getItem("userToken")}`,
        },
      });
      // console.log(response.data);
      const data: Category[] | undefined = response.data;
      //filtering only categories with images
      const cates = data?.filter((c) =>
        c.books.some((b) => b.image.startsWith("http")),
      );
      const categories = cates?.map((c) => {
        const x = c.books.filter(
          (b) => b.image.startsWith("http") && b.image.includes("."),
        );
        c.books = x;
        return c;
      });

      SetGategories(categories);
    } catch (e) {
      console.log(e);
    }
  };
    console.log("getting categories");
    getCategories();
  }, []);
  return (
    // <div>Home</div>
    <>
      <Slider></Slider>
       
      <Box sx={{ py: 5,px:{xs:3,sm:4,md:12} }}>
        <Typography
          variant="body2"
          sx={{
            color: TEXT_COLORS.Important,
            position: "relative",
            fontWeight: "bold",
            paddingLeft: "30px",
            "::before": {
              content: '""',
              width: "24px",
              height: "1px",
              display: "block",
              position: "absolute",
              top: "50%",
              left: 0,
              backgroundColor: TEXT_COLORS.Important,
            },
          }}
        >
          categories
        </Typography>
        
<Stack direction={'row'}  justifyContent={"space-between"}>
            <Typography
              variant="h5"
              sx={{ marginBottom: 2, color: TEXT_COLORS.Primary }}
            >
              Explore our Top Categories
            </Typography>
            <Box
              sx={{ py: 2, color: TEXT_COLORS.Important, textAlign: "center" }}
            >
              <ArrowCircleLeftOutlinedIcon
                sx={{ fontSize: "34px", cursor: "pointer" }}
                className="category-slider-prev"
              />

              <ArrowCircleRightOutlinedIcon
                sx={{ fontSize: "34px", cursor: "pointer" }}
                className="category-slider-next"
              />
            </Box>
        </Stack>
        <Swiper
          className="categories-slider"
          spaceBetween={20}
          slidesPerView={3}
          navigation={{
            nextEl: ".category-slider-next",
            prevEl: ".category-slider-prev",
          }}
          pagination={true}
          keyboard={true}
          loop
          modules={[Navigation, Keyboard, Pagination]}
        >
          {loading? 
          (<>
            <SwiperSlide><Skeleton variant="rectangular" width={210} height={400} /> </SwiperSlide>
            <SwiperSlide><Skeleton variant="rectangular" width={210} height={400} /> </SwiperSlide>
            <SwiperSlide><Skeleton variant="rectangular" width={210} height={400} /> </SwiperSlide>
            </>
        )
          :

          Categories?.map((c) => {
            if (c._id == "6721003bac86463f9dddacbb") {
              c.books[0].image = book;
            }

            return (
              <SwiperSlide>
                <img
                  src={c.books[0].image}
                  alt={c.books[0].name}
                  style={{
                    display:'block',
                    borderRadius: "12px",
                    height: "500px",
                    textAlign: "center",
                  }}
                />
                <Typography variant='h5' sx={{color:TEXT_COLORS.Primary}}>{c.title}</Typography>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <Button
          variant="outlined"
          sx={{ display: "block", mx: "auto", marginTop: "20px" }}
        >
          view more
        </Button>
      </Box>
      <Box>
        <BooksSlider></BooksSlider>
        <FeaturedBooksSlider/>
      </Box>
      <Box>
        <StaticPart/>
      </Box>
    </>
  );
}
