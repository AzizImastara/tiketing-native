import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
  LogBox,
} from 'react-native';
import Footer from '../../components/Footer';
import Seat from '../../components/Seat';
import Icon from 'react-native-vector-icons/Feather';

function OrderPage(props) {
  const listSeat = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
  const [selectedSeat, setSelectedSeat] = useState([]);
  const [reservedSeat, setReservedSeat] = useState([]);
  const [idMovie, setIdMovie] = useState('');
  const [selectTime, setSelectTime] = useState({});
  const [date, setDate] = useState('');
  const [dataMovie, setDataMovie] = useState([]);

  useEffect(() => {
    setIdMovie(props.route.params.params.idMovie);
    setSelectTime(props.route.params.params.selectTime);
    setDate(props.route.params.params.date);
    setDataMovie(props.route.params.params.dataMovie);
    // console.log(props.route.params.params.idMovie, 'params');
    // console.log(props.route.params.params.selectTime, 'time');
    // console.log(props.route.params.params.dataMovie, 'movie');
    // console.log(
    //   props.route.params.params.date.toISOString().split('T')[0],
    //   'date',
    // );
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  // console.log(idMovie, 'sasas');

  const handleSelectedSeat = data => {
    if (selectedSeat.includes(data)) {
      const deleteSeat = selectedSeat.filter(el => {
        return el !== data;
      });
      setSelectedSeat(deleteSeat);
    } else {
      setSelectedSeat([...selectedSeat, data]);
    }
  };

  const handleResetSeat = () => {
    setSelectedSeat([]);
  };

  const handleBookingSeat = () => {
    console.log(selectedSeat);
  };

  const handlePayment = () => {
    props.navigation.navigate('PaymentPage', {
      params: {
        idMovie: props.route.params.params.idMovie,
        dataMovie: props.route.params.params.dataMovie,
        date: props.route.params.params.date,
        selectTime: props.route.params.params.selectTime,
        seat: selectedSeat,
        selectedSeat: selectTime.price * selectedSeat.length,
      },
    });
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
          {/* <Seat /> */}
          <FlatList
            data={listSeat}
            keyExtractor={item => item}
            renderItem={({item}) => (
              <Seat
                seatAlphabhet={item}
                reserved={reservedSeat}
                selected={selectedSeat}
                selectSeat={handleSelectedSeat}
              />
            )}
          />

          <View style={{marginVertical: 12, marginLeft: 12}}>
            <Text style={{color: '#000', fontSize: 16, fontWeight: '600'}}>
              Seating key
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: '#fff',
              justifyContent: 'center',
            }}>
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginVertical: 12,
            }}>
            <TouchableOpacity
              onPress={handleBookingSeat}
              style={{
                backgroundColor: '#5f2eea',
                padding: 12,
                borderRadius: 4,
                width: 100,
              }}>
              <Text style={{color: '#fff', textAlign: 'center'}}>Booking</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleResetSeat}
              style={{
                backgroundColor: '#5f2eea',
                padding: 12,
                borderRadius: 4,
                width: 100,
              }}>
              <Text style={{color: '#fff', textAlign: 'center'}}>
                Reset Seat
              </Text>
            </TouchableOpacity>
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
              style={{width: 80, resizeMode: 'contain', marginVertical: 12}}
              source={
                selectTime.premiere === 'hiflix'
                  ? require('../../assets/hiflix.png')
                  : selectTime.premiere === 'ebu.id'
                  ? require('../../assets/ebuid.png')
                  : require('../../assets/cineone.png')
              }
            />
            <Text style={{fontSize: 24, fontWeight: '600', color: '#14142b'}}>
              {selectTime.premiere}
            </Text>
            <Text style={{fontSize: 14, color: '#14142b', marginTop: 8}}>
              {dataMovie.name}
            </Text>
          </View>
          <View style={styles.between}>
            <View style={styles.betweeenContent}>
              <Text style={styles.betweenLeft}>
                {date ? date.toISOString().split('T')[0] : ''}
              </Text>
              <Text style={styles.betweenRight}>{selectTime.time}</Text>
            </View>
            <View style={styles.betweeenContent}>
              <Text style={styles.betweenLeft}>One ticket price</Text>
              <Text style={styles.betweenRight}>Rp.{selectTime.price}</Text>
            </View>
            <View style={styles.betweeenContent}>
              <Text style={styles.betweenLeft}>Seat choosed</Text>
              <Text style={styles.betweenRight}>
                {(selectedSeat || []).map(selectedSeat => `${selectedSeat}, `)}
              </Text>
            </View>
          </View>
          <View style={styles.betweeenContent}>
            <Text style={styles.payment}>Total Payment</Text>
            <Text style={styles.price}>
              Rp.{selectTime.price * selectedSeat.length}
            </Text>
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
