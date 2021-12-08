import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import styles from './style';
import Footer from '../../components/Footer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../utils/axios';

function Home(props) {
  const [movie, setMovie] = useState([]);
  const [movieUpcoming, setMovieUpcoming] = useState([]);

  useEffect(() => {
    getToken();
    getMovie();
    getMovieUpcoming();
  }, []);

  const getToken = async () => {
    // const dataToken = await AsyncStorage.getItem('token');
    // console.log(dataToken);
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (error, stores) => {
        stores.map((result, i, store) => {
          console.log({[store[i][0]]: store[i][1]});
          return true;
        });
      });
    });
  };

  const getMovie = async () => {
    const dateNow = new Date().toISOString().split('-')[1];
    // console.log(dateNow, 'dateeenosw');

    try {
      const result = await axios.get(`/movie?page=1&limit=3&filter=${dateNow}`);
      setMovie(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const getMovieUpcoming = async () => {
    try {
      const result = await axios.get(`/movie?page=1&limit=50$filter=`);
      setMovieUpcoming(result.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const handleDetail = () => {
    props.navigation.navigate('MovieDetail');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{padding: 20}}>
          <Text style={styles.headerText}>Nearest Cinema, Newest Movie,</Text>
          <Text style={styles.headerText2}>Find out now!</Text>
        </View>

        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            marginVertical: 20,
          }}>
          <Image
            style={{width: 300, height: 300}}
            source={require('../../assets/jumbotron.png')}
          />
        </View>

        <View style={{backgroundColor: '#d6d8e7', padding: 20}}>
          <View style={styles.showingCaption}>
            <Text style={styles.showingCaptionText}>Now Showing</Text>
            <Text style={styles.showingCaptionText2}>view all</Text>
          </View>

          <FlatList
            horizontal
            data={movie}
            renderItem={({item}) => (
              <View style={styles.movieContent}>
                <Image
                  style={styles.movieImage}
                  source={
                    item.image
                      ? {
                          uri: `http://192.168.43.195:3001/uploads/movie/${item.image}`,
                        }
                      : require('../../assets/black.jpg')
                  }
                />
                <Text style={styles.movieTitle}>{item.name}</Text>
                <Text style={styles.movieGenre}>{item.category}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={{padding: 20}}>
          <View style={styles.showingCaption}>
            <Text style={styles.showingUpcomingText}>Upcoming Movies</Text>
            <Text style={styles.showingCaptionText2}>view all</Text>
          </View>

          <ScrollView horizontal>
            <TouchableOpacity style={styles.monthDate}>
              <Text style={styles.monthDateText}>September</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.monthDate}>
              <Text style={styles.monthDateText}>October</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.monthDate}>
              <Text style={styles.monthDateText}>November</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.monthDate}>
              <Text style={styles.monthDateText}>Desember</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.monthDate}>
              <Text style={styles.monthDateText}>January</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.monthDate}>
              <Text style={styles.monthDateText}>February</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.monthDate}>
              <Text style={styles.monthDateText}>March</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.monthDate}>
              <Text style={styles.monthDateText}>April</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.monthDate}>
              <Text style={styles.monthDateText}>May</Text>
            </TouchableOpacity>
          </ScrollView>

          <FlatList
            horizontal
            data={movieUpcoming}
            renderItem={({item}) => (
              <View style={styles.movieContent}>
                <Image
                  style={styles.movieImage}
                  source={
                    item.image
                      ? {
                          uri: `http://192.168.43.195:3001/uploads/movie/${item.image}`,
                        }
                      : require('../../assets/black.jpg')
                  }
                />
                <Text style={styles.movieTitle}>{item.name}</Text>
                <Text style={styles.movieGenre}>{item.category}</Text>
                <TouchableOpacity
                  style={styles.movieButton}
                  onPress={handleDetail}>
                  <Text style={styles.movieButtonText}>Details</Text>
                </TouchableOpacity>
              </View>
            )}
            keyExtractor={item => item.id}
          />
        </View>

        <View style={{marginHorizontal: 20}}>
          <View style={styles.joinContent}>
            <Text style={styles.joinText}>Be the vanguard of the</Text>
            <Text style={styles.joinText2}>Moviegoers</Text>
          </View>

          <View>
            <TextInput style={styles.joinInput} placeholder="Type your email" />
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButton2}>Join now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.joinContentDesc}>
            <Text style={styles.textAlign}>
              By joining you as a Tickitz member,
            </Text>
            <Text style={styles.textAlign}>we will always send you the</Text>
            <Text style={styles.textAlign}>latest updates vie email</Text>
          </View>
        </View>

        <Footer />
      </View>
    </ScrollView>
  );
}

export default Home;
