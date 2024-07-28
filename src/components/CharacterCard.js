import React, { useEffect, useState } from 'react';
import { fetchSpecies } from '../services/swapi';

const speciesColors = {
  'Human': 'bg-blue-500',
  'Droid': 'bg-gray-500',
  'Wookiee': 'bg-green-500',
  'Rodian': 'bg-yellow-500',
  'Hutt': 'bg-red-500',
  'Yoda\'s species': 'bg-purple-500',
  'Trandoshan': 'bg-orange-500',
  'Mon Calamari': 'bg-teal-500',
  'Ewok': 'bg-pink-500',
  'Sullustan': 'bg-indigo-500',
  'Neimodian': 'bg-amber-500',
  'Gungan': 'bg-lime-500',
  'Toydarian': 'bg-emerald-500',
  'Geonosian': 'bg-cyan-500',
  'Ithorian': 'bg-fuchsia-500',
  'Chagrian': 'bg-rose-500',
  'Unknown': 'bg-gray-400'
};

const CharacterCard = ({ character, onClick,index }) => {
  const [species, setSpecies] = useState('Unknown');
  const randomImage = `https://picsum.photos/200?random=${Math.floor(Math.random() * 1000)}`;

  useEffect(() => {
    const getSpecies = async () => {
      if (character.species.length > 0) {
        const data = await fetchSpecies(character.species[0]);
        setSpecies(data.name);
      }
    };
    getSpecies();
  }, [character.species]);

  return (
    <div
      className={`p-4 rounded-lg shadow-md cursor-pointer transform transition-transform hover:scale-105 ${speciesColors[species] || speciesColors['Unknown']}`}
      onClick={onClick}
      data-testid={`character-card-${index}`}
    >
      <img src={randomImage} alt={character.name} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-lg font-semibold text-white">{character.name}</h3>
      <p className="text-sm text-white">{species}</p>
    </div>
  );
};

export default CharacterCard;

