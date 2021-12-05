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
import Icon from 'react-native-vector-icons/Feather';

function OrderPage(props) {
  const handlePayment = () => {
    props.navigation.navigate('PaymentPage');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Text
            style={{
              color: '#14142b',
              fontSize: 18,
              fontWeight: '600',
              marginVertical: 12,
            }}>
            Chose Your Seat
          </Text>
        </View>
        <View
          style={{
            display: 'flex',
            backgroundColor: '#fff',
            padding: 20,
          }}>
          <Text
            style={{
              backgroundColor: '#dedede',
              height: 200,
            }}></Text>
          <View style={{marginVertical: 12, marginLeft: 12}}>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
              Seating key
            </Text>
          </View>
          <View style={{flexDirection: 'row', backgroundColor: '#fff'}}>
            <View style={{marginLeft: 12, marginRight: 24}}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 12,
                }}>
                <Icon
                  name="arrow-down"
                  size={30}
                  color="#6e7191"
                  style={{marginRight: 8}}
                />
                <Text>A - G</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 12,
                }}>
                <Text
                  style={{
                    backgroundColor: '#D6D8E7',
                    width: 30,
                    height: 30,
                    borderRadius: 4,
                    marginRight: 8,
                  }}></Text>
                <Text>Available</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 12,
                }}>
                <Text
                  style={{
                    backgroundColor: '#F589D7',
                    width: 30,
                    height: 30,
                    borderRadius: 4,
                    marginRight: 8,
                  }}></Text>
                <Text>Love nest</Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 12,
                }}>
                <Icon
                  name="arrow-right"
                  size={30}
                  color="#6e7191"
                  style={{marginRight: 8}}
                />
                <Text>1 - 14</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 12,
                }}>
                <Text
                  style={{
                    backgroundColor: '#5f2eea',
                    width: 30,
                    height: 30,
                    borderRadius: 4,
                    marginRight: 8,
                  }}></Text>
                <Text>Selected</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginVertical: 12,
                }}>
                <Text
                  style={{
                    backgroundColor: '#6E7191',
                    width: 30,
                    height: 30,
                    borderRadius: 4,
                    marginRight: 8,
                  }}></Text>
                <Text>Sold</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <Text
            style={{
              color: '#14142b',
              fontSize: 18,
              fontWeight: '600',
              marginVertical: 12,
            }}>
            Order Info
          </Text>
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
            <Text style={{fontSize: 24, fontWeight: '600', color: '#14142b'}}>
              CineOne21 Cinema
            </Text>
            <Text style={{fontSize: 14, color: '#14142b', marginTop: 8}}>
              Spider-Man: Homecoming
            </Text>
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
    marginBottom: 12,
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
