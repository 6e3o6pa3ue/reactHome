import useReqGenre from "../../hooks/useReqGenre";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Grid } from "@mui/material";
import { DEFAULT_IMAGE } from "../../constants/constants";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";
import TitleStaring from "../TitleStaring/TitleStaring";
import 'swiper/css/navigation';
import 'swiper/css';
import 'swiper/css/bundle';
import './titleSingleSlide.css';

const CardActionStyle = {
    display: 'flex', 
    justifyContent: 'left', 
    alignItems: 'center', 
    marginLeft:'3rem', 
    width:'30%',
    
};

function TitleSingleSlide () {
    const popular = useReqGenre('http://dolphin-app-pc6ii.ondigitalocean.app/article/popular');

    
    return(
        <Grid container>
            <Grid item xs={12}>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                style={{margin:'0'}}
                spaceBetween={0}
                slidesPerView={1}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
            {popular?.map((show, index) => (
              <SwiperSlide key={index}>
                <Card className="Card" sx={{
                position: 'relative',
                backgroundColor:'black',
                backgroundImage:` 
                // linear-gradient(
                //     115deg, 
                //     rgba(0, 0, 0, 1) 0%, 
                //     rgba(0, 0, 0, 93) 35%, 
                //     rgba(20, 20, 20, 0) 50%,
                //     rgba(0, 0, 0, 87) 67%,  
                //     rgba(0, 0, 0, 90) 100%
                // ),
                url(${show.image ? show.image.original || DEFAULT_IMAGE : DEFAULT_IMAGE})`,
              }}>
                <CardActionArea sx={CardActionStyle}>
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="div" color='white'>
                            {show.name}
                        </Typography>
                        <Typography 
                        className="summary" 
                        variant="body1" 
                        color="white" 
                        lineHeight='1.7'  
                        dangerouslySetInnerHTML={{ __html: show.summary }} 
                        />
                        <TitleStaring id={show.id}></TitleStaring>
                        <Typography sx={{marginBottom:'15px'}}>
                            <span className="genres">{show.genres[0]}</span>
                        </Typography>
                        <Typography>
                        <span className="tag">{show.genres.join(', ')}</span>
                        </Typography>
                        <Link
                        style={{
                            marginLeft:'0.2rem',
                            width:'150px'
                        }} 
                        className='btn'
                            to={`/show/${show.id}`}
                        >
                            Show More
                        </Link>
                    </CardContent>
                </CardActionArea>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
        </Grid>


    );
}

export default TitleSingleSlide;