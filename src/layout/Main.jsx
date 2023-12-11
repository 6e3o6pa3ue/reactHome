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
        <Footer/>
        </div>
    )
}

export default Main;




                                                   // Вывод 10 фильмов 
// import { useState, useEffect } from 'react';
// import { Outlet } from 'react-router-dom';
// import Navigation from '../components/Navigation/Navigations';
// import { Grid } from '@mui/material';
// import Footer from '../components/Footer/Footer';
// import axios from 'axios';

// function Main() {
//   const [topMovies, setTopMovies] = useState([]);

//   useEffect(() => {
//     const fetchTopMovies = async () => {
//       try {
//         const response = await axios.get('https://www.tvmaze.com/countdown');
//         setTopMovies(response.data.results);
//       } catch (error) {
//         console.error('Error fetching top movies:', error);
//       }
//     };

//     fetchTopMovies();
//   }, []);

//   return (
//     <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       <Navigation />
//       <Grid container style={{ flex: 1, paddingBottom: '60px' }}>
//         {topMovies.map((movie) => (
//           <div key={movie.id}>
//             <p>{movie.title}</p>
//             <img src={movie.poster} alt={movie.title} />
//             <p>Year: {movie.year}</p>
//           </div>
//         ))}
//         <Outlet />
//       </Grid>
//       <Footer />
//     </div>
//   );
// }

// export default Main;