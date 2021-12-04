import React from 'react';
import {View, Text, Image, StyleSheet, Button, ScrollView} from 'react-native';
import Footer from '../../components/Footer';

function Ticket(props) {
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
              <Text style={styles.detailContent}>Spider-Man</Text>

              <Text style={styles.detailTitle}>Date</Text>
              <Text style={styles.detailContent}>07 Jul</Text>

              <Text style={styles.detailTitle}>Count</Text>
              <Text style={styles.detailContent}>3 pcs</Text>
            </View>
            <View>
              <Text style={styles.detailTitle}>Category</Text>
              <Text style={styles.detailContent}>PG-13</Text>

              <Text style={styles.detailTitle}>Time</Text>
              <Text style={styles.detailContent}>2:00pm</Text>

              <Text style={styles.detailTitle}>Seats</Text>
              <Text style={styles.detailContent}>C4, C5, C6</Text>
            </View>
          </View>
          <View style={styles.totalBorder}>
            <Text style={styles.totalText}>Total</Text>
            <Text style={styles.totalPrice}>$30.00</Text>
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
