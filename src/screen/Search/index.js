import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Footer from '../../components/Footer';
import Pagination from '../../components/Pagination';
import InputSearch from '../../components/InputSearch';
import axios from '../../utils/axios';
import {API_HOST} from '@env';

function Search(props) {
  const [dataMovie, setDataMovie] = useState({
    data: [],
    pagination: {},
  });
  const [params, setParams] = useState({
    search: '',
    page: 1,
    limit: 2,
  });

  const getMovie = () => {
    axios
      .get(
        `/movie?page=${params.page}&limit=${params.limit}&search=${params.search}`,
      )
      .then(res => {
        setDataMovie({data: res.data.data, pagination: res.data.pagination});
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const handleSearch = value => {
    setParams({
      ...params,
      search: value,
    });
  };

  const handleSubmitSearch = () => {
    axios
      .get(
        `/movie?page=${params.page}&limit=${params.limit}&search=${params.search}`,
      )
      .then(res => {
        setDataMovie({data: res.data.data, pagination: res.data.pagination});
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  const handlePagination = item => {
    setParams({
      ...params,
      page: item,
    });

    axios
      .get(`/movie?page=${item}&limit=${params.limit}&search=${params.search}`)
      .then(res => {
        setDataMovie({data: res.data.data, pagination: res.data.pagination});
      })
      .catch(err => {
        console.log(err.response);
      });
  };

  // const toDetail = id => {
  //   props.navigation.navigate('Movie', {params: {idMovie: id}});
  // };

  useEffect(() => {
    getMovie();
    console.log(dataMovie.data);
  }, []);

  return (
    <View style={{backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={styles.container}>
          <View style={{padding: 20}}>
            <InputSearch
              onChange={value => handleSearch(value)}
              onPress={handleSubmitSearch}
            />
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {dataMovie.data.length > 0 ? (
              <>
                {dataMovie.data.map(item => (
                  <View style={styles.movieContent}>
                    <Image
                      style={styles.movieImage}
                      source={
                        item.image
                          ? {
                              uri: `${API_HOST}/uploads/movie/${item.image}`,
                            }
                          : require('../../assets/black.jpg')
                      }
                    />
                    <Text style={styles.movieTitle}>{item.name}</Text>
                    <Text style={styles.movieGenre}>{item.category}</Text>
                    {/* <TouchableOpacity
                      style={styles.movieButton}
                      onPress={() => toDetail(item.id)}>
                      <Text style={styles.movieButtonText}>Details</Text>
                    </TouchableOpacity> */}
                  </View>
                ))}
                <Pagination
                  currentPage={params.page}
                  onPress={item => handlePagination(item)}
                  totalPage={dataMovie.pagination.totalPage}
                />
              </>
            ) : (
              <>
                <Text style={{fontSize: 24, fontWeight: '700', color: '#000'}}>
                  Movie not found
                </Text>
              </>
            )}
          </View>
          <Footer />
        </View>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  movieImage: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 12,
  },
  movieContent: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    width: 200,
    marginRight: 16,
    marginVertical: 12,
  },
  movieTitle: {
    fontSize: 20,
    color: '#14142b',
    fontWeight: '600',
    textAlign: 'center',
  },
  movieGenre: {
    fontSize: 15,
    textAlign: 'center',
  },
  movieButton: {
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#5f2eea',
    backgroundColor: '#fff',
    width: '80%',
    padding: 8,
    marginTop: 8,
  },
  movieButtonText: {
    textAlign: 'center',
    color: '#5f2eea',
    fontSize: 16,
    fontWeight: '300',
  },
});

export default Search;
