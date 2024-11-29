import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Favorites from './pages/Favorites';

function App() {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (book) => {
    if (!favorites.some((fav) => fav.TITLE === book.TITLE)) {
      setFavorites([...favorites, book]);
    }
  };

  const handleRemoveFavorite = (book) => {
    setFavorites(favorites.filter((fav) => fav.TITLE !== book.TITLE));
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home onAddToFavorites={handleAddToFavorites} />}
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} onRemoveFavorite={handleRemoveFavorite} />}
        />
      </Routes>
    </Router>
  );
}

export default App;