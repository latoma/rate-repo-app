import { StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import Constants from 'expo-constants';
import theme from '../theme';
import AppBarTab from './AppBarTab';

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
  return (
    <SafeAreaView style={{backgroundColor: theme.colors.appBarBg}}>
      <ScrollView horizontal contentContainerStyle={styles.container}>
          <AppBarTab text="Repositories" to="/" />
          <AppBarTab text="Sign in" to="/signin" />
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppBar;