import Rating from "@mui/material/Rating";
import GoogleIcon from '@mui/icons-material/Google';
import ShareIcon from '@mui/icons-material/Share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddIcon from '@mui/icons-material/Add';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import './singleItemHeader.css';
import { DEFAULT_IMAGE } from '../../constants/constants';

function SingleItemHeader({
  name, 
  rating, 
  genres, 
  premiered,
  views, 
  averageRuntime, 
  image}) {
   
    return (
      
      <div className="Header">
         <div className="video">
      <video controls width="500" height="300">
        <source src="C:\Users\dima_\OneDrive\Рабочий стол\Скрипт\reactHome\src\components\SingleItemHeader\ФОРСАЖ 10 - Финальный Русский трейлер (4K ULTRA HD) 2023.mp4" type="video/mp4" />
      </video>
    </div> 
        <div className="Title">
            <h1>{name}</h1>
          <div className='raiting'>
            {rating && rating.average !== null && (
                <p
                  className='raiting'
                >
                  <Rating
                    name="read-only"
                    value={rating.average / 2}
                    max={5}
                    size="medium"
                    style={{ color: "rgba(209, 46, 39)" }}
                    readOnly
                  />
                  <span
                    className='number_rating'
                  >
                    {rating.average.toFixed(1)}
                  </span>
                </p>
               )}
            </div>
        </div>

        <div className='Wizit_Name'>
          <span>{genres[0]}</span>
        </div>

        <div className='others'>
          <div className='google_ikons'><GoogleIcon style={{color:'#fff', width:'15px'}}/></div>
          <span>{averageRuntime} min</span>
          <span style={{color:'#6E757C', fontSize:'13px', marginTop:'3px'}}>◉</span>
          <span>{premiered}</span>
          <span style={{color:'#6E757C', fontSize:'13px', marginTop:'3px'}}>◉</span>
          <span>👁 {views} views</span>
        </div>

        <div className='ikons'>
          <div className='links_circle'><ShareIcon style={{color:'#D12E27'}}/></div>
          <div className='links_circle'><FavoriteIcon style={{color:'#D12E27'}}/></div>
          <div className='links_circle'><AddIcon style={{color:'#D12E27'}}/></div>
        </div>
        
        <div className='tags'>
            <LocalOfferIcon style={{color:'#D12E27', fontSize:'20'}}/>
            <span>tags :</span>
            <span>{genres.join(', ')}</span>  
        </div>
        <div className='image'>
          
        <img src={image ? image.medium || DEFAULT_IMAGE : DEFAULT_IMAGE} 
        alt={name}
        style={image ? {} : { marginLeft:'-10rem'}}
        />
       </div>
      </div>
    );
    }

export default SingleItemHeader;
