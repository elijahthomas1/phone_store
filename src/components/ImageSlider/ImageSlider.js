import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ImageSlider = ({images}) => {
  const [curIndex, setCurIndex] = useState(0);
  const [pauseIcon, setPauseIcon] = useState(true);
  const [timeKeeper, setTimeKeeper] = useState(true);
  const [countdown, setCountdown ] = useState(3000);

  useEffect(() => {
    let timeStop = timeKeeper && setTimeout(() => {
      rightImage()
    }, countdown)

    // let timeCounter = setInterval(subtractTime, 100);

    return () => {
      clearTimeout(timeStop)
      // clearInterval(timeCounter)
      setCountdown(3000);
    }
  });

  const rightImage = () => {
    setCurIndex(curIndex === images.length - 1 ? 0 : curIndex + 1)
  };

  const setIndex = (newindex) => {
    setCurIndex(newindex);
  };

  const clearCounter = () => {
    setTimeKeeper(!timeKeeper);
    setPauseIcon(!pauseIcon);
  }

  // not currently working
  const subtractTime = () => {
    setCountdown(() => countdown - 100)
    console.log('time subtracted: ' + countdown)
  }

  return (
    <div className='slider'>
      {images.map((image,index) => {
        return (<div key={index} className={index === curIndex ? 'slider__div img_active' : 'slider__div img_inactive'}>
                  <img className='slider__img' src={image.image} alt={image.title} />
                  <div className='slider__text'>
                    <h3 className='slider__text-title'>{image.title}</h3>
                    <p className='slider__text-description'>{image.description}</p>
                    <button className='slider__text-button'>{image.buttonText}</button>
                  </div>
                </div>
        )
      })}
      <div className='slider__pillbox'>
        <div onClick={() => setIndex(0)} className={curIndex === 0 ? 'slider__pillbox-1 slider__pillbox-selected' : 'slider__pillbox-1'}>1</div>
        <div onClick={() => setIndex(1)} className={curIndex === 1 ? 'slider__pillbox-2 slider__pillbox-selected' : 'slider__pillbox-2'}>2</div>
      </div>
      <div onClick={() => clearCounter()} className='slider__pause'>
        <CircularProgressbar value={countdown} maxValue={3000} minValue={0} />
        {pauseIcon ? <p className='slider__pause-icon'>&#8214;</p> : <p className='slider__pause-icon'>&#9658;</p>}
      </div>
      {/* <div className='slider__button-container'>
        <div className='slider__left' onClick={leftImage}><p>&lsaquo;</p></div>
        <div className='slider__right' onClick={rightImage}><p>&rsaquo;</p></div>
      </div> */}

    </div>  
  )
}

export default ImageSlider