import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 14,
    color: '#a0a3bd',
    fontWeight: '400',
  },
  headerText2: {
    fontSize: 48,
    color: '#5f2eea',
    fontWeight: '700',
  },
  showingCaption: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  showingCaptionText: {
    color: '#752eea',
    fontWeight: '700',
    fontSize: 18,
  },
  showingCaptionText2: {
    color: '#5f2eea',
    fontSize: 14,
    fontWeight: '600',
  },
  showingUpcomingText: {
    color: '#14142b',
    fontSize: 18,
    fontWeight: '700',
  },

  movieContent: {
    // backgroundColor: 'rgba(255, 255, 255, 0.2)',
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
  monthDate: {
    borderWidth: 1,
    padding: 12,
    borderColor: '#5f2eea',
    width: 100,
    marginHorizontal: 12,
    borderRadius: 4,
    marginVertical: 20,
  },
  monthDateText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#5f2eea',
  },
  joinContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 20,
  },
  joinContentDesc: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 80,
  },
  joinText: {
    fontSize: 14,
    color: '#4e4b66',
  },
  joinText2: {
    fontSize: 32,
    color: '#5f2eea',
    fontWeight: '700',
  },
  textAlign: {
    textAlign: 'center',
    color: '#6e7191',
    fontSize: 12,
  },
  joinButton: {
    backgroundColor: '#5f2eea',
    paddingVertical: 12,
    borderRadius: 4,
  },
  joinButton2: {
    color: '#fff',
    textAlign: 'center',
  },
  joinInput: {
    borderWidth: 1,
    borderColor: '#dedede',
    borderRadius: 4,
    marginBottom: 12,
    paddingHorizontal: 12,
  },
  movieImage: {
    width: 150,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 12,
  },
});
