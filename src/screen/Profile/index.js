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
        <TouchableOpacity>
          <Text
            // onPress={() => setButton(false)}
            style={{fontSize: 14, color: '#14142b'}}>
            Details Account
          </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            // onPress={() => setButton(false)}
            style={{fontSize: 14, color: '#14142b'}}>
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
});

export default Profile;
