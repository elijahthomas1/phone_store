import React from 'react';
import { FaSearch ,FaMicrophone } from 'react-icons/fa';
import { BsCart3 } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className='nav__nav'>
      <div className='nav__div1'>
        <a className='nav__logo' href='#home'>Phone Store</a>
        <div className='nav__div'>
          <a className='nav__link' href="#home">Shop</a>
          <a className='nav__link' href="#home">Support</a>
          <a className='nav__link' href="#home">Account</a>
        </div>
      </div>
      <div className='nav__div2'>
        <form className='nav__form'>
          <input className='nav__form-input' type="text" placeholder='Search this site' />
          <button className='nav__form-search'><FaSearch /></button>
          <button className='nav__form-microphone'><FaMicrophone /></button>
        </form>
        <button className='nav__login'>Log In / Register</button>
        <BsCart3 className='nav__cart' />
      </div>
    </nav>
  )
}

export default Navbar