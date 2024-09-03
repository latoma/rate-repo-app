import { View, Text } from 'react-native';

const RepositoryItem = ({ repository }) => {
  return (
    <View>
      <Text>Full Name: {repository.fullName}</Text>
      <Text>Description: {repository.description}</Text>
      <Text>Language: {repository.language}</Text>
      <Text>Stargazers Count: {repository.stargazersCount}</Text>
      <Text>Forks Count: {repository.forksCount}</Text>
      <Text>Review Count: {repository.reviewCount}</Text>
      <Text>Rating Average: {repository.ratingAverage}</Text>
    </View>
  );
}

export default RepositoryItem;