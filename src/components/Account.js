import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

function Account(props) {
  return (
    <ScrollView>
      <View style={styles.profileBg}>
        <View style={styles.profileHeader}>
          <Text style={styles.info}>INFO</Text>
          <Text style={styles.infoDot}>...</Text>
        </View>
        <View style={styles.profileData}>
          <Image source={require('../assets/profile.png')} />
          <View style={{marginVertical: 20}}>
            <Text style={styles.profileName}>Jonas El Rodriguez</Text>
            <Text style={styles.profileNameDesc}>Moviegoers</Text>
          </View>
        </View>
        <Text style={{fontSize: 16, color: '#4e4b66', fontWeight: '600'}}>
          Loyalty Points
        </Text>
        <View style={styles.movieGoersBg}>
          <Text style={styles.movieGoers}>Moviegoers</Text>
          <View style={styles.movieGoersRow}>
            <Text style={styles.moviePoint}>320</Text>
            <Text style={styles.moviePointText}>point</Text>
          </View>
        </View>
        <View>
          <Text style={styles.textPoint}>180 points become a master</Text>
        </View>
      </View>
      <Text
        style={{
          fontSize: 18,
          color: '#14142b',
          marginVertical: 20,
          fontWeight: '600',
        }}>
        Account Settings
      </Text>
      <View style={styles.profileBg}>
        <View style={styles.settingsBorder}>
          <Text style={styles.settings}>Details Information</Text>
        </View>
        <View>
          <Text style={styles.text}>Full Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Jonas El Rodriguez"
          />
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            style={styles.textInput}
            placeholder="jonasrodrigu123@gmail.com"
          />
          <Text style={styles.text}>Phone Number</Text>
          <TextInput style={styles.textInput} placeholder="+6281445687121" />
        </View>
        <View style={styles.settingsBorder}>
          <Text style={styles.settings}>Account and Privacy</Text>
        </View>
        <View>
          <Text style={styles.text}>New Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="******"
            secureTextEntry={true}
          />
          <Text style={styles.text}>Confirm</Text>
          <TextInput
            style={styles.textInput}
            placeholder="******"
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity style={styles.buttonProfile}>
          <Text style={styles.buttonProfileText}>Update changes</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  profileBg: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 8,
  },
  profileHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    fontSize: 16,
    color: '#4e4b66',
  },
  infoDot: {
    color: '#5f2eea',
    fontSize: 32,
  },
  profileData: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileName: {
    fontSize: 20,
    color: '#14142b',
    fontWeight: '600',
    textAlign: 'center',
  },
  profileNameDesc: {
    fontSize: 14,
    color: '#4e4b66',
    textAlign: 'center',
  },
  movieGoersBg: {
    backgroundColor: '#5f2eea',
    padding: 20,
    borderRadius: 8,
    marginVertical: 12,
  },
  movieGoers: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 20,
  },
  movieGoersRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  moviePoint: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
  moviePointText: {
    color: '#fff',
    fontSize: 10,
    marginLeft: 4,
  },
  textPoint: {
    textAlign: 'center',
    color: '#4e4b66',
    fontSize: 16,
  },
  settingsBorder: {
    borderBottomWidth: 1,
    borderColor: '#dedede',
    marginBottom: 12,
  },
  settings: {
    color: '#14142b',
    fontSize: 18,
    marginBottom: 8,
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    color: '#4e4b66',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 4,
    padding: 12,
    marginVertical: 12,
  },
  buttonProfile: {
    backgroundColor: '#5f2eea',
    padding: 16,
    marginTop: 8,
    borderRadius: 4,
  },
  buttonProfileText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '700',
  },
});

export default Account;
