import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function Register(props) {
  // const handleLogin = () => {
  //   props.navigation.navigate('AppScreen');
  // };
  const handleLogin = () => {
    props.navigation.navigate('AuthScreen', {
      screen: 'Login',
      // params: {
      //   nama: 'Bagus TH',
      // },
    });
  };
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.headerText}>Sign Up</Text>
      </View>

      <View>
        <Text style={styles.layoutText}>First Name</Text>
        <TextInput
          placeholder="Write your first name"
          style={styles.inputBorder}
        />
      </View>

      <View>
        <Text style={styles.layoutText}>Last Name</Text>
        <TextInput
          placeholder="Write your last name"
          style={styles.inputBorder}
        />
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
          secureTextEntry={true}
        />
      </View>

      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.textButton}>Join for free</Text>
      </TouchableOpacity>

      <View style={styles.resetRow}>
        <Text style={styles.resetText}>Do you already have an account? </Text>
        <Text style={styles.resetTextColor} onPress={handleLogin}>
          Log in
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

export default Register;
