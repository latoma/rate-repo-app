import { TextInput, View, Pressable, StyleSheet, Text } from 'react-native';
import { useFormik } from 'formik';
import theme from '../theme';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn';
import { useNavigate } from 'react-router-native';

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup
  .string()
  .required('Username is required'),
  password: yup
  .string()
  .required('Password is required'),
});


const SignInForm = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });
  
  const hasError = (field) =>
    formik.errors[field] && formik.touched[field];
  
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Username"
        onChangeText={formik.handleChange('username')}
        value={formik.values.username}
        style={[
          styles.input,
          hasError('username') && styles.errorInput,
        ]}
        />
      {hasError('username') && (
        <Text style={styles.errorText}>
          {formik.errors.username}
        </Text>
      )}

      <TextInput
        secureTextEntry
        placeholder="Password"
        onChangeText={formik.handleChange('password')}
        value={formik.values.password}
        style={[
          styles.input,
          hasError('password') && styles.errorInput,
        ]}
        />
      {hasError('password') && (
        <Text style={styles.errorText}>
          {formik.errors.password}
        </Text>
      )}

      <Pressable
        onPress={formik.handleSubmit}
        style={styles.button}
        >
        <Text style={styles.buttonText}>Sign in</Text>
      </Pressable>
    </View>
  );
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();
  
  const onSubmit = async (values) => {
    const { username, password } = values;
    try {
      await signIn({ username, password })
      navigate('/');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SignInForm onSubmit={onSubmit} />
  );
};

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
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    marginLeft: 10,
  },
});

export default SignIn;