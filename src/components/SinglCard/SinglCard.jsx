import React from 'react';
import { Card, CardMedia, Button, Typography } from '@mui/material';
import '../../SinglCard.css'

const SingleCard = ({ id, name, time, image, handleClick }) => {
  return (
    <Card sx={{ width: 395, height: 222, position: 'relative', display:'flex', gap:40}}>
      <CardMedia component="img" image={image} alt={name} />
      <div
        style={{
          position: 'reletive',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background:
            'linear-gradient(90deg, rgba(0, 0, 0, 0.80) 0%, rgba(20, 20, 20, 0.40) 50%, rgba(83, 100, 141, 0.00) 100%)',
        }}
      >
        <Typography variant="h6" component="div" sx={{ position: 'absolute', bottom: 0, left: 0, padding: 2 ,color: '#fff'}}>
          {name}
        </Typography>
        <Button variant="outlined" sx={{ position: 'absolute', bottom: 10, right: 10, border: '1px solid #E50914', background: '#E50914', color: '#fff' }} onClick={() => handleClick(id)}>Watch</Button>
      </div>
    </Card>
  );
};

export default SingleCard;