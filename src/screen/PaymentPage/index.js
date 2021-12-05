import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Footer from '../../components/Footer';
import Icon from 'react-native-vector-icons/Feather';

function PaymentPage(props) {
  const handleTicket = () => {
    props.navigation.navigate('Ticket');
  };
  return (
    <ScrollView>
      <View style={styles.totalPayment}>
        <Text style={styles.totalPaymentText}>Total Payment</Text>
        <Text style={styles.totalPaymentPrice}>$30.00</Text>
      </View>
      <View style={styles.container}>
        <View>
          <Text style={styles.paymentMethodHeader}>Payment Method</Text>
        </View>
        <View
          style={{
            padding: 40,
            backgroundColor: '#fff',
            borderRadius: 4,
            marginVertical: 12,
          }}>
          <View style={styles.paymentChose}>
            <View style={styles.paymentBorder}>
              <Image
                style={styles.paymentMethod}
                source={require('../../assets/GoogleePay.png')}
              />
            </View>
            <View style={styles.paymentBorder}>
              <Image
                style={styles.paymentMethod}
                source={require('../../assets/Visa.png')}
              />
            </View>
            <View style={styles.paymentBorder}>
              <Image
                style={styles.paymentMethod}
                source={require('../../assets/GoPayy.png')}
              />
            </View>
          </View>
          <View style={styles.paymentChose}>
            <View style={styles.paymentBorder}>
              <Image
                style={styles.paymentMethod}
                source={require('../../assets/Paypal.png')}
              />
            </View>
            <View style={styles.paymentBorder}>
              <Image
                style={styles.paymentMethod}
                source={require('../../assets/OVO.png')}
              />
            </View>
            <View style={styles.paymentBorder}>
              <Image
                style={styles.paymentMethod}
                source={require('../../assets/Dana.png')}
              />
            </View>
          </View>
          <View>
            <Text style={styles.or}>Or</Text>
          </View>
          <View style={styles.pay}>
            <Text style={styles.payHead}>Pay via cash. </Text>
            <Text style={styles.payContent}>See how it work</Text>
          </View>
        </View>
        <View>
          <Text style={styles.paymentMethodHeader}>Personal Info</Text>
        </View>
        <View
          style={{
            padding: 40,
            backgroundColor: '#fff',
            borderRadius: 4,
            marginVertical: 12,
          }}>
          <View>
            <Text style={styles.personalTitle}>Full Name</Text>
            <TextInput
              style={styles.personalInput}
              placeholder="Jonas El Rodriguez"
            />
          </View>
          <View>
            <Text style={styles.personalTitle}>Email</Text>
            <TextInput
              style={styles.personalInput}
              placeholder="jonasrodri123@gmail.com"
            />
          </View>
          <View>
            <Text style={styles.personalTitle}>Phone Number</Text>
            <TextInput
              style={styles.personalInput}
              placeholder="+6281445687121"
            />
          </View>
          <View style={styles.personalAlert}>
            <Icon name="alert-triangle" size={30} color="#f4b740" />
            <Text style={{marginLeft: 12}}>Fill your data correctly</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.payButton} onPress={handleTicket}>
          <Text style={styles.payButtonText}>Pay your order</Text>
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
  paymentChose: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  paymentBorder: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 4,
    borderColor: '#dedede',
  },
  paymentMethod: {
    width: 60,
    height: 15,
    resizeMode: 'contain',
    margin: 12,
  },
  totalPayment: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  totalPaymentText: {
    fontSize: 16,
    color: '#aaa',
  },
  totalPaymentPrice: {
    fontSize: 20,
    color: '#14142b',
  },
  paymentMethodHeader: {
    fontSize: 18,
    color: '#14142b',
    marginVertical: 12,
  },
  or: {
    fontSize: 14,
    textAlign: 'center',
    color: '#a0a3bd',
    marginVertical: 20,
  },
  pay: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  payHead: {
    fontSize: 14,
    color: '#a0a3bd',
  },
  payContent: {
    fontSize: 14,
    color: '#5f2eea',
  },
  personalTitle: {
    fontSize: 14,
    color: '#696f79',
    marginBottom: 8,
  },
  personalInput: {
    borderWidth: 1,
    borderColor: '#dedede',
    fontSize: 14,
    padding: 12,
    marginBottom: 4,
    borderRadius: 4,
  },
  personalAlert: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(244, 183, 64, 0.3)',
    padding: 12,
    borderRadius: 4,
    marginTop: 12,
  },
  payButton: {
    backgroundColor: '#5f2eea',
    padding: 16,
    borderRadius: 4,
    marginTop: 12,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
    textAlign: 'center',
  },
});

export default PaymentPage;
