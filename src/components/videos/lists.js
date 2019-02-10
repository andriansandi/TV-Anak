/**
 * Video Lists 
 * 
 * @author      Sandi Andrian <andrian.sandi@gmail.com>
 * @since       Feb 10, 2019
 **/

const users = [
    {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
    },
]

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'

export default class VideoLists extends Component {
    render() {
        return (
            // implemented without image with header
            <Card image={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg' }}>
                <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                </Text>
            </Card>
        )
    }
}