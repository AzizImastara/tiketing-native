import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Footer from '../../components/Footer';
import QRCode from 'react-native-qrcode-svg';
import {API_HOST} from '@env';

function Ticket(props) {
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    setDataMovie(props.route.params.params.dataMovie);
    console.log(props.route.params.params, 'ANJER');
  }, []);

  const handleHome = () => {
    props.navigation.navigate('Home');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.ticketContainer}>
          <View>
            <Text style={{color: '#000', fontSize: 16}}>
              Don't forget to screenshot the barcode !
            </Text>
          </View>
          <View style={{marginVertical: 24}}>
            <QRCode
              value={`${API_HOST}/booking/qr/${props.route.params.params.bookingId}`}
            />
          </View>

          <View style={styles.detailRow}>
            <View>
              <Text style={styles.detailTitle}>Movie</Text>
              <Text style={styles.detailContent}>{dataMovie.name}</Text>

              <Text style={styles.detailTitle}>Date</Text>
              <Text style={styles.detailContent}>
                {props.route.params.params.dateBooking}
              </Text>

              <Text style={styles.detailTitle}>Count</Text>
              <Text style={styles.detailContent}>
                {props.route.params.params.seat.length} pcs
              </Text>
            </View>
            <View>
              <Text style={styles.detailTitle}>Category</Text>
              <Text style={styles.detailContent}>{dataMovie.category}</Text>

              <Text style={styles.detailTitle}>Time</Text>
              <Text style={styles.detailContent}>
                {props.route.params.params.timeBooking}
              </Text>

              <Text style={styles.detailTitle}>Seats</Text>
              <Text style={styles.detailContent}>
                {props.route.params.params.seat.join(', ')}
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
