export const fetchCharacters = async (page) => {
    const response = await fetch(`https://swapi.dev/api/people/?page=${page}`);
    if (!response.ok) {
      throw new Error('Failed to fetch characters');
    }
    return response.json();
  };
  
  export const fetchCharacterDetails = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch character details');
    }
    return response.json();
  };
  
  export const fetchHomeworld = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch homeworld');
    }
    return response.json();
  };
  
  export const fetchSpecies = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch species');
    }
    return response.json();
  };
  
  export const fetchAllFilms = async () => {
    const response = await fetch('https://swapi.dev/api/films/');
    if (!response.ok) {
      throw new Error('Failed to fetch films');
    }
    return response.json();
  };
  



  