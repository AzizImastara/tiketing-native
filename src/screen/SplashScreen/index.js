import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

function SplashScreen(props) {
  useEffect(() => {
    const token = false;
    setTimeout(() => {
      if (token) {
        props.navigation.navigate('AppScreen');
      } else {
        props.navigation.navigate('AuthScreen');
      }
    }, 2000);
  }, []);
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../../assets/Vector.png')} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'red',
  },
  image: {
    // flex: 1,
    // width: 300,
    // height: 300,
  },
});

export default SplashScreen;
