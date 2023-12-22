import React, { useEffect, useState, useRef } from 'react';
import SingleCard from '../components/SingleCard/SingleCard';
import Grid from "@mui/material/Grid";
import useRequest from '../hooks/useRequest';
import { useDispatch, useSelector } from 'react-redux';
import { setSearch } from '../store/SearchSlice';
import { DEFAULT_IMAGE } from '../constants/constants';

const inputStyle = {
  color: 'black',
  backgroundColor: 'rgba(209, 208, 207,.6)',
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

  const handleCardClick = (id) => {
    // Обработка клика по карточке, если необходимо
  };

  const handleSearch = (e) => {
    dispatch(setSearch(e.target.value));
  };

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
          <option value="Action">Action</option>
          <option value="Fantasy">Fantasy</option>
        </select>
        <input
          placeholder='Search Films'
          type='text'
          style={inputStyle}
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
            <SingleCard
              id={id}
              name={name}
              time={premiered}
              genre={genres}
              image={image ? image.medium || DEFAULT_IMAGE : DEFAULT_IMAGE}
              onClick={handleCardClick}
            />
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default TVShows;
