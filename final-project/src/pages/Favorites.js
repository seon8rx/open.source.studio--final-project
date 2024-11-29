import React from 'react';
import FavoriteList from '../components/FavoriteList';

const Favorites = ({ favorites, onRemoveFavorite }) => (
  <div className="container">
    <h1>Favorites</h1>
    <FavoriteList favorites={favorites} onRemoveFavorite={onRemoveFavorite} />
  </div>
);

export default Favorites;