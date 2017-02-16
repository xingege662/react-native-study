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
    View
} from 'react-native';

export  class Header extends Component {
    render() {
        return (
            <View style={styles.flex}>
                <Text style={styles.font}>

                    <Text style={styles.font_1}>网易</Text>
                    <Text style={styles.font_2}>新闻</Text>
                    <Text >客户端</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flex:{
        flex:1,
        marginTop:25,
        borderBottomWidth:2,
        alignItems:'center'

    },
    font:{
        fontSize:25,
        fontWeight:'bold',
        textAlign:'center'
    },
    font_1:{
        color:'#CD1D1C'
    },
    font_2:{
        color:'#fff',
        backgroundColor:'#CD1D1C'
    }


});

