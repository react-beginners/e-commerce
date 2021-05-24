import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as LOGO} from '../../assets/crown.svg';
import './header.scss';
import {auth} from '../../firebase/firebase.utils';

const Header = ({currentUser}) => {
  return(
    <div className='header'>
      <Link className='logo-container' to="/">
        <LOGO />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        {currentUser ? (
            <div className='option' style={{cursor:'pointer'}} onClick={ () => auth.signOut() }>SIGN OUT</div>
          ) : (
            <Link className='option' to='/signin'>
              SIGN-IN
            </Link>
          )}
      </div>
    </div>
  );
}

export default Header;
