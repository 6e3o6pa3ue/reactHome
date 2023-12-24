import React, { useEffect, useState, useRef } from 'react';
import SingleCard from '../components/SingleCard/SingleCard';
import Grid from "@mui/material/Grid";
import { DEFAULT_IMAGE } from '../constants/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from '@mui/material';
import 'swiper/css';
import useRequestList from '../hooks/useRequstList';
import TitleSingleSlide from "../components/TitleSingleSlide/TitleSingleSlide";
import { useLocation } from "react-router-dom";
import "./home.css"


function Home() {
  const horrorFilms = useRequestList('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Horror');
  const crimeFilms = useRequestList('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/crime');
 

  return (
    <>
    <TitleSingleSlide />
     <Grid container className='listfilm' style={{width: "1500px",
    marginLeft: "200px",color: "red"}}>
        <Grid item xs={12}><br></br><br></br><br></br><br></br>
          <Typography variant='h3'>Horror shows</Typography>
          <Typography variant='h3' className='swipe' sx={{
            fontSize: "24px"
          }}>Swipe →</Typography>
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {horrorFilms ? (
              horrorFilms.map((show, index) => (
                <SwiperSlide key={index}>
                  <SingleCard
                    id={show.id}
                    name={show.name}
                    premiered={show.premiered}
                    genres={show.genres}
                    image={show.image ? show.image.medium || DEFAULT_IMAGE : DEFAULT_IMAGE}
                  />
                </SwiperSlide>
              ))
            ) : (
              <Typography variant='body1'>Loading Horror films...</Typography>
            )}
          </Swiper>
        </Grid>
        <Grid item xs={12}><br></br>
          <Typography variant='h3' className='crime'>Crime shows</Typography>
          <Typography variant='h3' className='swipe' sx={{
            fontSize:"24px"
          }}>Swipe →</Typography>
          
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {crimeFilms ? (
              crimeFilms.map((show, index) => (
                <SwiperSlide key={index}>
                  <SingleCard
                    id={show.id}
                    name={show.name}
                    premiered={show.premiered}
                    genres={show.genres}
                    image={show.image ? show.image.medium || DEFAULT_IMAGE : DEFAULT_IMAGE}
                  />
                </SwiperSlide>
              ))
            ) : (
              <Typography variant='body1'>Loading Crime films...</Typography>
            )}
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
