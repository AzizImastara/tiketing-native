import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function ForgotPassword(props) {
  // const handleLogin = () => {
  //   props.navigation.navigate('AppScreen');
  // };
  return (
    <View style={styles.container}>
      <View>
        <Image source={require('../../assets/logo.png')} />
        <Text style={styles.headerText}>Forgot password</Text>
        <Text>we'll send a link to your email shortly</Text>
      </View>

      <View style={styles.emailMargin}>
        <Text style={styles.layoutText}>Email</Text>
        <TextInput placeholder="Write your email" style={styles.inputBorder} />
      </View>

      <TouchableOpacity style={styles.buttonPrimary}>
        <Text style={styles.textButton}>Active now</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    justifyContent: 'center',
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
  emailMargin: {
    marginVertical: 12,
  },
});

export default ForgotPassword;
