import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import axios from '../../utils/axios';
import Toast from 'react-native-simple-toast';

function Register(props) {
  const handleLogin = () => {
    props.navigation.navigate('AuthScreen', {
      screen: 'Login',
    });
  };

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleRegister = async () => {
    try {
      const result = await axios.post('/auth/register', form);
      // alert('Succes register, please check your email !');
      Toast.show('Success register user, please check your email !');
      props.navigation.navigate('AuthScreen', {
        screen: 'Login',
        // params: {
        //   nama: 'Bagus TH',
        // },
      });
      console.log(result.data, 'sahdasjdh');
    } catch (error) {
      Toast.show(error.response.data.msg);
      // console.log(error.response.data.msg);
    }
  };

  const handleInput = (text, name) => {
    setForm({...form, [name]: text});
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
          onChangeText={text => handleInput(text, 'firstName')}
        />
      </View>

      <View>
        <Text style={styles.layoutText}>Last Name</Text>
        <TextInput
          placeholder="Write your last name"
          style={styles.inputBorder}
          onChangeText={text => handleInput(text, 'lastName')}
        />
      </View>

      <View>
        <Text style={styles.layoutText}>Email</Text>
        <TextInput
          placeholder="Write your email"
          style={styles.inputBorder}
          onChangeText={text => handleInput(text, 'email')}
        />
      </View>

      <View>
        <Text style={styles.layoutText}>Password</Text>
        <TextInput
          placeholder="Write your password"
          style={styles.inputBorder}
          secureTextEntry={true}
          onChangeText={text => handleInput(text, 'password')}
        />
      </View>

      <TouchableOpacity style={styles.buttonPrimary} onPress={handleRegister}>
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
