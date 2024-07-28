// src/tests/CharacterModal.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CharacterCard from './components/CharacterCard';
import { fetchCharacterDetails } from './services/swapi';

jest.mock('./services/swapi');

const mockCharacter = {
  name: 'Luke Skywalker',
  url: 'https://swapi.dev/api/people/1/',
};

const mockDetails = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  created: '2014-12-09T13:50:51.644000Z',
  films: ['https://swapi.dev/api/films/1/'],
  birth_year: '19BBY',
  homeworld: 'https://swapi.dev/api/planets/1/',
};

fetchCharacterDetails.mockResolvedValue(mockDetails);

test('opens modal with correct information', async () => {
  render(<CharacterCard character={mockCharacter} />);

  fireEvent.click(screen.getByText('Luke Skywalker'));

  const modalName = await screen.findByText('Luke Skywalker');
  expect(modalName).toBeInTheDocument();
});
