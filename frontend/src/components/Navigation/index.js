// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import './Navigation.css';
import logo from './logo.jpg'

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const credential = 'Demo-lition';
  const password = 'password';

  const DemoLogin = (e) => {
    return dispatch(sessionActions.login({ credential, password }))
  }

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };


  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <button className='nav-demobtn' onClick={logout}>Log Out</button>
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
      <div className='nav-container-left'>
        <img src={logo} className='nav-logo' alt=''></img>
      </div>
      <div className='nav-container-right'>
        <div className='nav-links-container'>
        <NavLink exact to="/" className='navlinks'>Home</NavLink>
        {isLoaded && sessionLinks}
        </div>
      </div>
    </div>
  );
}

export default Navigation;
