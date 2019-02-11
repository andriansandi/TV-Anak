/**
 * Video Style
 * 
 * @author      Sandi Andrian <andrian.sandi@gmail.com>
 * @since       Feb 11, 2019
 **/

import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    
    container: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        width: 240,
        height: 200,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 10,
        marginRight: 10,
        flex: 1 
    },

    wrapper: {
        borderWidth: 0,
    },  

    image: {
        width: 240,
        height: 200,
        borderWidth: 0,
        borderRadius: 8,
        overflow: 'hidden'
    }

});