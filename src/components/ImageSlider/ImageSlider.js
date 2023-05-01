import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ImageSlider = ({images}) => {
  const [curIndex, setCurIndex] = useState(0);
  const [pauseIcon, setPauseIcon] = useState(true);
  const [timeKeeper, setTimeKeeper] = useState(true);
  const [countdown, setCountdown ] = useState(100);

  useEffect(() => {
    let timeStop = timeKeeper && setTimeout(() => {
      rightImage()
      // let thetimer = setTimeout(() => {
      //   subtractTime
      // }, 1)
    }, 3000)
    // let timer = timeKeeper && setInterval(() => {
    //   increaseCountdown()
    //   console.log(countdown)
    // }, 100)
    // let timeCounter = setInterval(subtractTime, 100);



    return () => {
      clearTimeout(timeStop)
      // clearInterval(timer);
      // clearTimeout(thetimer)
      // clearInterval(timeCounter)
      setCountdown(0);
      console.log("reload occured")
    }
  });

  const rightImage = () => {
    setCurIndex(curIndex === images.length - 1 ? 0 : curIndex + 1)
  };

  const increaseCountdown = () => {
    setCountdown(countdown - 3);
  }

  const setIndex = (newindex) => {
    setCurIndex(newindex);
  };

  const clearCounter = () => {
    setTimeKeeper(!timeKeeper);
    setPauseIcon(!pauseIcon);
  }

  // not currently working
  // const subtractTime = () => {
  //   setCountdown(() => countdown - 1)
  //   console.log('time subtracted: ' + countdown)
  // }

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
      <div className='slider__container'>
        <div onClick={() => clearCounter()} className='slider__pause'>
          {/* <CircularProgressbar value={countdown} minValue={0} maxValue={100}/> */}
          {/* <svg className='circle_animation'>
            <circle  className='circle_animation-circle' cx={20} cy={20} r={18} />
          </svg> */}
          {pauseIcon ? <p className='slider__pause-icon'>&#8214;</p> : <p className='slider__pause-icon'>&#9658;</p>} 
        </div>
        <svg viewBox="23 -20 100 100" class="svg-indicator">
          <circle class="svg-indicator-track" cx="50%" cy="50%" r={20} fill='none'  />
          <circle class="svg-indicator-indication"  cx="50%" cy="50%" r={20} fill='none' />
        </svg>
      </div>
      {/* <div className='slider__button-container'>
        <div className='slider__left' onClick={leftImage}><p>&lsaquo;</p></div>
        <div className='slider__right' onClick={rightImage}><p>&rsaquo;</p></div>
      </div> */}

    </div>  
  )
}

export default ImageSlider