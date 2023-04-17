import React, { useEffect, useState } from 'react';

const ImageSlider = ({images}) => {
  const [curIndex, setCurIndex] = useState(0);
  let timeStop = null;

  useEffect(() => {
    timeStop = setTimeout(() => {
      rightImage()
    }, 3000)
  });

  const rightImage = () => {
    setCurIndex(curIndex === images.length - 1 ? 0 : curIndex + 1)
  };


  return (
    <div className='slider'>
      {images.map((image,index) => {
        return (<div className={index === curIndex ? 'slider__div img_active' : 'slider__div img_inactive'}>
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