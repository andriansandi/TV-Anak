/**
 * Home Component
 * 
 * @author      Sandi Andrian <andrian.sandi@gmail.com>
 * @since       Feb 10, 2019
 **/

import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';

// Import Style
import styles from './header.style.js';

export default class TVAnakHeader extends Component {
    render() {
        return (
            // <LinearGradient colors={['#ffaf4b', '#ff920a']}>
                <View style={styles.container}>
                    <Text h5 style={styles.appname}>KIDDOSTV</Text>
                </View>
            // </LinearGradient>
        );
    }
}