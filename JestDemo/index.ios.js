/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class JestDemo extends Component {

  constructor () {
    super();

    this.state = {
      showText: false
    }
    this.toggleText = this.toggleText.bind(this);
  }

  toggleText () {
    this.setState({
      showText: !this.state.showText
    });
  }

  _renderMoreText () {
    if (this.state.showText) {
      return (
        <View>
          <Text>
            Here's some more text
          </Text>
        </View>
      ); 
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!!!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Button 
          onPress={this.toggleText}
          color="#841584" 
          title={this.state.showText ? 'Show more' : 'Show less'} 
        />
        {this._renderMoreText()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('JestDemo', () => JestDemo);
