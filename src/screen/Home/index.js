import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './style';
import Icon from 'react-native-vector-icons/Feather';

function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={{backgroundColor: 'yellow', flex: 1}}>
          <Text>Left Side</Text>
        </View>
        <View style={{backgroundColor: 'brown', flex: 1}}>
          <Text>Right Side</Text>
        </View>
      </View>
      <View style={styles.main}>
        <Text>Main</Text>
        <Icon name="facebook" size={35} color="blue" />
        {/* <Icon.Button name="facebook" backgroundColor="#3b5998" color="red">
Login with Facebook
</Icon.Button> */}
      </View>
      <View style={styles.footer}>
        <Text>Footer</Text>
      </View>
      {/* <Text style={styles.textMedium}>Home Screen</Text> */}
      {/* <Image source={require('../../assets/avatar.jpg')} /> */}
    </View>
  );
}

export default Home;
