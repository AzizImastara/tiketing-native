import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Footer from '../../components/Footer';

function OrderPage(props) {
  const handlePayment = () => {
    props.navigation.navigate('PaymentPage');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text>Chose Your Seat</Text>
        </View>
        <View>
          <Text>Order Info</Text>
        </View>
        <View
          style={{
            backgroundColor: '#fff',
            padding: 20,
            borderRadius: 4,
            marginVertical: 12,
          }}>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Image
              style={{width: 80, resizeMode: 'contain'}}
              source={require('../../assets/cineone.png')}
            />
            <Text>CineOne21 Cinema</Text>
            <Text>Spider-Man: Homecoming</Text>
          </View>
          <View style={styles.between}>
            <View style={styles.betweeenContent}>
              <Text style={styles.betweenLeft}>Tuesday, 07 July 2020</Text>
              <Text style={styles.betweenRight}>02:00pm</Text>
            </View>
            <View style={styles.betweeenContent}>
              <Text style={styles.betweenLeft}>One ticket price</Text>
              <Text style={styles.betweenRight}>$10</Text>
            </View>
            <View style={styles.betweeenContent}>
              <Text style={styles.betweenLeft}>Seat choosed</Text>
              <Text style={styles.betweenRight}>C4, C5, C6</Text>
            </View>
          </View>
          <View style={styles.betweeenContent}>
            <Text style={styles.payment}>Total Payment</Text>
            <Text style={styles.price}>$30</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{backgroundColor: '#5f2eea', padding: 20, borderRadius: 4}}
          onPress={handlePayment}>
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              fontWeight: '700',
              fontSize: 16,
            }}>
            Checkout now
          </Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  between: {
    marginVertical: 20,
  },
  betweeenContent: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  betweenLeft: {
    fontSize: 14,
    color: '#6b6b6b',
  },
  betweenRight: {
    fontSize: 14,
    color: '#14142b',
    fontWeight: '600',
  },
  payment: {
    fontWeight: '600',
    fontSize: 18,
    color: '#000',
  },
  price: {
    fontSize: 24,
    color: '#5f2eea',
    fontWeight: '700',
  },
});

export default OrderPage;
