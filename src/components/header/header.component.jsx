import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as LOGO} from '../../assets/crown.svg';

import './header.css';

const Header = () => {
  return(
    <div className='header'>
      <Link className='logo-container' to="/">
        <LOGO />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/signin'>
          SIGN-IN
        </Link>
      </div>
    </div>
  );
}

export default Header;
