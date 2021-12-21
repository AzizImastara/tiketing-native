import React, {useEffect, useState, useRef} from 'react';
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
import {profile, editProfile} from '../stores/actions/profile';
import Toast from 'react-native-simple-toast';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Feather';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

function Account(props) {
  const [password, setPassword] = useState({
    newPassword: '',
    confirmPassword: '',
  });

  const user = useSelector(state => state.auth);
  const profileUser = useSelector(state => state.profile);
  const refRBSheet = useRef();

  const [updateProfile, setUpdateProfile] = useState({
    firstName: profileUser.data.firstName,
    lastName: profileUser.data.lastName,
    email: profileUser.data.email,
    phoneNumber: profileUser.data.phoneNumber,
  });

  const dispatch = useDispatch();

  const handleUpdateProfileUser = async () => {
    try {
      const resultUpdate = await axios.patch(
        `/user/updateProfile/${user.idUser}`,
        updateProfile,
      );
      dispatch(profile(user.idUser));
      Toast.show(resultUpdate.data.msg);
    } catch (error) {
      Toast.show(error.response.data.msg);
    }
  };

  const updatePassword = async () => {
    try {
      const resultPassword = await axios.patch(
        `/user/updatePassword/${user.idUser}`,
        password,
      );
      Toast.show(resultPassword.data.msg);
    } catch (error) {
      Toast.show(error.response.data.msg);
    }
  };

  const handleProfile = (text, name) => {
    setUpdateProfile({...updateProfile, [name]: text});
  };

  const handlePassword = (text, name) => {
    setPassword({...password, [name]: text});
  };

  useEffect(() => {
    dispatch(profile(user.idUser));
  }, []);

  const handleTakeCamera = async () => {
    const result = await launchCamera();
    try {
      const setData = {
        image: {
          uri: result.assets[0].uri,
          name: result.assets[0].fileName,
          type: result.assets[0].type,
        },
      };
      console.log('SUBMIT IMAGE', setData);

      const formData = new FormData();
      for (const data in setData) {
        formData.append(data, setData[data]);
      }
      const resultImage = await axios.patch(
        `/user/updateImage/${user.idUser}?type=user`,
        formData,
      );
      dispatch(profile(user.idUser));
      Toast.show(resultImage.data.msg);
    } catch (error) {
      Toast.show(error.response.data.msg);
    }
  };

  const handleChooseGallery = async () => {
    const result = await launchImageLibrary();
    try {
      const setData = {
        image: {
          uri: result.assets[0].uri,
          name: result.assets[0].fileName,
          type: result.assets[0].type,
        },
      };
      console.log('SUBMIT IMAGE', setData);

      const formData = new FormData();
      for (const data in setData) {
        formData.append(data, setData[data]);
      }
      const resultImage = await axios.patch(
        `/user/updateImage/${user.idUser}?type=user`,
        formData,
      );
      dispatch(profile(user.idUser));
      Toast.show(resultImage.data.msg);
    } catch (error) {
      Toast.show(error.response.data.msg);
    }
  };

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
              profileUser.data.image
                ? {
                    uri: `${API_HOST}/uploads/user/${profileUser.data.image}`,
                  }
                : require('../assets/black.jpg')
            }
          />
          <TouchableOpacity
            style={{
              marginTop: 20,
              backgroundColor: '#5f2eea',
              padding: 12,
              borderRadius: 8,
            }}
            onPress={() => refRBSheet.current.open()}>
            <Text style={{color: '#fff'}}>Choose Pictures</Text>
          </TouchableOpacity>
          <RBSheet
            ref={refRBSheet}
            closeOnDragDown={true}
            closeOnPressMask={false}
            customStyles={{
              wrapper: {
                backgroundColor: 'transparent',
              },
              draggableIcon: {
                backgroundColor: '#000',
              },
            }}>
            <View>
              <TouchableOpacity onPress={handleTakeCamera} style={styles.sheet}>
                <Icon name="camera" size={24} color="#000" />
                <Text style={styles.sheetText}>Take From Camera</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity
                onPress={handleChooseGallery}
                style={styles.sheet}>
                <Icon name="image" size={24} color="#000" />
                <Text style={styles.sheetText}>Choose From Gallery</Text>
              </TouchableOpacity>
            </View>
          </RBSheet>
          <View style={{marginVertical: 20}}>
            <Text style={styles.profileName}>{profileUser.data.firstName}</Text>
            <Text style={styles.profileEmail}>{profileUser.data.email}</Text>
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
            value={updateProfile.firstName}
            onChangeText={text => handleProfile(text, 'firstName')}
          />
          <Text style={styles.text}>Last Name</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Rodriguez"
            value={updateProfile.lastName}
            onChangeText={text => handleProfile(text, 'lastName')}
          />
          <Text style={styles.text}>E-mail</Text>
          <TextInput
            style={styles.textInput}
            placeholder="jonasrodrigu123@gmail.com"
            value={updateProfile.email}
            onChangeText={text => handleProfile(text, 'email')}
            editable={false}
          />
          <Text style={styles.text}>Phone Number</Text>
          <TextInput
            style={styles.textInput}
            placeholder="+6281445687121"
            value={updateProfile.phoneNumber}
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
  profileEmail: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 8,
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
  sheet: {
    display: 'flex',
    flexDirection: 'row',
    // justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
    marginLeft: 90,
  },
  sheetText: {
    color: '#000',
    fontSize: 20,
    marginLeft: 12,
  },
});

export default Account;
