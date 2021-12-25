import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import {useDispatch, useSelector} from 'react-redux';
import {connect} from 'react-redux';
import {profile, editProfile} from '../stores/actions/profile';
import {API_HOST} from '@env';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Feather';

function DrawerContent(props) {
  const handleLogout = async () => {
    await AsyncStorage.removeItem('token');
    await AsyncStorage.removeItem('refreshToken');
    props.navigation.navigate('AuthScreen', {
      screen: 'Login',
    });
  };
  const user = useSelector(state => state.auth);
  const profileUser = useSelector(state => state.profile);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(profile(user.idUser)).then(result => {
  //     // console.log(result, 'dapett');
  //   });
  // }, []);
  useEffect(() => {
    dispatch(profile(user.idUser));
  }, []);
  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props}>
        <View style={styles.containerProfile}>
          <Image
            style={styles.avatar}
            source={
              profileUser.data.image
                ? {
                    uri: `${API_HOST}/uploads/user/${profileUser.data.image}`,
                  }
                : require('../assets/black.jpg')
            }
          />
          <View style={styles.biodata}>
            <Text style={styles.title}>
              {profileUser.data?.firstName || ''}
            </Text>
            <Text style={styles.caption}>{profileUser.data?.email}</Text>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View style={styles.containerSection}>
        <DrawerItem
          label="Log Out"
          icon={({color, size}) => (
            <Icon color={color} size={size} name="log-out" />
          )}
          onPress={handleLogout}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerProfile: {
    margin: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    backgroundColor: 'gray',
  },
  biodata: {
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    marginBottom: 3,
    fontWeight: 'bold',
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  containerSection: {
    marginBottom: 5,
    borderTopColor: '#f4f4f4',
    borderTopWidth: 2,
  },
});

// const mapStateToProps = state => ({
//   profile: state.profile,
// });

// const mapDispatchToProps = {profile};

// export default connect(mapStateToProps, mapDispatchToProps)(DrawerContent);
export default DrawerContent;
