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
];



import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
// import { Text } from 'react-native-elements';

//import custom components
import Header from '../../components/header';
import VideoLists from '../../components/videos/lists';

//import styles
import styles from './home.style';

const { width } = Dimensions.get('window');

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Header />
                <View style={styles.wrapper}>
                    <ScrollView 
                        horizontal={true} 
                        decelerationRate={0}
                        snapToInterval={width - 60}
                        snapToAlignment={"center"}     
                        contentInset={{
                            top: 0,
                            left: 30,
                            bottom: 0,
                            right: 30,
                        }} 
                        style={styles.scrollview}>
                        {videos.map((item, key) =>
                            <VideoLists key={item.id} />
                        )}
                    </ScrollView>
                </View>
            </View>
        );
    }
}