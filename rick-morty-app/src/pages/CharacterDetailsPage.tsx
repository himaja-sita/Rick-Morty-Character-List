// src/pages/CharacterDetailsPage.tsx
import { useQuery } from '@tanstack/react-query';
import { useParams } from '@tanstack/react-router';
import { fetchCharacter } from '../services/rickyMorty';

export default function CharacterDetailsPage() {
  const { id } = useParams({ from: '/character/$id' });
  const { data, isLoading, isError } = useQuery({
    queryKey: ['character', id],
    queryFn: () => fetchCharacter(id),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading character!</div>;

  return (
    <div>
      <h2>{data?.name}</h2>
      <p>Status: {data?.status}</p>
      <p>Species: {data?.species}</p>
      <img src={data?.image} alt={data?.name} />
    </div>
  );
}
