import React, { useState, useEffect } from 'react';

const SearchFilter = ({ onSearch, onFilterChange, films }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterHomeworld, setFilterHomeworld] = useState('');
  const [filterFilm, setFilterFilm] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value);
  };

  const handleHomeworldChange = (e) => {
    const value = e.target.value;
    setFilterHomeworld(value);
    onFilterChange(value, filterFilm, filterSpecies);
  };

  const handleFilmChange = (e) => {
    const value = e.target.value;
    setFilterFilm(value);
    onFilterChange(filterHomeworld, value, filterSpecies);
  };

  const handleSpeciesChange = (e) => {
    const value = e.target.value;
    setFilterSpecies(value);
    onFilterChange(filterHomeworld, filterFilm, value);
  };

  return (
    <div className="flex flex-col md:flex-row mb-4 space-y-2 md:space-y-0 md:space-x-4">
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Search by name"
        className="border border-gray-300 rounded px-4 py-2"
      />
      <select
        value={filterHomeworld}
        onChange={handleHomeworldChange}
        className="border border-gray-300 rounded px-4 py-2"
      >
        <option value="">All Homeworlds</option>
        <option value="https://swapi.dev/api/planets/1/">Tatooine</option>
        <option value="https://swapi.dev/api/planets/2/">Alderaan</option>
        <option value="https://swapi.dev/api/planets/3/">Naboo</option>
        <option value="https://swapi.dev/api/planets/8/">Coruscant</option>
        {/* Add more homeworlds if needed */}
      </select>
      <select
        value={filterFilm}
        onChange={handleFilmChange}
        className="border border-gray-300 rounded px-4 py-2"
      >
        <option value="">All Films</option>
        {films.map(film => (
          <option key={film.url} value={film.url}>{film.title}</option>
        ))}
      </select>
      <select
        value={filterSpecies}
        onChange={handleSpeciesChange}
        className="border border-gray-300 rounded px-4 py-2"
      >
        <option value="">All Species</option>
        <option value="https://swapi.dev/api/species/1/">Human</option>
        <option value="https://swapi.dev/api/species/2/">Droid</option>
        <option value="https://swapi.dev/api/species/3/">Wookiee</option>
        <option value="https://swapi.dev/api/species/4/">Rodian</option>
        <option value="https://swapi.dev/api/species/5/">Hutt</option>
        <option value="https://swapi.dev/api/species/6/">Yoda's species</option>
        {/* Add more species if needed */}
      </select>
    </div>
  );
};

export default SearchFilter;



