/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

export default class TextInputDemo extends Component {
    render() {
        return (
           <Search/>
        );
    }
}

export class Search extends Component {
    render() {
        return (
            <View style={styles.textInput}>
                <View style={styles.topStatus}>
                    <TextInput></TextInput>
                </View>
                <View style={styles.text}>
                    <Text>搜索</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    textInput: {

        flexDirection: 'row',

    },
    topStatus:{
        flex:1,
        marginTop:20,
        borderColor:'#f00',
        borderWidth:2,
        borderRadius:2

    },
    text:{

        backgroundColor:'#00f',
        justifyContent:'center',
        alignItems:'center',
        marginTop:20

    }

});

AppRegistry.registerComponent('TextInputDemo', () => TextInputDemo);
