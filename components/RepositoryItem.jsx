import { View, StyleSheet, Image } from 'react-native';
import Text from './Text';
import theme from '../theme';


const CountItem = ({text, count}) => {
  let displayCount = count;
    if (count >= 1000) {
      displayCount = (count / 1000).toFixed(1) + "k";
    }
  return (
    <View style={styles.statItem}>
      <Text fontWeight='bold'>{displayCount}</Text>
      <Text>{text}</Text>
    </View>
  );
}

const RepositoryItem = ({ repository }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <Image source={{ uri: repository.ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.textDetails}>
          <Text style={styles.nameText}>{repository.fullName}</Text>
          <Text style={{ color: theme.colors.textSecondary }}>{repository.description}</Text>
          <Text style={styles.languageTag}>{repository.language}</Text>
        </View>
      </View>
      <View style={styles.statsContainer}>
        <CountItem text='Stars' count={repository.stargazersCount}/>
        <CountItem text='Forks' count={repository.forksCount}/>
        <CountItem text='Reviews' count={repository.reviewCount}/>
        <CountItem text='Rating' count={repository.ratingAverage}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.colors.repositoyItemBg,
  },
  topSection: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
  },
  textDetails: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    width: '80%',
    justifyContent: 'space-between',
    gap: 5,
  },
  statsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
    borderRadius: 5,
  },
  nameText: {
    fontWeight: theme.fontWeights.bold,
    fontSize: theme.fontSizes.subheading,
  },
  languageTag: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    padding: 5,
    borderRadius: 5,
  },
  statItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default RepositoryItem;