import { useQuery } from '@apollo/client';
import { GET_ME } from '../graphql/queries';

const useMe = () => {
  const { data, loading, error } = useQuery(GET_ME, {
    fetchPolicy: 'cache-and-network',
  });

  return { data: data?.me, loading, error };
};

export default useMe;