/**
 * Home Screen
 * 
 * @author      Sandi Andrian <andrian.sandi@gmail.com>
 * @since       Feb 10, 2019
 **/

import React, { Component } from 'react';
import { Alert } from 'react-native';
import { Text } from 'react-native-elements';

//import custom components
import Header from '../../components/header';

export default class Home extends Component {
    render() {
        return (
            <Header></Header>
            // <Text h1>Home</Text>
        );
    }
}