/**
 * Video Lists 
 * 
 * @author      Sandi Andrian <andrian.sandi@gmail.com>
 * @since       Feb 10, 2019
 **/

import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card } from 'react-native-elements';

// import styles
import styles from './videos.style';

export default class VideoLists extends Component {
    render() {
        return (
            // implemented without image with header
            <Card containerStyle={styles.wrapper} imageStyle={styles.image} image={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
            </Card>
        )
    }
}