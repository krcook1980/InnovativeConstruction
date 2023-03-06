import React, {useState} from 'react';
import './style.css';

export default function ImageCard({ heading, image }) {

  const [currentImage, setCurrentImage] = useState(0)
 
  const switchImage = () => {
   const newImage = (currentImage < image.length-1) ? currentImage + 1 : 0
   setCurrentImage(newImage)
  }

 return (
    <div className='card'>
      <p className='cardHeading'>{heading}</p>
      
      {image ? 
        <div className='imageContainer>'><img src={image[currentImage]} alt='service item' className='image' onClick={switchImage} /> 
        </div>: null}
    </div>
  );
}
