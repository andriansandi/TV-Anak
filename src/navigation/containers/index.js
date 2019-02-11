/**
 * Router Stack Navigator
 * 
 * https://github.com/facebook/react-native
 * @author    	Sandi Andrian <sandi@kodrindonesia.com>
 * @link      	https://kodrindonesia.com
 * @package  	BelajarNavigasiReact
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

import Home from '../../screens/home';

const navigator = createStackNavigator({
	Home: Home
}, {
	initialRouteName: 'Home',
	headerMode: 'none',
	cardStyle: {
		backgroundColor: "transperent"
	}
});

export default createAppContainer(navigator);