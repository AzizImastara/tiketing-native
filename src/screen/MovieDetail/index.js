import React from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

function MovieDetail(props) {
  return (
    <View style={styles.container}>
      <Text>MovieDetail Screen</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default MovieDetail;
