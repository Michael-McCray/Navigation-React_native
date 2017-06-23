import React from 'react';
import { Tabs } from './config/router';
// import MyScene from './components/scene1';
// import { StackNavigator } from 'react-navigation';

// import { StyleSheet, Text, View, TextInput, ScrollView, ListView } from 'react-native';

export default class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
  //   this.state = {
  //     dataSource: ds.cloneWithRows([
  //       'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
  //     ])
  //   };
  // }
  render() {
    return (
      <Tabs />
    );
  }
}

// const Nav = StackNavigator({
//   MyScene: { screen: MyScene },
//
// });
//
//
// const styles2 = StyleSheet.create({
//   background:{
//     padding: 30,
//     backgroundColor:'blue'
//   }
// })
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
//
//
// <View style={styles.container}>
//
//   <Text>My Neck </Text>
//   <Text>My Back </Text>
//   <Text >Lick my PUSSY and my ASS</Text>
//   <TextInput
//     style={{height: 80}}
//     placeholder='lick it right'
//     onChangeText={(text)=>this.setState({text})}
//   />
//
//   <View style={styles2.background} >
//     <Text>New Input Element</Text>
//   </View>
//
//   <ScrollView>
//   <Text>Work it  </Text>
//   <Text>Let me work it </Text>
//   <Text >Lay down flip it and reverse it</Text>
//   </ScrollView>
//
//   <ListView
//     dataSource={this.state.dataSource}
//     renderRow={(rowData) => <Text>{rowData}</Text>}
//   />
//
//
//
// </View>
