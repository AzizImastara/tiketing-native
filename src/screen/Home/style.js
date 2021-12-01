import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: 'blue',
    margin: 10,
  },
  header: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    // backgroundColor: 'red',
  },
  main: {
    flex: 2,
    backgroundColor: 'green',
    width: '100%',
  },
  footer: {
    flex: 1,
    backgroundColor: 'grey',
    width: '100%',
  },
  textMedium: {
    fontSize: 40,
    color: 'white',
  },
});
