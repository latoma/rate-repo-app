import { Pressable, Text, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  text: {
    color: theme.colors.AppBarTab,
    fontSize: theme.fontSizes.tab,
    fontFamily: theme.fonts.main,
    fontWeight: theme.fontWeights.bold,
    marginLeft: 20,
  },
});

const AppBarTab = ({ text }) => {
  return (
    <Pressable onPress={()=>console.log("tab press")}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
}

export default AppBarTab;