import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

function Login(props) {
  const handleLogin = () => {
    props.navigation.navigate('AppScreen');
  };
  return (
    <View style={styles.container}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
