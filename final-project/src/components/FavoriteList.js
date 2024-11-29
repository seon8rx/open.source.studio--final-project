import React from 'react';

const FavoriteList = ({ favorites, onRemoveFavorite }) => (
  <div className="row">
    {favorites.map((book, index) => (
      <div key={index} className="col-md-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{book.TITLE}</h5>
            <p className="card-text">Author: {book.WRITER}</p>
            <button className="btn btn-danger" onClick={() => onRemoveFavorite(book)}>
              Remove
            </button>
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default FavoriteList;