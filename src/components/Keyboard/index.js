import React from 'react';
import { 
  Button, 
  Text, 
  View,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class Keyboard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pressNumber: [false, false, false, false, false, false, false, false, false, false],
      myNumber: ['X', 'X', 'X', 'X']
    };
  }

  _reset = () => {
    this.setState({
      pressNumber: [false, false, false, false, false, false, false, false, false, false],
      myNumber: ['X', 'X', 'X', 'X']
    })
  }

  _renderNumberOnPress = (n) => {
    if('X' === this.state.myNumber[this.state.myNumber.length - 1]) {
      if(this.state.pressNumber[n] === false) {
        let pressNumber = this.state.pressNumber;
        pressNumber[n] = true;
        
        let myNumber = this.state.myNumber;
        for(let i=0; i<myNumber.length; i++){
          if('X' == myNumber[i]) {
            myNumber[i] = n;
            break;
          }
        }
        this.setState({pressNumber, myNumber});
      }
    }

    return false;
  }

  _renderNumberView = (n) => {

    return (
    <TouchableOpacity 
      onPress={()=>this._renderNumberOnPress(n)}
    >
      <View style={[styles.numberBlock, {backgroundColor: (this.state.pressNumber[n]? 'gray': '#388fdf')}]}>
        <Text style={styles.numberText}>{n}</Text>
      </View>
    </TouchableOpacity>);
    
  }

  _renderMyNumber = () => {
    let jsx = [];
    for(let i=0; i<this.state.myNumber.length; i++){
      jsx.push(<View style={styles.myNumberBlock} key={`myNumber_${i}`}>
        <Text style={styles.numberText}>{this.state.myNumber[i]}</Text>
      </View>);
    }
    return <View style={styles.rowContainer}>{jsx}</View>
  }


  _nemBack = () => {
    if('X' !== this.state.myNumber[0]) {
      let myNumber = this.state.myNumber;
      for(let i=0; i<myNumber.length; i++){
        if('X' !== myNumber[i]) {
          myNumber[i] = 'X';
        }
      }
      this.setState({
        pressNumber: [false, false, false, false, false, false, false, false, false, false],
        myNumber});
    }
  }


  render() {
    return (
      <View style={styles.container}>
        {this._renderMyNumber()}
        <View style={styles.rowContainer}>
          {this._renderNumberView(1)}
          {this._renderNumberView(2)}
          {this._renderNumberView(3)}
        </View>
        <View style={styles.rowContainer}>
          {this._renderNumberView(4)}
          {this._renderNumberView(5)}
          {this._renderNumberView(6)}
        </View>
        <View style={styles.rowContainer}>
          {this._renderNumberView(7)}
          {this._renderNumberView(8)}
          {this._renderNumberView(9)}
        </View>
        <View style={styles.rowContainer}>
          {this._renderNumberView(0)}
          <TouchableOpacity onPress={()=>this._nemBack()}>
            <View style={styles.funcBlock}>
              <Text style={styles.numberText}>清除</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.props.confirmFun(this.state.myNumber)}>
            <View style={styles.funcBlock}>
              <Text style={styles.numberText}>確定</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Keyboard;
