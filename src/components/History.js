import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

function History(props) {
  return (
    <ScrollView>
      <View style={styles.historyView}>
        <Image
          style={{width: 80, resizeMode: 'contain'}}
          source={require('../assets/cineone.png')}
        />
        <View style={styles.historyDesc}>
          <Text style={styles.historyDate}>
            Tuesday, 07 July 2020 - 04:30pm
          </Text>
          <View style={styles.historyTitleParent}>
            <Text style={styles.historyTitle}>Spider-Man: Homecoming</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{backgroundColor: '#00ba88', padding: 16, borderRadius: 4}}>
          <Text style={styles.buttonText}>Ticket in active</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.historyView}>
        <Image
          style={{width: 80, resizeMode: 'contain'}}
          source={require('../assets/ebuid.png')}
        />
        <View style={styles.historyDesc}>
          <Text style={styles.historyDate}>Monday, 14 June 2020 - 02:00pm</Text>
          <View style={styles.historyTitleParent}>
            <Text style={styles.historyTitle}>Avengers: End Game</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{backgroundColor: '#6e7191', padding: 16, borderRadius: 4}}>
          <Text style={styles.buttonText}>Ticket used</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  historyView: {
    backgroundColor: '#fff',
    marginVertical: 20,
    padding: 20,
    borderRadius: 8,
  },
  historyDate: {
    color: '#aaa',
    fontSize: 13,
  },
  historyTitle: {
    color: '#000',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 20,
  },
  historyTitleParent: {
    borderBottomWidth: 1,
    borderColor: '#dedede',
    marginBottom: 12,
  },
  historyDesc: {
    marginVertical: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
  },
});

export default History;
