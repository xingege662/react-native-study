/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import {Header} from './header';

export default class day02 extends Component {
  render() {
    return (
        <View>
          <Header/>
          <List_ title="一线城市"/>
          <List_ title="一线城市"/>
          <List_ title="一线城市"/>
          <List_ title="一线城市"/>
          <List_ title="一线城市"/>
          <List_ title="一线城市"/>

        </View>

    );
  }
}

class List_  extends  Component{

  hello(a){
    alert("hello"+ a)
  }

  render(){
    return(
        <Text onPress={this.hello.bind(this,'a')} >{this.props.title}</Text>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('day02', () => day02);
