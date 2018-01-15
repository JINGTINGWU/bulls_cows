import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList
} from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import GuessNumbers from './src/components/GuessNumbers';
import Keyboard from './src/components/Keyboard';

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      isPlay: false,
      flatListSource: []
    };
  }

  onPressNewGame = () => {
    this.guessNumbers.onPressNewGame();
    this.keyboard._reset();
    this.setState({isPlay: true, flatListSource: []});
  }

  onPressAbandon = () => {
    this.guessNumbers.onPressAbandon();
    this.keyboard._reset();
    this.setState({isPlay: false, flatListSource: []});
  }

  checkNumber = (guessNum, myNum) => {
    let a = 0;//有幾個是相同數字相同位置
    let b = 0;//有幾個是相同數字但是不同位置
    for(let i=0; i<guessNum.length; i++){
      for(let j=0; j<myNum.length; j++){
        if(guessNum[i] == myNum[j]) {
          if(i == j){
            a++;
          }else{
            b++;
          }
          break;
        }
      }
    }

    return [a, b];
  }

  _renderFlatListItem = (item) => (
    <Text>{item}</Text>
  );

  _confirmFun = (myNum) => {
    if(this.state.isPlay) {
      const guessNum = this.guessNumbers.getGuessNum();
      if('X' !== myNum[myNum.length - 1]) {
        const ab = this.checkNumber(guessNum, myNum);
        console.log(ab);

        let _myNum = '';
        for(let j=0; j<myNum.length; j++){
          _myNum += myNum[j];
        }

        let flatListSource = this.state.flatListSource;
        flatListSource.push({
          idx: flatListSource.length + 1,
          result: `${ab[0]}A${ab[1]}B`,
          myNum: _myNum
        });
        this.setState({flatListSource});

        console.log(this.state.flatListSource);

        if(ab[0] === 4){
          this.onPressAbandon();
          this.dropdown.alertWithType('success', 'Success', `您猜對了!${myNum}`);
        }else{
          this.keyboard._reset();
        }
      } else {
        this.dropdown.alertWithType('warn', 'Warn', `您的數字不完整，必須填滿。${myNum}`);
      }
    }else{
      this.dropdown.alertWithType('warn', 'Warn', '請先開啟「新遊戲」');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbarContainer}>
          <Button
            style={styles.button}
            onPress={this.onPressNewGame}
            title="新遊戲"
            color="#841584"
          />
          <View style={{width: 30}}></View>
          <Button
            style={styles.button}
            onPress={this.onPressAbandon}
            title="放棄"
            color="#841584"
            disabled={!this.state.isPlay}
          />
        </View>
        <View style={styles.hr}></View>
        <Text>猜測的數字</Text>
        <GuessNumbers ref={obj => { this.guessNumbers = obj; }}></GuessNumbers>
        <View style={styles.hr}></View>
        <View style={styles.rowView}>
          <Keyboard ref={obj => { this.keyboard = obj; }} confirmFun={this._confirmFun}></Keyboard>
          <FlatList
            style={{backgroundColor: 'pink'}}
            data={this.state.flatListSource}
            keyExtractor={(x, i) => i}
            renderItem={({ item }) =>
              <View style={{flexDirection:'row'}}>
                <Text style={{flex:1}}>{item.idx}</Text>
                <Text style={{flex:2}}>{item.result}</Text>
                <Text style={{flex:2}}>{item.myNum}</Text>
              </View>
            }
          />
        </View>
        <DropdownAlert ref={ref => this.dropdown = ref}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  hr: {
    height: 1,
    width: '70%', 
    backgroundColor: 'black',
    marginTop: 3,
    marginBottom: 3
  },
  toolbarContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  rowView: {
    flexDirection: 'row',
  }
});
