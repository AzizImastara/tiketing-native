import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Login(props) {
  // const handleLogin = () => {
  //   props.navigation.navigate('AppScreen');
  // };
  const handleLogin = () => {
    props.navigation.navigate('AppScreen', {
      screen: 'Home',
      // params: {
      //   nama: 'Bagus TH',
      // },
    });
  };

  const handleReset = () => {
    props.navigation.navigate('AuthScreen', {
      screen: 'ForgotPassword',
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.headerText}>Sign In</Text>
      </View>

      <View>
        <Text style={styles.layoutText}>Email</Text>
        <TextInput placeholder="Write your email" style={styles.inputBorder} />
      </View>

      <View>
        <Text style={styles.layoutText}>Password</Text>
        <TextInput
          placeholder="Write your password"
          style={styles.inputBorder}
        />
      </View>

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleLogin}>
        <Text style={styles.textButton}>Sign In</Text>
      </TouchableOpacity>

      <View style={styles.resetRow}>
        <Text style={styles.resetText}>Forgot your password? </Text>
        <Text style={styles.resetTextColor} onPress={handleReset}>
          Reset now
        </Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  inputBorder: {
    borderColor: '#d3d3d3',
    borderWidth: 1,
    padding: 12,
    borderRadius: 12,
    marginBottom: 8,
  },
  layoutText: {
    marginBottom: 8,
  },
  headerText: {
    fontSize: 26,
    fontWeight: '600',
    marginVertical: 12,
    color: '#121212',
  },
  resetText: {
    textAlign: 'center',
  },
  resetTextColor: {
    color: '#5f2eea',
    textDecorationLine: 'underline',
  },
  buttonPrimary: {
    padding: 12,
    backgroundColor: '#5f2eea',
    borderRadius: 12,
    marginVertical: 12,
  },
  textButton: {
    color: 'white',
    textAlign: 'center',
  },
  resetRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 12,
  },
});

export default Login;
