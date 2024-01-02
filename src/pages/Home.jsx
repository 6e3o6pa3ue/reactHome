import { useEffect, useState, useRef } from "react";
import SingleCard from "../components/SingleCard/SingleCard";
import Grid from "@mui/material/Grid";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../store/SearchSlice";
import { DEFAULT_IMAGE } from "../constants/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/bundle";
import useReqGenre from "../hooks/useReqGenre";
import "./home.css";
import TitleSingleSlide from "../components/TitleSingleSlide/TitleSingleSlide";



function Home() {
  const actionFilms = useReqGenre(
    "https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Action"
  );
  const comedyFilms = useReqGenre(
    "https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Comedy"
  );
  return (
    <>
      <TitleSingleSlide />
      <Grid container>
        <Grid item xs={12}>
          <h1 style={{ marginLeft: "1.5rem" }} className="title" variant="h3">
            Action Shows
          </h1>
          <Swiper
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            centeredSlides={true}
            loop={true}
            modules={[Navigation, EffectCoverflow]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            style={{ margin: "25px 20px" }}
            spaceBetween={20}
            slidesPerView={5}
            initialSlide={7}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {actionFilms?.map((show, index) => (
              <SwiperSlide key={index}>
                <SingleCard
                  id={show.id}
                  name={show.name}
                  time={show.premiered}
                  image={
                    show.image
                      ? show.image.medium || DEFAULT_IMAGE
                      : DEFAULT_IMAGE
                  }
                  // onClick={handleCardClick}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </Grid>
        <Grid item xs={12}>
          <h1 style={{ marginLeft: "1.5rem" }} className="title" variant="h3">
            Comedy Shows
          </h1>
          <Swiper
            effect={"coverflow"}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            centeredSlides={true}
            loop={true}
            modules={[Navigation, EffectCoverflow]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            style={{ margin: "25px 20px" }}
            spaceBetween={30}
            slidesPerView={5}
            initialSlide={7}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {comedyFilms?.map((show, index) => (
              <SwiperSlide key={index}>
                <SingleCard
                  id={show.id}
                  name={show.name}
                  time={show.premiered}
                  image={
                    show.image
                      ? show.image.medium || DEFAULT_IMAGE
                      : DEFAULT_IMAGE
                  }
                  // onClick={handleCardClick}
                />
              </SwiperSlide>
            ))}
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </Swiper>
        </Grid>
      </Grid>
    </>
  );
}

export default Home;
