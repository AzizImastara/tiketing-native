import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import axios from '../utils/axios';
import {API_HOST} from '@env';

function Account(props) {
  const [profile, setProfile] = useState([]);
  const [password, setPassword] = useState({
    newPassword: '',
    confirmPassword: '',
  });
  const [updateProfile, setUpdateProfile] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
  });

  const user = useSelector(state => state.auth);
  console.log(user, 'userr');

  const getProfile = async () => {
    try {
      const result = await axios.get(`/user/user/${user.idUser}`);
      console.log(result, 'result');
      setProfile(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleUpdateProfileUser = async () => {
    try {
      const resultUpdate = await axios.patch(
        `/user/updateProfile/${user.idUser}`,
        updateProfile,
      );
      alert('Success Update Profile');
      console.log(resultUpdate, 'updateProfile');
    } catch (error) {
      console.log(error);
    }
  };

  const updatePassword = async () => {
    try {
      const resultPassword = await axios.patch(
        `/user/updatePassword/${user.idUser}`,
        password,
      );
      alert('Success Update Password');
      console.log(resultPassword, 'dajhsdh');
    } catch (error) {
      console.log(error);
    }
  };

  const handleProfile = (text, name) => {
    setUpdateProfile({...updateProfile, [name]: text});
  };

  const handlePassword = (text, name) => {
    setPassword({...password, [name]: text});
  };

  useEffect(() => {
    getProfile();
  }, []);

  console.log(profile, 'getttttt');

  return (
    <ScrollView>
      <View style={styles.profileBg}>
        <View style={styles.profileHeader}>
          <Text style={styles.info}>INFO</Text>
          <Text style={styles.infoDot}>...</Text>
        </View>
        <View style={styles.profileData}>
          <Image
            style={styles.userImage}
            source={
              profile[0]?.image
                ? {
                    uri: `${API_HOST}/uploads/user/${profile[0]?.image}`,
                  }
                : require('../assets/black.jpg')
            }
          />
          <View style={{marginVertical: 20}}>
            <Text style={styles.profileName}>
              {profile[0]?.firstName || ''}
            </Text>
            <Text style={styles.profileNameDesc}>Moviegoers</Text>
          </View>
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
          <Text style={styles.text}>First Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Jonas El Rodriguez"
            // value={profile[0]?.firstName || ''}
            onChangeText={text => handleProfile(text, 'firstName')}
          />
          <Text style={styles.text}>Last Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Jonas El Rodriguez"
            // value={profile[0]?.lastName || ''}
            onChangeText={text => handleProfile(text, 'lastName')}
          />
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            style={styles.textInput}
            placeholder="jonasrodrigu123@gmail.com"
            // value={profile[0]?.email || ''}
            onChangeText={text => handleProfile(text, 'email')}
          />
          <Text style={styles.text}>Phone Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="+6281445687121"
            // value={profile[0]?.phoneNumber || ''}
            onChangeText={text => handleProfile(text, 'phoneNumber')}
          />
          <TouchableOpacity
            style={styles.buttonProfile}
            onPress={handleUpdateProfileUser}>
            <Text style={styles.buttonProfileText}>Update Profile</Text>
          </TouchableOpacity>
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
            onChangeText={text => handlePassword(text, 'newPassword')}
          />
          <Text style={styles.text}>Confirm</Text>
          <TextInput
            style={styles.textInput}
            placeholder="******"
            secureTextEntry={true}
            onChangeText={text => handlePassword(text, 'confirmPassword')}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonProfile}
          onPress={() => updatePassword()}>
          <Text style={styles.buttonProfileText}>Update Password</Text>
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
  userImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
});

export default Account;
