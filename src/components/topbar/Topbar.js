import React from 'react'

const Topbar = () => {
  return (
    <div className='topbar'>
      <div className='topbar__left'>
        <p className='topbar__p'><a href="#home">PERSONAL</a></p>
        <p className='topbar__p'><a href="#home">BUSINESS&darr;</a></p>
        <p className='topbar__p'><a href="#home">BELL FOR BETTER</a></p>
      </div>
      <div className='topbar__right'>
        <p className='topbar__p'><a href="#home">BELL EMAIL</a></p>
        <p className='topbar__p'><a href="#home">FIND A STORE</a></p>
        <p className='topbar__p'><a href="#home">ON | FRANCAIS</a></p>
      </div>
    </div>
  )
}

export default Topbar