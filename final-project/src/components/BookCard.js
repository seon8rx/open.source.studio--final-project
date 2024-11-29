import React from 'react';

const BookCard = ({ book, onAddToFavorites }) => (
  <div className="card">
    <img
      src={book.IMAGE_URL || 'https://via.placeholder.com/150'}
      className="card-img-top"
      alt={book.TITLE}
    />
    <div className="card-body">
      <h5 className="card-title">{book.TITLE}</h5>
      <p className="card-text">Author: {book.WRITER}</p>
      <p className="card-text">Loan Count: {book.LOANCOUNT}</p>
      <button className="btn btn-primary" onClick={() => onAddToFavorites(book)}>
        Add to Favorites
      </button>
    </div>
  </div>
);

export default BookCard;