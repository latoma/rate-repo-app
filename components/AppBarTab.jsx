import { Pressable, Text, StyleSheet } from 'react-native';
import theme from '../theme';
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.AppBarTab,
    fontSize: theme.fontSizes.tab,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
  },
  button: {
    padding: 10,
    borderRadius: 15,
  },
});

const AppBarTab = ({ text, to }) => {
  return (
    <Link to={to} component={Pressable} style={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Link>
  );
}

export default AppBarTab;