import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Footer from '../../components/Footer';
import DatePicker from 'react-native-date-picker';
import {Picker} from '@react-native-picker/picker';
import axios from '../../utils/axios';
import {API_HOST} from '@env';

function MovieDetail(props) {
  const [dataMovie, setDataMovie] = useState([]);
  const [dataSchedule, setDataSchedule] = useState([]);
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectTime, setSelectTime] = useState({
    idSchedule: '',
    time: '',
    premiere: '',
    price: 0,
  });

  console.log(dataMovie, 'timee');

  useEffect(() => {
    getDataMovie(props.route.params.params.idMovie);
    console.log(props.route.params.params.idMovie);
    getDataSchedule();
  }, [props.route.params.params]);

  const getDataMovie = async id => {
    try {
      const result = await axios.get(`/movie/${id}`);
      // console.log(result, 'resss');
      setDataMovie(result.data.data[0]);
      console.log(result.data.data[0], 'aa');
    } catch (error) {
      console.log(error.response);
    }
  };

  const getDataSchedule = async () => {
    try {
      const result = await axios.get(
        `/schedule?page=1&dblimit=10&searchBy=movieId&search=${props.route.params.params.idMovie}`,
      );
      console.log(result.data.data, 'schedule');
      setDataSchedule(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleOrder = () => {
    props.navigation.navigate('OrderPage', {
      params: {
        idMovie: props.route.params.params.idMovie,
        dataMovie: dataMovie,
        selectTime: selectTime,
        date: date,
      },
    });
  };

  // console.log(date.toISOString().split('T')[0]);

  return (
    <View style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.detailHeader}>
            <View style={styles.detailHeaderImage}>
              <Image
                style={styles.movieImage}
                source={
                  dataMovie?.image
                    ? {uri: `${API_HOST}/uploads/movie/${dataMovie?.image}`}
                    : require('../../assets/black.jpg')
                }
              />
            </View>
            <View style={styles.detailHeaderTitle}>
              <Text style={styles.detailHeaderTitleJudul}>
                {dataMovie?.name || ''}
              </Text>
              <Text style={styles.detailHeaderTitleGenre}>
                {dataMovie?.category || ''}
              </Text>
            </View>
          </View>

          <View style={styles.movieDetailTitle}>
            <View style={styles.movieDetail}>
              <View>
                <Text style={styles.detailTextHeader}>Release Date</Text>
                <Text style={styles.detailTextHeaderDesc}>
                  {dataMovie?.releaseDate
                    ? dataMovie?.releaseDate.slice(0, 10)
                    : ''}
                </Text>
              </View>
              <View>
                <Text style={styles.detailTextHeader}>Duration</Text>
                <Text style={styles.detailTextHeaderDesc}>
                  {dataMovie?.duration || ''}
                </Text>
              </View>
            </View>

            <View style={styles.movieDetail}>
              <View>
                <Text style={styles.detailTextHeader}>Directed by</Text>
                <Text style={styles.detailTextHeaderDesc}>
                  {dataMovie?.director || ''}
                </Text>
              </View>
              <View>
                <Text style={styles.detailTextHeader}>Casts</Text>
                <Text style={styles.detailTextHeaderDesc}>
                  {dataMovie?.cast || ''}
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.synopsis}>
            <Text style={styles.synopsisHeader}>Synopsis</Text>
            <Text style={styles.synopsisDesc}>{dataMovie?.synopsis || ''}</Text>
          </View>
          <View style={{backgroundColor: '#f5f6f8', padding: 20}}>
            <View style={styles.scheduleDate}>
              <Text style={styles.scheduleDateHeader}>
                Showtimes and Tickets
              </Text>
              <TouchableOpacity
                onPress={() => setOpenDate(true)}
                style={styles.buttonDate}>
                <Text style={styles.buttonDateText}>Set a date</Text>
              </TouchableOpacity>
              <DatePicker
                textColor="black"
                modal
                open={openDate}
                date={date}
                onConfirm={date => {
                  setOpenDate(false);
                  setDate(date);
                }}
                onCancel={() => {
                  setOpenDate(false);
                }}
              />

              <View>
                <Picker
                  style={styles.picker}
                  selectedValue={selectedLanguage}
                  onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                  }>
                  <Picker.Item
                    style={styles.pickerItem}
                    label="Jakarta"
                    value="jakarta"
                  />
                  <Picker.Item
                    label="Bogor"
                    value="bogor"
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="Bandung"
                    value="bandung"
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="Bogor"
                    value="bogor"
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="Bandung"
                    value="bandung"
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="Bogor"
                    value="bogor"
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="Bandung"
                    value="bandung"
                    style={styles.pickerItem}
                  />
                  <Picker.Item
                    label="Bogor"
                    value="bogor"
                    style={styles.pickerItem}
                  />
                </Picker>
              </View>
            </View>

            {dataSchedule.map(item => (
              <View key={item.id} style={styles.scheduleTitle}>
                <View style={styles.scheduleHeader}>
                  <Image
                    style={{
                      width: 80,
                      resizeMode: 'contain',
                      marginVertical: 12,
                    }}
                    source={
                      item.premiere === 'hiflix'
                        ? require('../../assets/hiflix.png')
                        : item.premiere === 'ebu.id'
                        ? require('../../assets/ebuid.png')
                        : require('../../assets/cineone.png')
                    }
                  />
                  <Text style={styles.scheduleHeaderDesc}>{item.location}</Text>
                </View>
                <View style={{marginVertical: 12}}>
                  <View style={styles.schedule}>
                    {item.time.map(time => (
                      <Text
                        style={styles.scheduleTime}
                        key={time}
                        onPress={() =>
                          setSelectTime({
                            time: time,
                            idSchedule: item.id,
                            premiere: item.premiere,
                            price: item.price,
                          })
                        }>
                        {time}
                      </Text>
                    ))}
                  </View>
                </View>
                <View style={styles.scheduleBooking}>
                  <Text style={styles.schedulePrice}>Price</Text>
                  <Text style={styles.scheduleSeat}>Rp.{item.price}/seat</Text>
                </View>
                <TouchableOpacity
                  style={styles.scheduleButton}
                  onPress={handleOrder}>
                  <Text style={styles.scheduleButtonText}>Book now</Text>
                </TouchableOpacity>
              </View>
            ))}

            <View>
              <Text style={{textAlign: 'center', color: '#5f2eea'}}>
                view more
              </Text>
            </View>
          </View>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  detailHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  detailHeaderImage: {
    borderWidth: 1,
    padding: 16,
    borderRadius: 4,
    borderColor: '#dedede',
    marginVertical: 20,
  },
  detailHeaderTitle: {
    marginBottom: 40,
  },
  detailHeaderTitleJudul: {
    fontWeight: '600',
    fontSize: 20,
    color: '#000',
    textAlign: 'center',
  },
  detailHeaderTitleGenre: {
    color: '#4e4b66',
    fontSize: 16,
    textAlign: 'center',
  },
  movieDetailTitle: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  movieDetail: {
    width: 150,
  },
  detailTextHeader: {
    color: '#8692a6',
    fontSize: 13,
  },
  detailTextHeaderDesc: {
    color: '#121212',
    fontSize: 16,
    marginBottom: 12,
  },
  synopsis: {
    marginVertical: 40,
    padding: 20,
  },
  synopsisHeader: {
    marginBottom: 12,
    color: '#14142b',
    fontSize: 16,
    fontWeight: '600',
  },
  synopsisDesc: {
    fontSize: 13,
    color: '#4e4b66',
  },
  scheduleTitle: {
    padding: 20,
    borderRadius: 8,
    marginVertical: 40,
    backgroundColor: '#fff',
  },
  scheduleHeader: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scheduleHeaderDesc: {
    color: '#aaa',
    fontSize: 13,
    marginBottom: 12,
  },
  schedule: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  scheduleBooking: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  schedulePrice: {
    fontSize: 14,
    color: '#6b6b6b',
  },
  scheduleTime: {
    fontSize: 14,
    color: '#000',
    borderWidth: 1,
    padding: 4,
    borderRadius: 4,
  },
  scheduleSeat: {
    fontSize: 14,
    color: '#000',
    fontWeight: '600',
  },
  scheduleButton: {
    backgroundColor: '#5f2eea',
    padding: 12,
    borderRadius: 4,
  },
  scheduleButtonText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
  },
  scheduleDate: {
    display: 'flex',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  scheduleDateHeader: {
    fontSize: 18,
    color: '#000',
    fontWeight: '700',
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonDate: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#eff0f6',
    marginHorizontal: 60,
    paddingVertical: 10,
    textAlign: 'left',
    borderColor: '#eff0f6',
  },
  buttonDateText: {
    color: '#4e4b66',
    fontSize: 14,
    paddingLeft: 10,
  },
  picker: {
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#eff0f6',
    marginHorizontal: 60,
    paddingVertical: 10,
    textAlign: 'left',
    borderColor: '#eff0f6',
    marginTop: 12,
  },
  pickerItem: {
    color: '#4e4b66',
    fontSize: 14,
    paddingLeft: 10,
  },
  movieImage: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 8,
  },
});

export default MovieDetail;
