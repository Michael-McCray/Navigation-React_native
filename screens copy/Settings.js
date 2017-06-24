import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import {Tabs} from '../config/router';

class Settings extends Component {
  constructor(){
    super();
    this.handleSettingsPress = this.handleSettingsPress.bind(this);
  }

  handleSettingsPress(){
    this.props.navigation.navigate('Me')
  }
  render() {
    return (
      <View>
      <ScrollView>
        <List>
          <ListItem
            title="Notifications"
          />
          <ListItem
            title="Profile"
            onPress={this.handleSettingsPress}
          />
          <ListItem
            title="Password"
          />
        </List>
        <List>
          <ListItem
            title="Sign Out"
            rightIcon={{ name: 'cancel' }}
          />
        </List>
      </ScrollView>
      <Tabs />
      </View>
    );
  }
}

export default Settings;
