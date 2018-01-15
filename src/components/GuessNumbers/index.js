import React from 'react';
import { 
  Button, 
  Text, 
  View 
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class GuessNumbers extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      num: [0, 0, 0, 0],
      isPlay: true
    };
  }
  onPressNewGame = () => {
    let num = [];
    num.push(Math.floor(Math.random()*(9-0+1)+0)); //第一個數字
    let i=1;
    while( i<4 ){
      const n = Math.floor(Math.random()*(9-0+1)+0);
      let isOkNum = true;
      for(let j=0; j<num.length; j++) {
        if(n == num[j]){
          isOkNum = false;
          break;
        }
      }
      if(isOkNum) {
        i++;
        num.push(n); //第一個數字
      }
    }
    this.setState({
      num,
      isPlay: true
    });
    console.log(this.state);
  }

  onPressAbandon = () => {
    this.setState({isPlay: false});
  }

  getGuessNum = () => {
    return this.state.num;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.numberBlock}>
          <Text style={styles.numberText}>{this.state.isPlay? '?' : this.state.num[0]}</Text>
        </View>
        <View style={styles.numberBlock}>
          <Text style={styles.numberText}>{this.state.isPlay? '?' : this.state.num[1]}</Text>
        </View>
        <View style={styles.numberBlock}>
          <Text style={styles.numberText}>{this.state.isPlay? '?' : this.state.num[2]}</Text>
        </View>
        <View style={styles.numberBlock}>
          <Text style={styles.numberText}>{this.state.isPlay? '?' : this.state.num[3]}</Text>
        </View>
      </View>
    );
  }
}

GuessNumbers.propTypes = {
  newGameFunc: PropTypes.func,
  abandonFunc: PropTypes.func
};

export default GuessNumbers;
