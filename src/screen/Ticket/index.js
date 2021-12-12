import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Footer from '../../components/Footer';

function Ticket(props) {
  const [dataMovie, setDataMovie] = useState([]);
  const [date, setDate] = useState('');
  const [seat, setSeat] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState('');
  const [selectTime, setSelectTime] = useState({});

  useEffect(() => {
    setDataMovie(props.route.params.params.dataMovie);
    setDate(props.route.params.params.date.toISOString().split('T')[0]);
    setSeat(props.route.params.params.seat);
    setSelectTime(props.route.params.params.selectTime);
    setSelectedSeat(props.route.params.params.selectedSeat);

    console.log(props.route.params.params);
  }, []);

  const handleHome = () => {
    props.navigation.navigate('Home');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.ticketContainer}>
          <Image
            style={{resizeMode: 'contain', marginBottom: 50}}
            source={require('../../assets/QR.png')}
          />
          <View style={styles.detailRow}>
            <View>
              <Text style={styles.detailTitle}>Movie</Text>
              <Text style={styles.detailContent}>{dataMovie.name}</Text>

              <Text style={styles.detailTitle}>Date</Text>
              <Text style={styles.detailContent}>{date}</Text>

              <Text style={styles.detailTitle}>Count</Text>
              <Text style={styles.detailContent}>{seat.length} pcs</Text>
            </View>
            <View>
              <Text style={styles.detailTitle}>Category</Text>
              <Text style={styles.detailContent}>{dataMovie.category}</Text>

              <Text style={styles.detailTitle}>Time</Text>
              <Text style={styles.detailContent}>{selectTime.time}</Text>

              <Text style={styles.detailTitle}>Seats</Text>
              <Text style={styles.detailContent}>
                {(seat || []).map(seat => `${seat}, `)}
              </Text>
            </View>
          </View>
          <View style={styles.totalBorder}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalPrice}>
              Rp.{props.route.params.params.totalPayment}
            </Text>
          </View>
          <View style={{marginTop: 20}}>
            <TouchableOpacity onPress={handleHome} style={styles.totalHome}>
              <Text style={{color: '#000'}}>Back to home</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#5f2eea',
  },
  ticketContainer: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingVertical: 40,
    marginVertical: 40,
  },
  detailRow: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
  },
  detailTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: '#aaa',
  },
  detailContent: {
    fontSize: 14,
    color: '#14142b',
    fontWeight: '600',
    marginBottom: 20,
  },
  totalBorder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 200,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 4,
    padding: 12,
  },
  totalHome: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: 200,
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 4,
    padding: 12,
  },
  totalText: {
    fontSize: 16,
    color: '#000',
  },
  totalPrice: {
    fontSize: 16,
    color: '#000',
    fontWeight: '600',
  },
});

export default Ticket;
