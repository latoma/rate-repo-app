import { TextInput, View, Pressable, StyleSheet, Text } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: 'white',
    gap: 10,
    paddingVertical: 10,
  },
  input: {
    width: '90%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    padding: 10,
  },
  button: {
    width: '90%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: theme.colors.primary,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  }
});

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = values => {
  console.log(values);
}

const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder="Username"
        onChangeText={formik.handleChange('username')}
        value={formik.values.username}
        style={styles.input}
      />
      <TextInput secureTextEntry
        placeholder="Password"
        onChangeText={formik.handleChange('password')}
        value={formik.values.password} 
        style={styles.input}
      />
      <Pressable onPress={formik.handleSubmit} style={styles.button}>
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  )
}

const SignIn = () => {
  return (
    <SignInForm onSubmit={onSubmit} />
  );
};

export default SignIn;