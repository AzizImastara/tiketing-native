import React, {useState, useEffect} from 'react';
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
import {profile} from '../../stores/actions/profile';
import {useDispatch, useSelector} from 'react-redux';
import axios from '../../utils/axios';
import Toast from 'react-native-simple-toast';

function PaymentPage(props) {
  const [idMovie, setIdMovie] = useState('');
  const [selectTime, setSelectTime] = useState({});
  const [date, setDate] = useState('');
  const [dataMovie, setDataMovie] = useState([]);
  const [seat, setSeat] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState('');
  const [payment, setPayment] = useState('');
  const [profileUserBray, setProfileUserBray] = useState({});

  const user = useSelector(state => state.auth);
  // console.log(user.idUser, 'userid');
  const profileUser = useSelector(state => state.profile);
  // console.log(profileUser, 'userr');
  const dispatch = useDispatch();

  const [booking, setBooking] = useState({
    userId: user.idUser,
    scheduleId: props.route.params.params.selectTime.idSchedule,
    movieId: props.route.params.params.idMovie,
    dateBooking: props.route.params.params.date.toISOString().split('T')[0],
    timeBooking: props.route.params.params.selectTime.time,
    totalPayment: props.route.params.params.selectedSeat,
    paymentMethod: payment,
    statusPayment: 'success',
    seat: props.route.params.params.seat,
  });

  // console.log(payment, 'payyyyy');

  // console.log(booking.paymentMethod, 'bokingneh bos');

  useEffect(() => {
    dispatch(profile(user.idUser)).then(result => {
      // console.log(result, 'dapett');
      setProfileUserBray({
        ...profileUserBray,
        firstName: result.value.data.data[0].firstName,
        lastName: result.value.data.data[0].lastName,
        email: result.value.data.data[0].email,
        phoneNumber: result.value.data.data[0].phoneNumber,
      });
    });
  }, []);

  const handleBooking = async () => {
    try {
      if (booking.paymentMethod === '') {
        Toast.show('Please choose payment method');
        return;
      }
      const result = await axios.post(`/booking`, booking);
      // console.log(result);
      setBooking(result.data.data);
      Toast.show('Success booking movie !');
      props.navigation.navigate('Ticket', {
        params: {
          dataMovie: props.route.params.params.dataMovie,
          ...booking,
          bookingId: result.data.data.id,
        },
      });
    } catch (error) {
      Toast.show(error.response.data.msg);
      console.log(error.response);
    }
  };

  useEffect(() => {
    setIdMovie(props.route.params.params.idMovie);
    setSelectTime(props.route.params.params.selectTime);
    setDate(props.route.params.params.date.toISOString().split('T')[0]);
    setSelectedSeat(props.route.params.params.selectedSeat);
    setSeat(props.route.params.params.seat);
  }, []);

  // const handleTicket = () => {
  //   props.navigation.navigate('Ticket');
  // };
  return (
    <ScrollView>
      <View style={styles.totalPayment}>
        <Text style={styles.totalPaymentText}>Total Payment</Text>
        <Text style={styles.totalPaymentPrice}>Rp.{selectedSeat}</Text>
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
            <TouchableOpacity
              style={[
                styles.paymentBorder,
                booking.paymentMethod === 'GooglePay'
                  ? styles.paymentBorderActive
                  : null,
              ]}
              onPress={() =>
                setBooking({...booking, paymentMethod: 'GooglePay'})
              }>
              <Image
                style={styles.paymentMethod}
                source={require('../../assets/GoogleePay.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.paymentBorder,
                booking.paymentMethod === 'Visa'
                  ? styles.paymentBorderActive
                  : null,
              ]}
              onPress={() => setBooking({...booking, paymentMethod: 'Visa'})}>
              <Image
                style={styles.paymentMethod}
                source={require('../../assets/Visa.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.paymentBorder,
                booking.paymentMethod === 'GoPay'
                  ? styles.paymentBorderActive
                  : null,
              ]}
              onPress={() => setBooking({...booking, paymentMethod: 'GoPay'})}>
              <Image
                style={styles.paymentMethod}
                source={require('../../assets/GoPayy.png')}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.paymentChose}>
            <TouchableOpacity
              style={[
                styles.paymentBorder,
                booking.paymentMethod === 'Paypal'
                  ? styles.paymentBorderActive
                  : null,
              ]}
              onPress={() => setBooking({...booking, paymentMethod: 'Paypal'})}>
              <Image
                style={styles.paymentMethod}
                source={require('../../assets/Paypal.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.paymentBorder,
                booking.paymentMethod === 'Ovo'
                  ? styles.paymentBorderActive
                  : null,
              ]}
              onPress={() => setBooking({...booking, paymentMethod: 'Ovo'})}>
              <Image
                style={styles.paymentMethod}
                source={require('../../assets/OVO.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.paymentBorder,
                booking.paymentMethod === 'Dana'
                  ? styles.paymentBorderActive
                  : null,
              ]}
              onPress={() => setBooking({...booking, paymentMethod: 'Dana'})}>
              <Image
                style={styles.paymentMethod}
                source={require('../../assets/Dana.png')}
              />
            </TouchableOpacity>
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
              value={profileUserBray.firstName + ' ' + profileUserBray.lastName}
            />
          </View>
          <View>
            <Text style={styles.personalTitle}>Email</Text>
            <TextInput
              style={styles.personalInput}
              placeholder="jonasrodri123@gmail.com"
              value={profileUserBray.email}
            />
          </View>
          <View>
            <Text style={styles.personalTitle}>Phone Number</Text>
            <TextInput
              style={styles.personalInput}
              placeholder="+6281445687121"
              value={profileUserBray.phoneNumber}
            />
          </View>
          <View style={styles.personalAlert}>
            <Icon name="alert-triangle" size={30} color="#f4b740" />
            <Text style={{marginLeft: 12}}>Fill your data correctly</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.payButton} onPress={handleBooking}>
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
  paymentBorderActive: {
    borderWidth: 1,
    borderRadius: 4,
    margin: 4,
    borderColor: 'red',
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
