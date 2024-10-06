import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    try {
      const token = await AsyncStorage.getItem(`${this.namespace}:accessToken`);
      return token ? JSON.parse(token) : null;
    } catch (e) {
      console.error('Failed to fetch the access token from storage', e);
      return null;
    }
  }

  async setAccessToken(accessToken) {
    try {
      await AsyncStorage.setItem(`${this.namespace}:accessToken`, JSON.stringify(accessToken))
      .then(() => {console.log('token saved')});  
    } catch (e) {
      console.error('Failed to save the access token to storage', e);
    }
  }

  async removeAccessToken() {
    try {
      await AsyncStorage.removeItem(`${this.namespace}:accessToken`);
      console.log('token removed');
    } catch (e) {
      console.error('Failed to remove the access token from storage', e);
    }
  }
}

export default AuthStorage;