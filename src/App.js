import { Grid } from '@mui/material';
import './App.css';
import React from 'react';
import Navigation from "./components/Navigation/Navigation"
import SingleCard from './components/SinglCard/SinglCard';
import Footer from './components/Footer/Footer';


const mockData = [
  {
    id: 1,
    name: "Home Alone",
    image: "https://www.justwatch.com/images/backdrop/303885113/s640/home-alone/home-alone",
    time: "1h: 50min",
  },
  {
    id: 2,
    name: "Black Adam",
    image: "https://fwcdn.pl/fph/49/45/824945/1110429.1.jpg",
    time: "2h: 10min",
  },
  {
    id: 3,
    name: "Back to the Future",
    image: "https://deadline.com/wp-content/uploads/2022/07/1A26A865-13F9-4E64-87D3-DC7845F3F4BD.jpeg",
    time: "2h: 50min",
  },
  {
    id: 4,
    name: "Avengers",
    image: "https://gaming-cdn.com/images/products/7525/616x353/marvel-s-avengers-xbox-one-xbox-series-x-s-xbox-one-xbox-series-x-s-game-microsoft-store-europe-cover.jpg?v=1647592926",
    time: "2h:30min",
  },
];

const App = () => {
  const handleMovieClick = (movieId) => {
    console.log('Нажатие на Кнопку:', movieId);
  };
  
  return (
    <div className="App">
    <Grid container spacing={2}>
      <Navigation/>  
      {mockData.map((movie) => (
        <Grid item key={movie.id}>
          <SingleCard
            id={movie.id}
            name={movie.name}
            image={movie.image}
            time={movie.time}
            handleClick={handleMovieClick}
            />
        </Grid>
      ))}
    </Grid>
    <Footer/>
    </div>
  );
};

export default App;