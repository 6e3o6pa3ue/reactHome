import React, { useEffect, useState, useRef } from 'react';
import SingleCard from '../components/SingleCard/SingleCard';
import Grid from "@mui/material/Grid";
import useRequest from '../hooks/useRequest';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../store/SearchSlice';
import { DEFAULT_IMAGE } from '../constants/constants';
import { motion } from 'framer-motion'; 



const inputStyle = {
  color: 'black',
  backgroundColor: 'rgba(209, 208, 207, 0.6)',
  height: '30px',
  border: 'none',
  width: '300px',
  borderRadius: '20px',
};

function TVShows() {
  const apiSearch = useSelector((state) => state.search.search);
  const apiData = useRequest(apiSearch);
  const searchRef = useRef("");
  const dispatch = useDispatch();
  const [selectedGenre, setSelectedGenre] = useState('');
  const [selectedYear, setSelectedYear] = useState('');

  const handleGenreChange = (e) => {
    setSelectedGenre(e.target.value);
  };

  const handleYearChange = (e) => {
    setSelectedYear(e.target.value);
  };

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  const handleCardClick = (id) => {};

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const availableGenres = [
    "Action",
    "Fantasy",
    "Drama",
    "Comedy",
    "Thriller",
    "Horror",
    "Adventure",
    "Sci-Fi",
    "Crime",
    "Mystery",
    "Romance",
    "Animation",
    "Fantasy",
    "Western",
    "War",
    "Biography",
    "Historical",
    "Musical",
    "Sport",
    "Documentary"
    // Добавьте другие жанры по вашему выбору
  ];

  const filteredData = apiData.filter(({ genres, premiered }) => {
    const matchesGenre = !selectedGenre || (genres && genres.includes(selectedGenre));
    const matchesYear = !selectedYear || (premiered && premiered.includes(selectedYear));
    return matchesGenre && matchesYear;
  });

  return (
    <>
    
      <Grid container sx={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', paddingBottom: '4rem' }}>
        <select
          value={selectedGenre}
          onChange={handleGenreChange}
          style={{ ...inputStyle, height: '36px', width: '200px', marginRight: '10px' }}
        >
          <option value="">All Films</option>
          {availableGenres.map((genre, index) => (
            <option key={index} value={genre}>{genre}</option>
          ))}
        </select>
        <input
          placeholder='Search Films'
          type='text'
          style={{
            ...inputStyle,
            height: '36px',
            width: '300px',
            marginLeft: '10px',
            padding: '8px',
            fontSize: '16px',
            color: '#333',
            backgroundColor: 'rgba(209, 208, 207, 0.6)',
            borderRadius: '20px',
            border: 'none',
          }}
          value={apiSearch}
          onChange={handleSearch}
          ref={searchRef}
        />
        <input
          type="text"
          placeholder="Enter Year"
          value={selectedYear}
          onChange={handleYearChange}
          style={{ ...inputStyle, height: '30px', width: '200px', marginLeft: '10px' }}
        />
      </Grid>
      <Grid container spacing={2} sx={{ padding: "15px" }}>
        {filteredData.map(({ id, name, genres, image, premiered }, index) => (
          <Grid item xs={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 30 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: index * 0.1 }} 
            >
              <SingleCard
                id={id}
                name={name}
                time={premiered}
                genre={genres}
                image={image ? image.medium || DEFAULT_IMAGE : DEFAULT_IMAGE}
                onClick={handleCardClick}
              />
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default TVShows;
