import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import styles from './style';
import Footer from '../../components/Footer';

function Home(props) {
  // useEffect(() => {
  //   console.log(props.route.params.nama);
  // }, []);

  const handleDetail = () => {
    props.navigation.navigate('MovieDetail');
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={{padding: 20}}>
          <Text style={styles.headerText}>Nearest Cinema, Newest Movie,</Text>
          <Text style={styles.headerText2}>Find out now!</Text>
          {/* <Text style={styles.headerText2}>Find out now!</Text> */}
        </View>

        <View
          style={{
            display: 'flex',
            // backgroundColor: 'black',
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

          <ScrollView horizontal style={{marginVertical: 20}}>
            <View style={styles.movieContent}>
              <Image source={require('../../assets/Spiderman.png')} />
              <Text style={styles.movieTitle}>Spider-Man: Home Coming</Text>
              <Text style={styles.movieGenre}>Action, Adventure, Sci-Fi</Text>
              <TouchableOpacity
                style={styles.movieButton}
                onPress={handleDetail}>
                <Text style={styles.movieButtonText}>Details</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.movieContent}>
              <Image source={require('../../assets/Spiderman.png')} />
              <Text style={styles.movieTitle}>Spider-Man: Home Coming</Text>
              <Text style={styles.movieGenre}>Action, Adventure, Sci-Fi</Text>
              <TouchableOpacity style={styles.movieButton}>
                <Text style={styles.movieButtonText}>Details</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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

          <ScrollView horizontal>
            <View style={styles.movieContent}>
              <Image source={require('../../assets/Lionking.png')} />
              <Text style={styles.movieTitle}>Lion King</Text>
              <Text style={styles.movieGenre}>Action, Adventure, Sci-Fi</Text>
              <TouchableOpacity style={styles.movieButton}>
                <Text style={styles.movieButtonText}>Details</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.movieContent}>
              <Image source={require('../../assets/Lionking.png')} />
              <Text style={styles.movieTitle}>Lion King</Text>
              <Text style={styles.movieGenre}>Action, Adventure, Sci-Fi</Text>
              <TouchableOpacity style={styles.movieButton}>
                <Text style={styles.movieButtonText}>Details</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
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
