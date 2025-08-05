import axios from 'axios';
import { CharacterListResponse,Character } from './types/characterTypes';

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export async function fetchCharacters(page: number): Promise<CharacterListResponse> {
  const { data } = await axios.get<CharacterListResponse>(`${BASE_URL}?page=${page}`);
  return data;
}

export async function fetchCharacter(id: string): Promise<Character> {
  const { data } = await axios.get<Character>(`${BASE_URL}/${id}`);
  return data;
}
