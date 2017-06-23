import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class MyScene extends Component {
  static navigationOptions = {
    title: 'Welcome To Scene 1',
  };
  constructor(props, context) {
    super(props, context);
    this._onForward = this._onForward.bind(this);
  }




  render() {
    return (
      <View>
        <Text>Hi! My name is {this.props.title}.</Text>
        <Button
         onPress={ this.props.nav }
         title="Tap me to load the next scene"
       />
      </View>
    )
  }
}
