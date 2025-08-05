import { useQuery } from '@tanstack/react-query';
import { fetchCharacters } from "../services/rickyMorty";
import CharacterGrid from '../components/CharacterTable/CharaterGrid';
import Pagination from '../components/Pagination';
import { useSearch,useNavigate } from '@tanstack/react-router';

export default function CharacterListPage() {
  const search = useSearch({ from: '/character' }); // get query params
  const navigate = useNavigate({ from: '/character' });

  const page = search.page || 1;

  const { data, isError, isLoading, refetch } = useQuery({
    queryKey: ['characters', page],
    queryFn: () => fetchCharacters(page),
  });

  const handlePageChange = (newPage: number) => {console.log(newPage);
     navigate({
      search: (prev) => ({ ...prev, page: newPage }), 
      replace: false,
    });
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError || !data) return <div>Error loading data</div>;

  return (
    <div>
      <button onClick={() => refetch()} style={{backgroundColor:"blue",color:"white"}} >Refresh</button>
      <CharacterGrid characters={data?.results} />
      <Pagination
        current={page}
        total={data?.info?.pages}
        onChange={handlePageChange}
      />
    </div>
  );
}
