import React, { Component } from 'react';
import {
  AppRegistry,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActionConst,
} from 'react-native';
import {
  Actions,
} from 'react-native-router-flux';

export default class logout extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={{
        marginTop: 120,
        borderColor: '#FFFFFF',
        alignItems: 'center'
      }}>
        <Text style={{
          fontSize: 20,
          color: '#2E2E2E'
        }}>
          ログアウトしますか?
        </Text>
        <View style={{
          backgroundColor: '#00BFFF',//'#2EFEC8',
          marginLeft: 80,
          marginRight: 60,
          marginTop: 15,
          width: 100,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
        }}
        >
          {/* <TouchableOpacity onPress={this._onPressButton.bind(this)}> */}
          <TouchableOpacity onPress={ Actions.login }>
            <Text style={{
              color:'white',
              fontSize:15
            }}>
              OK
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}