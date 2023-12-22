import React, { useEffect, useState, useRef } from 'react';
import SingleCard from '../components/SingleCard/SingleCard';
import Grid from "@mui/material/Grid";
import { DEFAULT_IMAGE } from '../constants/constants';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Typography } from '@mui/material';
import 'swiper/css';
import useRequestList from '../hooks/useRequstList';
import home from './home.css'

function Home() {
  const horrorFilms = useRequestList('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Horror');
  const crimeFilms = useRequestList('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/crime');
 

  return (
    <>
     <Grid container className='listfilm' style={{width: "1500px",
    marginLeft: "200px"}}>
        <Grid item xs={12}>
          <Typography variant='h3'>Horror shows</Typography>
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
        <Grid item xs={12}>
          <Typography variant='h3'>Crime shows</Typography>
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
