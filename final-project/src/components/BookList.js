import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onAddToFavorites }) => (
  <div className="row">
    {books.map((book, index) => (
      <div key={index} className="col-md-4">
        <BookCard book={book} onAddToFavorites={onAddToFavorites} />
      </div>
    ))}
  </div>
);

export default BookList;