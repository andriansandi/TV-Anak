/**
 * Home Screen
 * 
 * @author      Sandi Andrian <andrian.sandi@gmail.com>
 * @since       Feb 10, 2019
 **/

const videos = [
    {
        id: 1,
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        id: 2,
        name: 'UPIN IPIN',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
    {
        id: 3,
        name: 'UPIN IPIN',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
]

import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
// import { Text } from 'react-native-elements';

//import custom components
import Header from '../../components/header';
import VideoLists from '../../components/videos/lists';

export default class Home extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header />
                <ScrollView horizontal={true} style={{ flex: 1}}>
                    {videos.map((item, key) =>
                        <VideoLists key={item.id} />
                    )}
                </ScrollView>
            </View>
        );
    }
}