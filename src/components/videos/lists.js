/**
 * Video Lists 
 * 
 * @author      Sandi Andrian <andrian.sandi@gmail.com>
 * @since       Feb 10, 2019
 **/

import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from 'react-native-elements';

// import styles
import styles from './videos.style';

export default class VideoLists extends Component {
    render() {
        return (
            // implemented without image with header
            <View style={styles.container}>
                <Image style={styles.image}
                    resizeMode="cover"
                    source={{ uri: 'https://i.ytimg.com/vi/JTMfFspMenk/maxresdefault.jpg' }} />
            </View>
            // <Card containerStyle={styles.container} 
            //       wrapperStyle={styles.wrapper} 
            //       dividerStyle={styles.wrapper} 
            //       titleStyle={styles.wrapper}
            //       featuredTitleStyle={styles.wrapper}
            //       featuredSubtitleStyle={styles.wrapper}
            //       imageWrapperStyle={styles.wrapper}
            //       imageStyle={styles.image} 
            //       image={{ uri: 'https://1.bp.blogspot.com/-IkWedlHG2MU/WzX5sqyCkyI/AAAAAAAAAh8/_fJ5_FCYbqYTET-befN0J8C-7mJtS2gkACLcBGAs/s1600/orb%2Borigin.png' }}>
            //     <Text style={{ borderWidth: 0 }}>Upin Ipin</Text>
            // </Card>
        )
    }
}