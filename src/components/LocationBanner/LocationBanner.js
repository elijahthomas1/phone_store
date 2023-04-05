import React from 'react';

const LocationBanner = () => {
  return (
    <div className='location'>
      <div className='location__left'>
        <p className='location__region'>Your current region:</p>
        <div className='location__div'>
          <p className='location__current'>Ontario</p>
          <div>
            <a className='location__change' href='#home'>Change</a>
            <span className='location__arrow'>&gt;</span>
          </div>
        </div>
      </div>
      <div className='location__right'>        
        <span>&#x2715;</span>
      </div>    
    </div>
  )
}

export default LocationBanner