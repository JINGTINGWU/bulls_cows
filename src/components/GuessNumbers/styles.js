import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  numberBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#c9a4e6',
    marginLeft: 1,
    marginRight: 1,
    borderRadius: 25
  },
  numberText: {
    fontSize: 20,
    color: 'white'
  }
});
