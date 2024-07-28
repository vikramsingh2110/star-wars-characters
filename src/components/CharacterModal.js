import React, { useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { fetchHomeworld } from '../services/swapi';

const CharacterModal = ({ character, onClose }) => {
  const [homeworld, setHomeworld] = useState(null);

  useEffect(() => {
    const getHomeworld = async () => {
      const data = await fetchHomeworld(character.homeworld);
      setHomeworld(data);
    };
    getHomeworld();
  }, [character.homeworld]);

  return (
    <Dialog open={!!character} onClose={onClose} className="fixed inset-0 flex items-center justify-center z-50" 
    data-testid="modal">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96">
        <Dialog.Title className="text-2xl font-bold">{character.name}</Dialog.Title>
        <Dialog.Description className="mt-2">
          <p>Height: {character.height / 100} m</p>
          <p>Mass: {character.mass} kg</p>
          <p>Date Added: {new Date(character.created).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
          <p>Number of Films: {character.films.length}</p>
          <p>Birth Year: {character.birth_year}</p>
          {homeworld && (
            <div className="mt-4">
              <h4 className="text-xl font-semibold">Homeworld</h4>
              <p>Name: {homeworld.name}</p>
              <p>Terrain: {homeworld.terrain}</p>
              <p>Climate: {homeworld.climate}</p>
              <p>Population: {homeworld.population}</p>
            </div>
          )}
        </Dialog.Description>
        <button
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </Dialog>
  );
};

export default CharacterModal;

