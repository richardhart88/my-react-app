import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css'
import FavoritesContext from '../../store/favorites-context';

export default function MainNavigation() {
  const favoritesCtx = useContext(FavoritesContext);
  
  // debugger;

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        Meetups
      </div>
      <nav>
        <ul>
          <li>
            <Link to='/'>All Meetups</Link>
            </li>
          <li>
            <Link to='/new-meetup'>Add New Meetups</Link>
            </li>
          <li>
            <Link to='/favorites'>My Favorites
            <span className={classes.badge}>{favoritesCtx.totalFavorites}</span></Link>
            </li>
        </ul>
      </nav>
    </header> 
  )
}