import React, { useState, useEffect } from "react";
import countryData from "../resources/countryData.json";
import "./App.css";

const CountrySearch = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (searchTerm) {
      const filteredCountries = countryData.filter((country) =>
        country.name.toLowerCase().startsWith(searchTerm.toLowerCase())
      );
      const countryNames = filteredCountries.map((country) => country.name);
      setSearchResults(countryNames);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  }, [searchTerm]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Performing search for:", searchTerm);
  };

  return (
    <div>
      <div className="searchBar">
        <input
          id="countryInput"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search for a country..."
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">
          Search
        </button>
      </div>
      {showResults && (
        <ul className="search-results">
          {searchResults.map((country, index) => (
            <li key={index}>{country}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CountrySearch;
