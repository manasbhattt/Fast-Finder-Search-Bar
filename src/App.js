import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Data from './Data';
import Navbar from './navbar'; 
import AboutPage from './AboutPage'; 
import welcomeImage from './welcome-image.png'; 

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (searchTerm === '') {
      setSuggestions([]);
    } else {
      const filteredCountries = Data.filter(
        country =>
          country.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
          country.capital.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSuggestions(filteredCountries);
    }
  }, [searchTerm]);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="image-container">
              <img src={welcomeImage} alt="Welcome" className="welcome-image" />
              <div className="text-overlay">
                <h1>Welcome to the Country Search App</h1>
                <p>Search for the country or capital you want to explore!</p>
              </div>
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
              <SuggestionsList suggestions={suggestions} />
            </div>
          } />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

function SearchBar({ searchTerm, setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search by country or capital..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      className="search-bar"
    />
  );
}

function SuggestionsList({ suggestions }) {
  return (
    <ul className="suggestions-list">
      {suggestions.length > 0 ? (
        suggestions.map((suggestion, index) => (
          <li key={index}>
            <a
              href={`https://en.wikipedia.org/wiki/${encodeURIComponent(suggestion.country)}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <strong>{suggestion.country}</strong> - {suggestion.capital}
            </a>
            <br />
            Population: {suggestion.population.toLocaleString()}
            <br />
            Official Language(s): {Array.isArray(suggestion.official_language) ? suggestion.official_language.join(', ') : suggestion.official_language}
            <br />
            Currency: {suggestion.currency}
          </li>
        ))
      ) : (
        <li className="no-results">No results found</li>
      )}
    </ul>
  );
}


export default App;
