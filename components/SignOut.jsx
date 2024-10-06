import { useEffect } from 'react';
import { useNavigate } from 'react-router-native';
import { useApolloClient } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';

const SignOut = () => {
  const navigate = useNavigate();
  const client = useApolloClient();
  const authStorage = useAuthStorage();

  useEffect(() => {
    const signOut = async () => {
      await authStorage.removeAccessToken();
      await client.resetStore();
      navigate('/');
    };

    signOut();
  }, [authStorage, client, navigate]);

  return null;
};

export default SignOut;