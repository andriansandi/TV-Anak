/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { Alert, Platform, StyleSheet, View} from 'react-native';

// React Native Element UI
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, Input, ThemeProvider } from 'react-native-elements';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

  _onPressButton() {
    Alert.alert("Logging in...");
  }

  render() {
    return (
      <View style={styles.container}>
        
        <ThemeProvider>
          <Input
            placeholder='Nomor Handphone'
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.input}
            keyboardType="numeric"
            maxLength={13}
          />
          <Input
            placeholder='PIN'
            containerStyle={styles.inputContainer}
            inputContainerStyle={styles.input}
            keyboardType="numeric"
            maxLength={6}
            secureTextEntry={true}
          />
          <Button title="Login" onPress={this._onPressButton} />
        </ThemeProvider>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#fff',
    paddingLeft: 40,
    paddingRight: 40
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  inputContainer: {
    paddingLeft: 0,
    paddingRight: 0
  },
  input: {
    marginBottom: 20,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    paddingLeft: 10,
    paddingRight: 10
  }
});