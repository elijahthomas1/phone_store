import React, { useState } from 'react';

const ImageSlider = ({images}) => {
  const [curIndex, setCurIndex] = useState(0);


  return (
    <div className='slider'>
      {images.map((image,index) => {
        return (<div className={index === 0 ? 'slider__div img_active' : 'slider__div img_inactive'}>
                  <img className='slider__img' src={image.image} alt={image.title} />
                  <div>
                    
                  </div>
                </div>
        )
      })}
    </div>  
  )
}

export default ImageSlider