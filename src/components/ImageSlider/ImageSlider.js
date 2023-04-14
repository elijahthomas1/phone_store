import React, { useState } from 'react';

const ImageSlider = ({images}) => {
  const [curIndex, setCurIndex] = useState(0);


  return (
    <div className='slider'>
      {images.map((image,index) => {
        return (<div className={index === 0 ? 'slider__div img_active' : 'slider__div img_inactive'}>
                  <img className='slider__img' src={image.image} alt={image.title} />
                  <div className='slider__text'>
                    <h3 className='slider__text-title'>{image.title}</h3>
                    <p className='slider__text-description'>{image.description}</p>
                    <button className='slider__text-button'>{image.buttonText}</button>
                  </div>
                </div>
        )
      })}
    </div>  
  )
}

export default ImageSlider