import React from 'react';

const Navbar = () => {
  return (
    <nav className='nav__nav navbar navbar-expand-lg'>
      <div className='nav__div1'>
        <a className='nav__logo' href='#home'>Phone Store</a>
        <div className='collapse navbar-collapse nav__div'>
          <a className='nav-link nav__link' href="#home">Shop</a>
          <a className='nav-link nav__link' href="#home">Support</a>
          <a className='nav-link nav__link' href="#home">Account</a>
        </div>
      </div>
      <div>
        
      </div>
    </nav>
  )
}

export default Navbar