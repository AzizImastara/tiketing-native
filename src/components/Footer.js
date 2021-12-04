import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function Footer() {
  return (
    <View style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        <Image source={require('../assets/Vector.png')} />
        <View style={{marginVertical: 20}}>
          <Text style={styles.headerFooterText}>
            Stop waiting in line. Buy tickets
          </Text>
          <Text style={styles.headerFooterText}>
            conveniently, watch movies quietly.
          </Text>
        </View>

        <View>
          <Text style={styles.footerTitle}>Explore</Text>
          <View style={styles.footerCinema}>
            <Text>Cinemas</Text>
            <Text>Movie List</Text>
            <Text>Notifications</Text>
            <Text>My Ticket</Text>
          </View>
        </View>

        <View>
          <Text style={styles.footerTitle}>Our Sponsor</Text>
          <View style={styles.footerCinemaImage}>
            <Image
              style={{width: 80, resizeMode: 'contain'}}
              source={require('../assets/ebuid.png')}
            />
            <Image
              style={{width: 80, resizeMode: 'contain'}}
              source={require('../assets/cineone.png')}
            />
            <Image
              style={{width: 80, resizeMode: 'contain'}}
              source={require('../assets/hiflix.png')}
            />
          </View>
        </View>

        <View>
          <Text style={styles.footerTitle}>Follow us</Text>
          <View style={styles.footerSosmed}>
            <Icon
              name="facebook"
              size={30}
              color="#6e7191"
              style={{marginRight: 32}}
            />
            <Icon
              name="instagram"
              size={30}
              color="#6e7191"
              style={{marginRight: 32}}
            />
            <Icon
              name="twitter"
              size={30}
              color="#6e7191"
              style={{marginRight: 32}}
            />
            <Icon
              name="youtube"
              size={30}
              color="#6e7191"
              style={{marginRight: 32}}
            />
          </View>
        </View>

        <View>
          <Text style={{marginVertical: 40}}>
            © 2020 Tickitz. All Rights Reserved.
          </Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  headerFooterText: {
    fontSize: 14,
    color: '#6e7191',
  },
  footerTitle: {
    color: '#000',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 8,
  },
  footerCinema: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginVertical: 20,
  },
  footerCinemaImage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // marginVertical: 20,
  },
  footerSosmed: {
    display: 'flex',
    flexDirection: 'row',
    // marginVertical: 20,
  },
});

export default Footer;
