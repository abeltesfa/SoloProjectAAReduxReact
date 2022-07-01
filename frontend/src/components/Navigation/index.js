// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import logo from './logo.jpg'

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const credential = 'Demo-lition';
  const password = 'password';

  const DemoLogin = (e) => {
    return dispatch(sessionActions.login({ credential, password }))
  }


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} />
    );
  } else {
    sessionLinks = (
      <>
        <NavLink to="/login" className='navlinks'>Log In</NavLink>
        <NavLink to="/signup" className='navlinks'>Sign Up</NavLink>
        <button onClick={DemoLogin} className='nav-demobtn'>Demo User</button>
      </>
    );
  }

  return (
    <div className='navigation-container'>
    <img src={logo} className='nav-logo' alt=''></img>
    <ul className='nav-list'>
      <li className='nav-list-links'>
        <NavLink exact to="/" className='navlinks'>Home</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
    </div>
  );
}

export default Navigation;
