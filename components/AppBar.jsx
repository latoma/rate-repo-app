import { StyleSheet, ScrollView, SafeAreaView, Text } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';
import useMe from '../hooks/useMe';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBg,
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
});

const AppBar = () => {
  const { data, loading, error } = useMe();

  if (loading) return null;
  if (error) return <Text>Error loading user data</Text>;

  console.log('Signed in user:', data?.username);

  return (
    <SafeAreaView style={{backgroundColor: theme.colors.appBarBg}}>
      <ScrollView horizontal contentContainerStyle={styles.container}>
          <AppBarTab text="Repositories" to="/" />
          {data?.username ? (
            <AppBarTab text="Sign out" to="/signout" />
          ) : (
            <AppBarTab text="Sign in" to="/signin" />
          )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppBar;