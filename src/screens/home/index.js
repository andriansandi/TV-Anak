/**
 * Home Screen
 * 
 * @author      Sandi Andrian <andrian.sandi@gmail.com>
 * @since       Feb 10, 2019
 **/

import React, { Component } from 'react';
import { Alert, View } from 'react-native';
import { Text } from 'react-native-elements';

//import custom components
import Header from '../../components/header';
import VideoLists from '../../components/videos/lists';

export default class Home extends Component {
    render() {
        return (
            <View>
                <Header></Header>
                <VideoLists></VideoLists>
            </View>
            
            // <Text h1>Home</Text>
        );
    }
}