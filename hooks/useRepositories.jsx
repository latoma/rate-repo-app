import { useQuery } from '@apollo/client';
import { GET_REPOSITORIES } from '../graphql/queries';

const useRepositories = () => {
  const { data, error, loading } = useQuery(GET_REPOSITORIES, {
    fetchPolicy: 'cache-and-network',
  });

  console.log('data', data);
  const repositories = data?.repositories || {'edges': []};

  return { repositories, loading, error };
};

export default useRepositories;