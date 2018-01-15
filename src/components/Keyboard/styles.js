import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5
  },
  numberBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 25
  },
  numberText: {
    fontSize: 20,
    color: 'white'
  },
  funcBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#ca1b45',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: 5
  },
  myNumberBlock: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
    backgroundColor: 'pink',
    marginLeft: 1,
    marginRight: 1,
    borderRadius: 25
  },
});
