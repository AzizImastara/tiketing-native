import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import axios from '../utils/axios';
import {useDispatch, useSelector} from 'react-redux';

function History(props) {
  const user = useSelector(state => state.auth);

  const [dataBooking, setDataBooking] = useState([]);
  console.log(dataBooking, 'dataa');

  const getBooking = async () => {
    try {
      const result = await axios.get(`/booking/user/${user.idUser}`);
      setDataBooking(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    getBooking();
  }, []);
  return (
    <ScrollView>
      {dataBooking.map(item => (
        <View key={item.id} style={styles.historyView}>
          <Image
            style={{width: 80, resizeMode: 'contain'}}
            source={
              item.premiere === 'hiflix'
                ? require('../assets/hiflix.png')
                : item.premiere === 'ebu.id'
                ? require('../assets/ebuid.png')
                : require('../assets/cineone.png')
            }
          />
          <View style={styles.historyDesc}>
            <Text style={styles.historyDate}>
              {item.dateBooking ? item.dateBooking.slice(0, 10) : ''} -{' '}
              {item.timeBooking}
            </Text>
            <View style={styles.historyTitleParent}>
              <Text style={styles.historyTitle}>{item.name}</Text>
            </View>
          </View>
          <TouchableOpacity
            style={
              item.statusUse === 'active'
                ? styles.borderActive
                : item.statusUse === 'notActive'
                ? styles.borderUse
                : ''
            }>
            <Text style={styles.buttonText}>
              {item.statusUse === 'active' ? 'Ticket in active' : 'Ticket used'}
            </Text>
          </TouchableOpacity>
        </View>
      ))}
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
  borderActive: {
    backgroundColor: '#00ba88',
    padding: 16,
    borderRadius: 4,
  },
  borderUse: {
    backgroundColor: '#6e7191',
    padding: 16,
    borderRadius: 4,
  },
});

export default History;
