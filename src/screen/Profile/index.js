import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Account from '../../components/Account';
import History from '../../components/History';
import Footer from '../../components/Footer';

function Profile(props) {
  const [button, setButton] = useState(true);
  return (
    <ScrollView>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          padding: 12,
          backgroundColor: '#fff',
          marginBottom: 12,
        }}>
        <TouchableOpacity onPress={() => setButton(true)}>
          <Text style={button ? styles.colorStyle : styles.colorDisabled}>
            Details Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setButton(false)}>
          <Text style={button ? styles.colorDisabled : styles.colorStyle}>
            Order History
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>{button ? <Account /> : <History />}</View>
      <Footer />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  colorStyle: {
    color: '#14142b',
    padding: 12,
    borderBottomWidth: 1,
  },
  colorDisabled: {
    color: '#dedede',
    padding: 12,
  },
});

export default Profile;
