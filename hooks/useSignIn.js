import { useMutation } from '@apollo/client';
import { SIGN_IN } from '../graphql/mutations';
import useAuthStorage from './useAuthStorage';

const useSignIn = () => {
  const authStorage = useAuthStorage();
  const [mutate, result] = useMutation(SIGN_IN);

  const signIn = async ({ username, password }) => {
    const { data } = await mutate({
      variables: {
        credentials: {
            "username": username,
            "password": password,
          },
      },
    });

    if (data?.authenticate?.accessToken) {
      await authStorage.setAccessToken(data.authenticate.accessToken);
    }

    return data;
  };
  return [signIn, result];
};

export default useSignIn;