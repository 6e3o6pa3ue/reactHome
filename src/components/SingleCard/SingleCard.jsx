// import * as React from 'react';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import CardActionArea from '@mui/material/CardActionArea';
// import { DEFAULT_IMAGE } from '../../constants/constants';
// import './singleCard.css'
// import { Link } from 'react-router-dom';

//  const cardStyle = {
//       maxWidth: 345,
//       background: `linear-gradient(
//                 90deg, 
//                 rgba(0, 0, 0, 0.80) 0%,  
//                 rgba(20, 20, 20, 0.40) 50%,  
//                 rgba(83, 100, 141, 0.00) 100%
//               )`,
//       position: "absolute",
//       width: "600px",
//       height: "222px",
//       color:"white",
//       display:'flex', 
//       flexDirection:'column', 
//       justifyContent: 'center', 
//       textAlign:'left',
//       backgroundSize: "contain",
//  };

// function SingleCard({
//     id,
//     name,
//     time,
//     image = DEFAULT_IMAGE,
//  }) {

    
//   return (
//     <Card
//       sx={{maxWidth: 345,}}
//     >
//      <CardActionArea sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
//       <CardMedia
//         sx={{
//           width: "395px",
//           height: "222px",
//           position: "relative", backgroundSize: "350px 222px",
         
//         }}
//         image={image}
//         alt="Image"
//       />
//       <Card className='card'
//         sx={cardStyle}
//       >
//         <CardContent>
//           <Typography variant="h5" color= "white">
//             {name}
//           </Typography>
//           <Typography variant="subtitle1" color="white">
//             {time}
//           </Typography>
//         </CardContent>

//         <Link className='btn'
//            to={`/show/${id}`}
//             >
//             Look is this 
//         </Link>
//       </Card>
//     </CardActionArea>
//     </Card>
//   );
// }

// export default SingleCard;
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
      <CardActionArea sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <CardMedia
          sx={{
            width: "100%",
            height: "222px",
            position: "relative",
            objectFit: 'cover',
            backgroundSize: "100% 100%",
          }}
          image={image}
          alt="Image"
        />
        <Card sx={cardStyle} className='card'>
          <CardContent>
            <Typography variant="h5" color="white">
              {name}
            </Typography>
            <Typography variant="subtitle1" color="white">
              {time}
            </Typography>
          </CardContent>

          <Link className='btn' to={`/show/${id}`}>
            Look at this
          </Link>
        </Card>
      </CardActionArea>
    </Card>
  );
}

export default SingleCard;
