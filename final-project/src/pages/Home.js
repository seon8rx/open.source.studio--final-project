import React, { useState, useEffect } from 'react';
import { fetchBooks } from '../api';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

const Home = ({ onAddToFavorites }) => {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const loadBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    loadBooks();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.TITLE && book.TITLE.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Library Info</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <BookList books={filteredBooks} onAddToFavorites={onAddToFavorites} />
    </div>
  );
};

export default Home;