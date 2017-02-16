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

export default class day01 extends Component {
    render() {
        return (
            <View style={styles.parent}>
                <View style={[styles.container,styles.center]}>

                    <View style={[styles.item,styles.center]}>
                        <Text style={styles.textStyle}>酒店</Text>
                    </View>
                    <View style={[styles.item,styles.leftLine]}>
                        <View style={[styles.flex,styles.center,styles.lineCenter]}>
                            <Text style={styles.textStyle}>海外酒店</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text style={styles.textStyle}>特惠酒店</Text>
                        </View>
                    </View>
                    <View style={styles.item}>
                        <View style={[styles.flex,styles.center,styles.lineCenter]}>
                            <Text style={styles.textStyle}>团购</Text>
                        </View>
                        <View style={[styles.flex,styles.center]}>
                            <Text style={styles.textStyle}>客栈,公寓</Text>
                        </View>
                    </View>

                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

    parent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        height: 80,
        flexDirection: 'row',
        backgroundColor: '#f00',
        borderRadius: 10,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 5
    },
    item: {
        flex: 1
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    flex: {
        flex: 1
    },
    leftLine: {
        borderLeftWidth: 2,
        borderRightWidth: 2,
        borderLeftColor: '#fff',
        borderRightColor: '#fff'
    },
    textStyle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16

    },
    lineCenter: {
        borderBottomWidth: 2,
        borderBottomColor: '#fff'
    }


});

AppRegistry.registerComponent('day01', () => day01);
