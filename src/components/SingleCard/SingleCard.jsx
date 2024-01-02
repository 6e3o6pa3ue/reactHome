
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { DEFAULT_IMAGE } from '../../constants/constants';
import './singleCard.css';
import { Link } from 'react-router-dom';

const cardStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background:
    'linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  padding: '8px',
};

function SingleCard({
  id,
  name,
  time,
  image = DEFAULT_IMAGE,
}) {

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardActionArea
        component={Link}
        to={`/show/${id}`}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          width: '100%',
          height: '222px',
          objectFit: 'cover',
          backgroundSize: '100% 100%',
        }}
      >
        <CardMedia
          component="img"
          image={image}
          alt="Image"
        />
        <CardContent sx={cardStyle} className='card'>
          <Typography variant="h5" color="white">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="white">
            {time}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default SingleCard;
