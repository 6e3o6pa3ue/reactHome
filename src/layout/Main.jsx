import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation/Navigations";
import { Grid} from "@mui/material";
import Footer from "../components/Footer/Footer";

function Main () {
    return (
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
         <Navigation/>
         <Grid container style={{ flex: 1, paddingBottom: '60px', }} >
         <Outlet/>
        </Grid>
        <h3 style={{color:'red'}}>Vsem Privet</h3>
        <Footer/>
        </div>
    )
}

export default Main;
// import React, { useState } from 'react';
// import { Grid } from "@mui/material";
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Typography } from '@mui/material';
// import 'swiper/css';
// import Navigation from "../components/Navigation/Navigations";
// import Footer from "../components/Footer/Footer";
// import useRequest from '../hooks/useRequest'; // Путь к вашему хуку useRequest
// import SingleCard from '../components/SingleCard/SingleCard'; // Путь к вашему компоненту SingleCard
// import { DEFAULT_IMAGE } from '../constants/constants'; // Путь к вашей константе DEFAULT_IMAGE

// function Main() {
//   const actionFilms = useRequest('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Action');
//   const crimeFilms = useRequest('https://dolphin-app-pc6ii.ondigitalocean.app/article/byGenre/Crime');
//   const [selectedFilm, setSelectedFilm] = useState('');
//   const handleCardClick = (id) => {
//     setSelectedFilm(id);
//   };

//   return (
//     <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Navigation />
//       <Grid container style={{ flex: 1, paddingBottom: '60px' }}>
//         <Grid container>
//           <Grid item xs={12}>
//             <Typography variant='h3'>Action shows</Typography>
//             <Swiper
//               spaceBetween={50}
//               slidesPerView={3}
//               onSlideChange={() => console.log('slide change')}
//               onSwiper={(swiper) => console.log(swiper)}
//             >
//               {actionFilms?.map((show, index) => (
//                 <SwiperSlide key={index}>
//                   <SingleCard
//                     id={show.id}
//                     name={show.name}
//                     premiered={show.premiered}
//                     genres={show.genres}
//                     image={show.image ? show.image.medium || DEFAULT_IMAGE : DEFAULT_IMAGE}
//                   />
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </Grid>
//           <Grid item xs={12}>
//             <Typography variant='h3'>Crime shows</Typography>
//             <Swiper
//               spaceBetween={50}
//               slidesPerView={3}
//               onSlideChange={() => console.log('slide change')}
//               onSwiper={(swiper) => console.log(swiper)}
//             >
//               {crimeFilms?.map((show, index) =>
//                 console.log(show) && (
//                   <SwiperSlide key={index}>
//                     <SingleCard
//                       id={show.id}
//                       name={show.name}
//                       premiered={show.premiered}
//                       genres={show.genres}
//                       image={show.image ? show.image.medium || DEFAULT_IMAGE : DEFAULT_IMAGE}
//                     />
//                   </SwiperSlide>
//                 ))}
//             </Swiper>
//           </Grid>
//         </Grid>
//       </Grid>
//       <Footer />
//     </div>
//   )
// }

// export default Main;
