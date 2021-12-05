import React, {useState} from 'react';
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

function MovieDetail(props) {
  const [date, setDate] = useState(new Date());
  const [openDate, setOpenDate] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState();

  const handleOrder = () => {
    props.navigation.navigate('OrderPage');
  };
  return (
    <View style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.detailHeader}>
            <View style={styles.detailHeaderImage}>
              <Image source={require('../../assets/Spiderman.png')} />
            </View>
            <View style={styles.detailHeaderTitle}>
              <Text style={styles.detailHeaderTitleJudul}>
                Spider-Man: Homecoming
              </Text>
              <Text style={styles.detailHeaderTitleGenre}>
                Adventure, Action, Sci-Fi
              </Text>
            </View>
          </View>

          <View style={styles.movieDetailTitle}>
            <View style={styles.movieDetail}>
              <View>
                <Text style={styles.detailTextHeader}>Release Date</Text>
                <Text style={styles.detailTextHeaderDesc}>June 28, 2017</Text>
              </View>
              <View>
                <Text style={styles.detailTextHeader}>Duration</Text>
                <Text style={styles.detailTextHeaderDesc}>2 hrs 13 min</Text>
              </View>
            </View>

            <View style={styles.movieDetail}>
              <View>
                <Text style={styles.detailTextHeader}>Directed by</Text>
                <Text style={styles.detailTextHeaderDesc}>Jon Watss</Text>
              </View>
              <View>
                <Text style={styles.detailTextHeader}>Casts</Text>
                <Text style={styles.detailTextHeaderDesc}>
                  Tom Holland, Robert Downey Jr., etc.
                </Text>
              </View>
            </View>
          </View>

          <View style={styles.synopsis}>
            <Text style={styles.synopsisHeader}>Synopsis</Text>
            <Text style={styles.synopsisDesc}>
              Thrilled by his experience with the Avengers, Peter returns home,
              where he lives with his Aunt May, under the watchful eye of his
              new mentor Tony Stark, Peter tries to fall back into his normal
              daily routine - distracted by thoughts of proving himself to be
              more than just your friendly neighborhood Spider-Man - but when
              the Vulture emerges as a new villain, everything that Peter holds
              most important will be threatened.
            </Text>
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

            <View style={styles.scheduleTitle}>
              <View style={styles.scheduleHeader}>
                <Image
                  style={{width: 80, resizeMode: 'contain'}}
                  source={require('../../assets/ebuid.png')}
                />
                <Text style={styles.scheduleHeaderDesc}>
                  Whatever street No.12, South Purwokerto
                </Text>
              </View>
              <View style={{marginVertical: 12}}>
                <View style={styles.schedule}>
                  <Text>08:30am</Text>
                  <Text>08:30am</Text>
                  <Text>08:30am</Text>
                  <Text>08:30am</Text>
                </View>
                <View style={styles.schedule}>
                  <Text>08:30am</Text>
                  <Text>08:30am</Text>
                  <Text>08:30am</Text>
                  <Text>08:30am</Text>
                </View>
              </View>
              <View style={styles.scheduleBooking}>
                <Text style={styles.schedulePrice}>Price</Text>
                <Text style={styles.scheduleSeat}>$10.00/seat</Text>
              </View>
              <TouchableOpacity style={styles.scheduleButton}>
                <Text style={styles.scheduleButtonText} onPress={handleOrder}>
                  Book now
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.scheduleTitle}>
              <View style={styles.scheduleHeader}>
                <Image
                  style={{width: 80, resizeMode: 'contain'}}
                  source={require('../../assets/ebuid.png')}
                />
                <Text style={styles.scheduleHeaderDesc}>
                  Whatever street No.12, South Purwokerto
                </Text>
              </View>
              <View style={{marginVertical: 12}}>
                <View style={styles.schedule}>
                  <Text>08:30am</Text>
                  <Text>08:30am</Text>
                  <Text>08:30am</Text>
                  <Text>08:30am</Text>
                </View>
                <View style={styles.schedule}>
                  <Text>08:30am</Text>
                  <Text>08:30am</Text>
                  <Text>08:30am</Text>
                  <Text>08:30am</Text>
                </View>
              </View>
              <View style={styles.scheduleBooking}>
                <Text style={styles.schedulePrice}>Price</Text>
                <Text style={styles.scheduleSeat}>$10.00/seat</Text>
              </View>
              <TouchableOpacity style={styles.scheduleButton}>
                <Text style={styles.scheduleButtonText} onPress={handleOrder}>
                  Book now
                </Text>
              </TouchableOpacity>
            </View>

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
    justifyContent: 'space-between',
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
});

export default MovieDetail;
