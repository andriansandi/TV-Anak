/**
 * Home Component
 * 
 * @author      Sandi Andrian <andrian.sandi@gmail.com>
 * @since       Feb 10, 2019
 **/

import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Header } from 'react-native-elements';

// Import Style
import styles from './header.style.js';

export default class TVAnakHeader extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text h5 style={styles.appname}>KIDDOSTV</Text>
            </View>
        );
    }
}