import React, { useState, useEffect } from 'react';
import { fetchCharacters, fetchCharacterDetails, fetchAllFilms } from './services/swapi';
import CharacterCard from './components/CharacterCard';
import CharacterModal from './components/CharacterModal';
import Pagination from './components/Pagination';
import SearchFilter from './components/SearchFilter';
import Login from './components/Login';
import { isAuthenticated, logout, startTokenManager } from './services/auth';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterHomeworld, setFilterHomeworld] = useState('');
  const [filterFilm, setFilterFilm] = useState('');
  const [filterSpecies, setFilterSpecies] = useState('');
  const [loggedIn, setLoggedIn] = useState(isAuthenticated());
  const [films, setFilms] = useState([]);

  useEffect(() => {
    startTokenManager(); // Start token management
  }, []);

  useEffect(() => {
    const getCharacters = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await fetchCharacters(currentPage);
        setCharacters(data.results);
        setTotalPages(Math.ceil(data.count / 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getCharacters();
  }, [currentPage]);

  useEffect(() => {
    const getFilms = async () => {
      const data = await fetchAllFilms();
      setFilms(data.results);
    };
    getFilms();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleFilterChange = (homeworld, film, species) => {
    setFilterHomeworld(homeworld);
    setFilterFilm(film);
    setFilterSpecies(species);
  };

  const handleCharacterClick = async (url) => {
    setLoading(true);
    try {
      const data = await fetchCharacterDetails(url);
      setSelectedCharacter(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const filteredCharacters = characters.filter(character => {
    const matchesSearch = character.name.toLowerCase().includes(searchTerm);
    const matchesHomeworld = !filterHomeworld || character.homeworld === filterHomeworld;
    const matchesFilm = !filterFilm || character.films.includes(filterFilm);
    const matchesSpecies = !filterSpecies || character.species.includes(filterSpecies);

    return matchesSearch && matchesHomeworld && matchesFilm && matchesSpecies;
  });

  return (
    <div className="container mx-auto p-4">
      {!loggedIn ? (
        <Login onLogin={() => setLoggedIn(true)} />
      ) : (
        <>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded mb-4"
            onClick={() => {
              logout();
              setLoggedIn(false);
            }}
          >
            Logout
          </button>
          <SearchFilter
            onSearch={handleSearch}
            onFilterChange={handleFilterChange}
            films={films}
          />
          {loading && <p>Loading...</p>}
          {error && <p className="text-red-500">{error}</p>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {filteredCharacters.length > 0 ? (
              filteredCharacters.map((character,index) => (
                <CharacterCard
                  key={character.url}
                  index={index}
                  character={character}
                  onClick={() => handleCharacterClick(character.url)}
                />
              ))
            ) : (
              <p>No characters found matching the filters</p>
            )}
          </div>
          <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
          {selectedCharacter && (
            <CharacterModal character={selectedCharacter} onClose={() => setSelectedCharacter(null)} />
          )}
        </>
      )}
    </div>
  );
};

export default App;






