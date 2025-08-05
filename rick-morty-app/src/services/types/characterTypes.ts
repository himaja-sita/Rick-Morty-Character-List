export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type:	string;
  gender:	string;
  origin:	object;
  location:	object;
  episode: Array<string>;
  image: string;
  url: string;
  created: string
}

export interface CharacterListResponse {
  info: { count: number; pages: number; next: string | null; prev: string | null };
  results: Character[];
}